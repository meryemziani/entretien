function updateMessage() {
    const container = document.getElementById('welcomeMessage');
    container.innerHTML = '';

    // Obtention de la valeur de l'attribut 'name'
    const name = document.getElementById('nameInput').value;

    const welcomeText = document.createElement('span');
    welcomeText.textContent = 'Welcome, ';
    container.appendChild(welcomeText);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    container.appendChild(nameSpan);


    const exclamationText = document.createElement('span');
    exclamationText.textContent = '!';
    container.appendChild(exclamationText);
    }

    const nameInput = document.getElementById('nameInput');
    nameInput.addEventListener('input', updateMessage);

// Mise à jour du message initial
updateMessage();