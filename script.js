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
	alert("Hey")
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
console.log(form.lastName.value = "hey");

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
console.log(contactInformation);

console.log(contactListBloc.children)