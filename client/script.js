let contactListBloc = document.createElement("div");
contactListBloc.setAttribute("class", "bloc-contact");
let imagePreview = document.querySelector('.image-contact');
const contactListContainer = document.querySelector("#contact-list");
contactListContainer.appendChild(contactListBloc);
const form = document.querySelector("form");
const submitButton = document.querySelector("[type='submit']");
let tableContact = [];

let previewPicture = function (e, display){
	const [picture] = e.files;
	if(e){
		display.src = URL.createObjectURL(picture);
	}
}

function createElement(){
	const photoContactContainer = document.createElement("p");
	photoContactContainer.setAttribute("class", "photo");
	const imageContact = document.createElement("img");
	photoContactContainer.append(imageContact);
	const contactDescription = document.createElement("div");
	contactDescription.setAttribute("class", "info");
	const contactName = document.createElement('h2');
	const contactGroup = document.createElement('h3');
	const contactBio = document.createElement('p');
	const contactInformation = document.createElement('p');
	
	contactInformation.setAttribute('class', 'event');
	contactDescription.append(contactName);
	contactDescription.append(contactGroup);
	contactDescription.append(contactBio);
	contactInformation.append(photoContactContainer);
	contactInformation.append(photoContactContainer);
	contactInformation.append(contactDescription);
	
	const closeContact = document.createElement('p');
	removeContact(closeContact, contactInformation);
	closeContact.setAttribute("id", "fermeture");
	const imageClose = document.createElement('img');
	imageClose.setAttribute("src", "croix.png");
	closeContact.append(imageClose);
	contactInformation.append(closeContact);
	contactListBloc.append(contactInformation);
	console.log(contactListBloc.children);

	if (tableContact.length === 0) return;
	else{
		tableContact.map((table, index) => {
			contactInformation.setAttribute("id", index);
			contactName.textContent = `${table.firstName} ${table.lastName}`;
			contactGroup.textContent = table.group;
			contactBio.textContent = table.info;
			imageContact.src = table.photo;
			imageContact.setAttribute("src", table.photo);
			imageContact.setAttribute("alt", `Photo de ${table.firstName}`);
			console.log(index)
		})
	}
}

function removeContact(closer, content){
	closer.addEventListener("click", () => content.remove());
}

function editContact(form){
	submitButton.value = "Modifier";
	const contactInformation = document.querySelector('.event');
	console.log(contactInformation.id);
	for(let i = 0; i < tableContact.length; i++){
		if(i === contactInformation.id){
			form.firstName.value = tableContact[i].firstName;
			form.lastName.value	= tableContact[i].lastName;
			form.group.value = tableContact[i].group;
			form.bio.value = tableContact[i].info;
			form.photo.files[0] = tableContact[i].photo;
		}
	}
	console.log(tableContact);
	console.log('J\'accède');
}

function createContact(e){
	let lastName = e.target.lastName.value,
		firstName = e.target.firstName.value,
		group  = e.target.group.value,
		info   = e.target.bio.value,
		photo  = e.target.photo.files[0];

		tableContact.push({
			lastName : lastName,
			firstName : firstName,
			group : group, 
			info : info,
			photo : URL.createObjectURL(photo)
		})
	createElement();	
}

form.addEventListener("submit", function(e){
	e.preventDefault();

	createContact(e);
	imagePreview.src = "";
	form.reset();
});
const contactInformation = document.querySelectorAll('.event');

contactListBloc.children.length === 0 ? null : contactListBloc.children.map((contact) => {
	contact.addEventListener("click", editContact(form))
	console.log(contact);
});


// let divContacts = document.createElement("div");
// divContacts.setAttribute("class", "bloc-contact");
// let imagePreview = document.querySelector('.image-contact');
// const mainSection = document.querySelector("#contact-list");
// mainSection.appendChild(divContacts);
// const form = document.querySelector("form"); 
// const paragraph = document.createElement('p');
// const submitButton = document.querySelector("[type='submit']");

// let previewPicture = function (e){
// 	const [picture] = e.files;
// 	if(picture){
// 		imagePreview.src = URL.createObjectURL(picture);
// 	}
// }
	
// form.addEventListener("submit", function(event){
// 	event.preventDefault();

// 	let prenom = event.target.firstName.value;
// 	let nom = event.target.lastName.value;
// 	let groupe = event.target.group.value;
// 	let info = event.target.bio.value;
// 	let file = event.target.photo.files[0];
// 	let name = URL.createObjectURL(file);
	
// 	const photoContact = document.createElement("p");
// 	photoContact.setAttribute("class", "photo");
// 	const imageContact = document.createElement("img");
// 	imageContact.setAttribute("src", name);
// 	imageContact.setAttribute("alt", `Photo de ${prenom}`);
// 	photoContact.append(imageContact);
// 	const divInfo = document.createElement("div");
// 	divInfo.setAttribute("class", "info");
// 	const nomsContact = document.createElement('h2');
// 	const groupContact = document.createElement('h3');
// 	const infoContact = document.createElement('p');
// 	const divEvent = document.createElement('div');
	
// 	divEvent.setAttribute('class', 'event');
// 	divInfo.append(nomsContact);
// 	divInfo.append(groupContact);
// 	divInfo.append(infoContact);
// 	divEvent.append(photoContact);
// 	divEvent.append(photoContact);
// 	divEvent.append(divInfo);
	
// 	const closeP = document.createElement('p');
// 	const link = document.createElement('a')
// 	link.setAttribute("id", "fermeture");
// 	const imageClose = document.createElement('img');
// 	imageClose.setAttribute("src", "croix.png");
// 	link.append(imageClose);
// 	closeP.append(link);
// 	divEvent.append(closeP);
// 	divContacts.append(divEvent);
// 	nomsContact.textContent = `${prenom} ${nom}`;
// 	groupContact.textContent = groupe;
// 	infoContact.textContent = info;
	
// 	divEvent.addEventListener('click', () => {
// 		console.log("ça marche");
// 		submitButton.value = "Modifier";
// 		event.target.firstName.value = prenom;
// 		event.target.lastName.value	= nom;
// 		event.target.group.value = groupe;
// 		event.target.bio.value = info;
// 		event.target.photo.files[0] = name;
// 		form.addEventListener("submit", function (e) {
// 			e.preventDefault();
// 			divEvent.textContent = prenom;
// 			divEvent.textContent = nom;
// 			divEvent.textContent = groupe;
// 			divEvent.textContent = info;
// 			// divEvent.textContent = file;
// 			// divEvent.textContent = name;
// 		})
// 	})
// 	closeP.addEventListener("click", () => divEvent.remove());
// 	const eventFile = document.querySelector("#event-file");
// 	eventFile.addEventListener('click', function(){
// 		const imageSource = document.querySelector("#photo");
// 		imageSource.setAttribute("src", name);
// 	})
	
// 	const infoList = document.getElementsByClassName("info-list");
// 	mainSection.style.display = "block";
// 	imagePreview.src = "";
// 	form.reset();
// });