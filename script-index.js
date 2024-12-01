function showLoginForm() {
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("register-form").classList.add("hidden");
    document.getElementById("user-panel").classList.add("hidden");
    document.getElementById("edit-form").classList.add("hidden");
}

function showRegisterForm() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("register-form").classList.remove("hidden");
}

function showUserPanel() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("register-form").classList.add("hidden");
    document.getElementById("user-panel").classList.remove("hidden");
    document.getElementById("edit-form").classList.add("hidden");
}

function showEditForm() {
    document.getElementById("edit-form").classList.remove("hidden");
    document.getElementById("user-panel").classList.add("hidden");

    const user = JSON.parse(localStorage.getItem("currentUser"));
    document.getElementById("edit-phone").value = user.phone;
    document.getElementById("edit-blood").value = user.bloodType;
    document.getElementById("edit-illness").value = user.illnesses;
    document.getElementById("edit-eps").value = user.eps;
}

function register() {
    const username = document.getElementById("reg-username").value;
    const id = document.getElementById("reg-id").value;
    const phone = document.getElementById("reg-phone").value;
    const bloodType = document.getElementById("reg-blood").value;
    const illnesses = document.getElementById("reg-illness").value;
    const eps = document.getElementById("reg-eps").value;

    if (!username || !id || !phone || !bloodType || !eps) {
        alert("Por favor complete todos los campos.");
        return;
    }

    const user = { username, id, phone, bloodType, illnesses, eps };
    localStorage.setItem(id, JSON.stringify(user));
    alert("Registro exitoso. Ahora puede iniciar sesión.");
    showLoginForm();
}

function login() {
    const username = document.getElementById("login-username").value;
    const id = document.getElementById("login-id").value;

    const user = JSON.parse(localStorage.getItem(id));
    if (user && user.username === username) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        document.getElementById("user-name").textContent = user.username;
        document.getElementById("user-phone").textContent = user.phone;
        document.getElementById("user-blood").textContent = user.bloodType;
        document.getElementById("user-illness").textContent = user.illnesses;
        document.getElementById("user-eps").textContent = user.eps;
        showUserPanel();
    } else {
        alert("Nombre o documento incorrectos.");
    }
}

function saveChanges() {
    const phone = document.getElementById("edit-phone").value;
    const bloodType = document.getElementById("edit-blood").value;
    const illnesses = document.getElementById("edit-illness").value;
    const eps = document.getElementById("edit-eps").value;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    currentUser.phone = phone;
    currentUser.bloodType = bloodType;
    currentUser.illnesses = illnesses;
    currentUser.eps = eps;

    localStorage.setItem(currentUser.id, JSON.stringify(currentUser));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    alert("Información actualizada.");
    showUserPanel();
}

function logout() {
    localStorage.removeItem("currentUser");
    showLoginForm();
}