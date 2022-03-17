const BASE_URL = 'http://localhost:3000';
const tableDiv = document.querySelector('.table');
const billsEl = document.getElementById('bills');

async function getBills() {
  const token = localStorage.getItem('token24');
  const resp = await fetch(`${BASE_URL}/bills/2`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs.data);
  renderBills(dataInJs.data);
}
getBills();

function renderBills(postsArray) {
  postsArray.forEach((post) => {
    const postTr = document.createElement('tr');
    const postTr2 = document.createElement('tr');
    const postId = document.createElement('td');
    postId.textContent = `${post.id}`;
    const postDescription = document.createElement('td');
    postDescription.textContent = `${post.description}`;
    const postAmount = document.createElement('td');
    postAmount.textContent = `${post.amount}`;
    billsEl.append(postTr, postId, postDescription, postAmount, postTr2);
  });
}

const formElement = document.getElementById('addBill');
formElement.addEventListener('submit', formSubmitFn);

function formSubmitFn(event) {
  event.preventDefault();
  const groupId = 2;
  const amountInputValue = document.getElementById('amountInput').value;
  const descInputValue = document.getElementById('descriptionInput').value;
  const dataToSend = {
    group_id: groupId,
    amount: amountInputValue,
    description: descInputValue,
  };
  createBillToDb(dataToSend);
}

async function createBillToDb(dataToSend) {
  const resp = await fetch('http://localhost:3000/bills', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
  });
  const data = await resp.json();
  location.reload();
}
