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

// Event listeners para os botões de adicionar e editar
document.querySelector(".action-buttons button:nth-child(1)").addEventListener("click", () => openModal("addProfileModal"));
document.querySelector(".action-buttons button:nth-child(2)").addEventListener("click", () => openModal("editProfileModal"));
document.getElementById("saveNewProfileButton").addEventListener("click", saveNewProfile);
document.getElementById("saveEditedProfileButton").addEventListener("click", saveEditedProfile);
document.getElementById("searchEditButton").addEventListener("click", searchProfile);
