let divContacts = document.createElement("div");
divContacts.setAttribute("class", "styliser");
const mainSection = document.querySelector("#contact-list");
mainSection.appendChild(divContacts);
const form = document.querySelector("form");
/* const paragraph = document.createElement('p');
const divUnique = document.createElement('div');

divUnique.setAttribute("id", "bloc-contact");*/

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

/*	const photoContact = document.createElement("p");
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
divContacts.appendChild(closeP);
	/*divUnique.appendChild(photoContact);
	divUnique.appendChild(divInfo);
	divUnique.appendChild(closeP);
	divContacts.appendChild(divUnique);
	*/
	
	 divContacts.innerHTML += `<div class="bloc-contact">
															<div class="event">
	 														<p class="photo"><img src="${name}" alt="Photo de ${prenom}"/></p>
	 														<div class="info">
	 															<h2> ${prenom} ${nom} </h2>
																<h3>${groupe}</h3>
	 															<p class="info-list">${info}</p>
	 														</div>
															</div>
	 														<p><a class="fermeture"><img src="croix.png"></a></p>
	 													</div>`;

	const blocContact = document.querySelector(".bloc-contact");
	console.log(divContacts);
/*nomsContact.textContent = `${prenom} ${nom}`;
	groupContact.textContent = groupe;
	infoContact.textContent = info;
	*/
	
	const divEvent = document.querySelector(".event");
	divEvent.addEventListener('click', () => {
		console.log("ça marche");
		// divUnique.remove();
		event.target.firstName.value = prenom;
	event.target.lastName.value	= nom  ;
	event.target.group.value = groupe;
	event.target.bio.value = info ;
	//  = file ;
	event.target.photo.files[0] = name ;
		
	})
	const closeP = document.querySelector(".fermeture");
closeP.addEventListener("click", () => blocContact.remove());

	// blocContact.addEventListener("click", function(){
	// 	blocContact.remove();
	// })
	
	
	const infoList = document.getElementsByClassName("info-list");
	mainSection.style.display = "block";
	form.reset();
});