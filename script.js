const divContacts = document.createElement("div");
divContacts.setAttribute("id", "styliser");
const mainSection = document.querySelector("#contact-list");
const form = document.querySelector("form");
const paragraph = document.createElement('p');
const divUnique = document.createElement('div');

divUnique.setAttribute("id", "bloc-contact");

form.addEventListener("submit", function(event){
	event.preventDefault();

	// const inputValues = {};

	// for(const champ of this.elements){
	// 	const{name, value} = champ;
	// 	if(name){
	// 		inputValues[name] = value;
	// 		alert(inputValues[name]);
			
	// 	}
	// }
	const prenom = event.target.firstName.value;
	const nom = event.target.lastName.value;
	const groupe = event.target.group.value;
	const info = event.target.bio.value;
	const file = event.target.photo.files[0];
	const name = URL.createObjectURL(file);

	const photoContact = document.createElement("p");
	photoContact.setAttribute("class", "photo");
	const imageContact = document.createElement("img");
	imageContact.setAttribute("src", name);
	imageContact.setAttribute("alt", `Photo de ${prenom}`);
	photoContact.appendChild(imageContact);
	const divInfo = document.createElement("div");
	divInfo.setAttribute("class", "info");
	const nomsContact = document.createElement('h2');
	const groupContact = document.createElement('h3');
	const infoContact = document.createElement('p');
	divInfo.appendChild(nomsContact);
	divInfo.appendChild(groupContact);
	divInfo.appendChild(infoContact);
	const closeP = document.createElement('p');
	const link = document.createElement('a')
	link.setAttribute("id", "fermeture");
	const imageClose = document.createElement('img');
	imageClose.setAttribute("src", "croix.png");
	link.appendChild(imageClose);
	closeP.appendChild(link);

	divUnique.appendChild(photoContact);
	divUnique.appendChild(divInfo);
	divUnique.appendChild(closeP);
	divContacts.appendChild(divUnique);

	
	// divContacts.innerHTML += `<div class="bloc-contact">
	// 														<p class="photo"><img  alt="Photo de ${prenom}"/></p>
	// 														<div class="info">
	// 															<p class="info-list"> ${prenom} ${nom} <br/>${groupe}</p>
	// 															<p class="info-list">${info}</p>
	// 														</div>
	// 														<p class="fermeture"><img src="croix.png" /><p>
	// 													</div>`;
	
	nomsContact.textContent = `${prenom} ${nom}`;
	groupContact.textContent = groupe;
	infoContact.textContent = info;
	
	
	
	divUnique.addEventListener('click', () => {
		console.log("ça marche");
		divUnique.remove();
	})
	// blocContact.addEventListener("click", function(){
	// 	blocContact.remove();
	// })
	
	mainSection.appendChild(divContacts);
	const infoList = document.getElementsByClassName("info-list");
	mainSection.style.display = "block";
	form.reset();
});