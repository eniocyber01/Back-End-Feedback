// Função para abrir o modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Função para fechar o modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Função para adicionar um novo perfil
function saveNewProfile() {
    const fullName = document.getElementById("addFullName").value.trim();
    const department = document.getElementById("addDepartment").value.trim();
    const role = document.getElementById("addRole").value.trim();
    const room = document.getElementById("addRoom").value.trim();
    const manager = document.getElementById("addManager").value.trim();
    const errorMessage = document.getElementById("addErrorMessage");

    // Verifica se todos os campos estão preenchidos
    if (fullName && department && role && room && manager) {
        // Cria um novo item de perfil
        const profileContainer = document.querySelector(".profile-container");
        const newProfile = document.createElement("div");
        newProfile.classList.add("profile-item");

        const profileName = document.createElement("div");
        profileName.classList.add("profile-name");
        profileName.textContent = fullName;

        // Aqui você pode adicionar outras informações, como departamento, cargo, etc
        const profileDetails = document.createElement("div");
        profileDetails.classList.add("profile-details");
        profileDetails.textContent = `${department} - ${role} - Sala ${room} - Gerente: ${manager}`;

        newProfile.appendChild(profileName);
        newProfile.appendChild(profileDetails);
        profileContainer.appendChild(newProfile);

        // Fecha o modal e limpa os campos
        closeModal("addProfileModal");
        document.getElementById("addFullName").value = "";
        document.getElementById("addDepartment").value = "";
        document.getElementById("addRole").value = "";
        document.getElementById("addRoom").value = "";
        document.getElementById("addManager").value = "";
        errorMessage.textContent = "";
    } else {
        // Exibe uma mensagem de erro se algum campo estiver vazio
        errorMessage.textContent = "Todos os campos são obrigatórios.";
    }
}

// Função para pesquisar e carregar os dados do perfil no modal de edição
function searchProfile() {
    const searchName = document.getElementById("searchEditName").value.trim().toLowerCase();
    const profileItems = document.querySelectorAll(".profile-item");
    const errorMessage = document.getElementById("editErrorMessage");

    let profileFound = false;

    profileItems.forEach((item) => {
        const profileName = item.querySelector(".profile-name").textContent.toLowerCase();
        if (profileName === searchName) {
            // Preenche os campos de edição com os dados do perfil encontrado
            document.getElementById("editFullName").value = item.querySelector(".profile-name").textContent;
            // Preenche outros campos, como departamento, cargo, etc (você pode adicionar mais detalhes conforme necessário)
            profileFound = true;
        }
    });

    // Verifica se o perfil foi encontrado
    if (!profileFound) {
        errorMessage.textContent = "Perfil não encontrado.";
    } else {
        errorMessage.textContent = ""; // Limpa a mensagem de erro
    }
}

// Função para salvar as alterações do perfil
function saveEditedProfile() {
    const searchName = document.getElementById("searchEditName").value.trim().toLowerCase();
    const fullName = document.getElementById("editFullName").value.trim();
    const department = document.getElementById("editDepartment").value.trim();
    const role = document.getElementById("editRole").value.trim();
    const room = document.getElementById("editRoom").value.trim();
    const manager = document.getElementById("editManager").value.trim();
    const errorMessage = document.getElementById("editErrorMessage");

    // Verifica se todos os campos estão preenchidos
    if (searchName && fullName && department && role && room && manager) {
        const profileItems = document.querySelectorAll(".profile-item");
        let profileFound = false;

        profileItems.forEach((item) => {
            const profileName = item.querySelector(".profile-name").textContent.toLowerCase();
            if (profileName === searchName) {
                // Atualiza os dados do perfil encontrado
                item.querySelector(".profile-name").textContent = fullName;
                const profileDetails = item.querySelector(".profile-details");
                profileDetails.textContent = `${department} - ${role} - Sala ${room} - Gerente: ${manager}`;
                profileFound = true;
            }
        });

        if (profileFound) {
            closeModal("editProfileModal");
            errorMessage.textContent = "";
        } else {
            errorMessage.textContent = "Perfil não encontrado.";
        }
    } else {
        // Exibe uma mensagem de erro se algum campo estiver vazio
        errorMessage.textContent = "Todos os campos são obrigatórios.";
    }
}

const addHTMLedit = async (id) => {

    const response = await fetch(`http://localhost:8080/id/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const responseJson = await response.json();
    var funcao;
    if (responseJson.gestor == true) {
        funcao = "Gestor"
    } else {
        funcao = "Funcionario"
    }

    const htmlEdit = `
    <form class="modal-content" action="edit/${id}">
    <span class="close" onclick="closeModal('editProfileModal')">&times;</span>
    <h2>Editar Perfil</h2>
    <label>Nome Completo:<input type="text" id="addFullName" value="${responseJson.nome}"></label>
    <label>Descrição:<input type="text" id="addFullName" value="${responseJson.descricao}"></label>
    <label>Setor:<input type="text" id="addDepartment" value="${responseJson.departamento}"></label>
    <label>Função:<input type="text" id="addRole" value="${funcao}"></label>
    <label>Sala:<input type="text" id="addRoom" value="${responseJson.sala}"></label>
    <button onclick="saveNewProfile()">Salvar</button>
    <div class="error-message" id="addErrorMessage"></div>
    </form>
    `
    console.log(htmlEdit);
    document.getElementById("editProfileModal").innerHTML = htmlEdit;
    document.getElementById("editProfileModal").style.display = "block";
}

const deleteUser = async (id) => {

    const response = await fetch(`http://localhost:8080/delete/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const responseJson = await response.json();

    window.location.reload();
}