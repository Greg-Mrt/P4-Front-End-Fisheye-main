function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

console.log('ouverture');

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

console.log('fermeture');

//check "prénom" data
function FirstName () {
      let inputValue = document.getElementById("prenom").value;
      if (inputValue !== null) {
        return true;
    }   
      else {
      return false;
    }
  }
  
  //check "nom de famille" data
  function LastName () {
    let inputValue = document.getElementById("nom").value;
    if (inputValue !== null) {
      return true;
  }   
    else {
    return false;
  }
}
  
  //check "email" data
  function Email () {
    let inputValue = document.getElementById("email").value;
    if (inputValue !== null) {
      return true;
  }   
    else {
    return false;
  }
}
  
function message () {
    let inputValue = document.getElementById("message").value;
    if (inputValue !== null) {
      return true;
  }   
    else {
    return false;
  }
}
  
    // fonction pour valider le formulaire
  document.querySelector("modal").addEventListener("submit", (e) => {
    // "annuler" le comportement par défaut
    e.preventDefault();
  
  viderErreur();
    
  
    // vérifier un par un tous les champs
    const verifFirstName = FirstName();
    const verifLastName = LastName();
    const verifEmail = Email();
    const verifMessage = message();
  
  
    // si tout est vrai 
    if(verifFirstName && verifLastName && verifEmail && verifMessage)
    {
      // j'affiche le message de succès
      document.querySelector("form").style.display="none";
      let message=document.createElement("p");
      message.innerHTML="Merci ! Votre inscription est validée.";
      message.style.color="red";
      message.style.textAlign="center";
      message.style.marginTop="100px";
      message.style.marginBottom="100px";
      message.style.marginRight="40px";
      message.style.marginLeft="40px";
      message.style.fontSize="25px";
      document.querySelector(".modal-body").appendChild(message);
    }
    // si j'ai au moins un faux
    else
    {
      if(!verifFirstName)
      {
        document.querySelector("#first").parentElement.setAttribute("data-error", "Saisissez un prénom valide")
        document.querySelector("#first").parentElement.setAttribute("data-error-visible", true)
      }
  
      if(!verifLastName)
      {
        document.querySelector("#last").parentElement.setAttribute("data-error", "Saisissez un nom valide")
        document.querySelector("#last").parentElement.setAttribute("data-error-visible", true)
      }
  
      if(!verifEmail)
      {
        document.querySelector("#email").parentElement.setAttribute("data-error", "Saisissez un email valide")
        document.querySelector("#email").parentElement.setAttribute("data-error-visible", true)
      }
  
      if(!verifMessage)
      {
        document.querySelector("#message").parentElement.setAttribute("data-error", "Saisissez une date de naissance")
        document.querySelector("#message").parentElement.setAttribute("data-error-visible", true)
      }

    }
  
  })
  
  // vider les erreurs
    function viderErreur() {
      document.querySelector("#first").parentElement.setAttribute("data-error", "")
      document.querySelector("#first").parentElement.setAttribute("data-error-visible", false)
  
      document.querySelector("#last").parentElement.setAttribute("data-error", "")
      document.querySelector("#last").parentElement.setAttribute("data-error-visible", false)
  
      document.querySelector("#email").parentElement.setAttribute("data-error", "")
      document.querySelector("#email").parentElement.setAttribute("data-error-visible", false)
  
      document.querySelector("#message").parentElement.setAttribute("data-error", "")
      document.querySelector("#message").parentElement.setAttribute("data-error-visible", false)
  
    }