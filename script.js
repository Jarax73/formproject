let divContacts = document.createElement("div");
divContacts.setAttribute("class", "bloc-contact");
const mainSection = document.querySelector("#contact-list");
mainSection.appendChild(divContacts);
const form = document.querySelector("form"); 
const paragraph = document.createElement('p');
const submitButton = document.querySelector("[type='submit']");


form.addEventListener("submit", function(event){
	event.preventDefault();

	let prenom = event.target.firstName.value;
	let nom = event.target.lastName.value;
	let groupe = event.target.group.value;
	let info = event.target.bio.value;
	let file = event.target.photo.files[0];
	let name = URL.createObjectURL(file);

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
	nomsContact.textContent = `${prenom} ${nom}`;
	groupContact.textContent = groupe;
	infoContact.textContent = info;
	
	divEvent.addEventListener('click', () => {
		console.log("ça marche");
		submitButton.value = "Modifier";
		event.target.firstName.value = prenom;
		event.target.lastName.value	= nom;
		event.target.group.value = groupe;
		event.target.bio.value = info;
		event.target.photo.files[0] = name;
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			divEvent.innerHTML = prenom;
			divEvent.innerHTML = nom;
			divEvent.innerHTML = groupe;
			divEvent.innerHTML = info;
			divEvent.innerHTML = file;
			divEvent.innerHTML = name;
		})
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