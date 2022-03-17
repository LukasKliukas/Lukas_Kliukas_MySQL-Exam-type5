-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2022 at 02:45 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bills_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(2) NOT NULL,
  `group_id` int(2) NOT NULL,
  `user_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` int(2) NOT NULL,
  `group_id` int(2) NOT NULL,
  `amount` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `group_id`, `amount`, `description`) VALUES
(1, 2, '10 Eur', 'Savings for ice-cream on holidays'),
(2, 2, '50 Eur', 'Savings for public transport on vacation'),
(3, 2, '10 Eur', 'Money for breakfasts'),
(7, 2, '3 Eur', 'Money for a dog food');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(2) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`) VALUES
(1, 'Earnings from work'),
(2, 'Savings for vacation'),
(6, 'Car repair costs'),
(7, 'Money for vacation'),
(8, 'Hospital money'),
(9, 'Money for donation');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(2) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `reg_timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `reg_timestamp`) VALUES
(1, '', 'my2@email.com', '$2a$10$fezi5PuqNtMvp1bwi1iXzekRcwzgZehOU4MxmkwSw/OukNRb4uBka', '2022-03-16 08:14:07'),
(2, 'James Bond', 'bond@email.com', '$2a$10$JEHGmOGyGAA9cvmbUdF7KOVHrx9acV1M9/Od/mGM5bA09aERCVXIC', '2022-03-16 08:46:04'),
(3, 'James Bondd', 'jasmes@email.com', '$2a$10$qC9ADDPAE7NKn.LHoyCoTORWslmqBcyDygo.m5rzhe1TRoJv4.gWe', '2022-03-16 09:00:47'),
(4, 'Lukas Kliukas', 'lukaskliukas@gmail.com', '$2a$10$eWpwgQAwWEDfPEhL3Ntf9uSTwxdNdmxp7YEaVZTzy1KBm2Dt.Mcpu', '2022-03-17 12:34:37'),
(5, 'asdads', 'bondas@email.com', '$2a$10$RQp7wlPJDH95vAYTUJu5u.LjWQ/gJjZ49oLKu6EIrJyA/kW9YniRi', '2022-03-17 12:45:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usersToAccounts` (`user_id`),
  ADD KEY `groupsToAccounts` (`group_id`);

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `billsToGroups` (`group_id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `groupsToAccounts` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  ADD CONSTRAINT `usersToAccounts` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `bills`
--
ALTER TABLE `bills`
  ADD CONSTRAINT `billsToGroups` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
