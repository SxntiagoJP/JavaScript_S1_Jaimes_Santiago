const API_URL = 'https://<tu-id>.mockapi.io/api/v1/users';
const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const userIdInput = document.getElementById('userId');
const userList = document.getElementById('userList');

async function fetchUsers() {
  const res = await fetch(API_URL);
  const users = await res.json();
  renderUsers(users);
}

function renderUsers(users) {
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${user.name} - ${user.email}
      <button onclick="editUser('${user.id}', '${user.name}', '${user.email}')">Editar</button>
      <button onclick="deleteUser('${user.id}')">Eliminar</button>
    `;
    userList.appendChild(li);
  });
}

userForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const id = userIdInput.value;

  if (id) {
    // Actualizar
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
  } else {
    // Crear
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
  }

  userForm.reset();
  userIdInput.value = '';
  fetchUsers();
});

function editUser(id, name, email) {
  userIdInput.value = id;
  nameInput.value = name;
  emailInput.value = email;
}

async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  fetchUsers();
}

fetchUsers();