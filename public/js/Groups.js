const BASE_URL = 'http://localhost:3000';
const postsDivEl = document.querySelector('.posts-div');

async function getTutorials() {
  const token = localStorage.getItem('token24');
  const resp = await fetch(`${BASE_URL}/groups`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const dataInJs = await resp.json();
  renderGroups(dataInJs.data);
}
getTutorials();

function renderGroups(postsArray) {
  const postsEl = document.createElement('div');
  postsEl.className = 'posts';
  postsArray.forEach((post) => {
    const singleGroupEl = makeGroupItem(post);
    postsEl.append(singleGroupEl);
  });
  // document.body.append(postsEl);
  postsDivEl.append(postsEl);
}

function makeGroupItem(post) {
  const artEl = document.createElement('article');
  artEl.setAttribute('onclick', `clickFn(${post.id})`);
  artEl.className = 'post';
  const h2El = document.createElement('h2');
  h2El.textContent = post.name;
  const pEl = document.createElement('p');
  pEl.textContent = `ID: ${post.id}`;
  artEl.append(pEl, h2El);
  return artEl;
}

function clickFn(id) {
  window.location.replace('Bills.html');
}
