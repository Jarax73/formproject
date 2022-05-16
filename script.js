let divContacts = document.createElement("div");
divContacts.setAttribute("class", "bloc-contact");
const mainSection = document.querySelector("#contact-list");
mainSection.appendChild(divContacts);
const form = document.querySelector("form"); 

const paragraph = document.createElement('p');
const divUnique = document.createElement('div');

// divUnique.setAttribute("id", "bloc-contact");

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
	photoContact.append(imageContact);
	const divInfo = document.createElement("div");
	divInfo.setAttribute("class", "info");
	const nomsContact = document.createElement('h2');
	const groupContact = document.createElement('h3');
	const infoContact = document.createElement('p');
	const divEvent = document.createElement('div');
	divEvent.setAttribute('class', 'event');
	
	divInfo.append(nomsContact);
	divInfo.append(groupContact);
	divInfo.append(infoContact);
	divEvent.append(photoContact);
	divEvent.append(photoContact);
	divEvent.append(divInfo);
	 const closeP = document.createElement('p');
	const link = document.createElement('a')
	link.setAttribute("id", "fermeture");
	const imageClose = document.createElement('img');
	imageClose.setAttribute("src", "croix.png");
	link.append(imageClose);
	closeP.append(link);
	
	divEvent.append(closeP);
	divContacts.append(divEvent);
	
	console.log(mainSection);
	nomsContact.textContent = `${prenom} ${nom}`;
	groupContact.textContent = groupe;
	infoContact.textContent = info;
	
	divInfo.addEventListener('click', () => {
		console.log("ça marche");
		event.target.firstName.value = prenom;
		event.target.lastName.value	= nom  ;
		event.target.group.value = groupe;
		event.target.bio.value = info ;
		event.target.photo.files[0] = name ;
		
	})
closeP.addEventListener("click", () => divEvent.remove());
const eventFile = document.querySelector("#event-file");
	eventFile.addEventListener('click', function(){
		const imageSource = document.querySelector("#photo");
		imageSource.setAttribute("src", name);
	})
	
	
	const infoList = document.getElementsByClassName("info-list");
	mainSection.style.display = "block";
	form.reset();
});