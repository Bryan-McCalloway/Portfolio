const buttonSubmitForm = document.getElementById("submit-form");
const returnFormApi = document.getElementById("modale-API");

buttonSubmitForm.addEventListener("click", () => {

    const contactFormFields = {
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        subject: document.querySelector('input[name="subject-form"]:checked').value,
        message: document.getElementById("message").value
    }
    console.log(contactFormFields);
    // Créer une requête AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 201) {
            const data = JSON.parse(xhr.responseText);

            console.log(data);
            // Afficher la réponse du serveur
            returnFormApi.innerHTML = `
                <h2>Message soumis avec succès. Détail :</h2>
                <p>Nom : ${data.name}</p>
                <p>Mail : ${data.mail}</p>
                <p>Subject : ${data.subject}</p>
                <p>Message : ${data.message}</p>
            `;
        } else {
            console.log("Erreur : Impossible de créer l'utilisateur.");
        }
    };

    xhr.onerror = function () {
        console.log("Erreur de connexion.");
    };

    // Envoyer les données
    xhr.send(JSON.stringify(contactFormFields));
});