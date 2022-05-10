const divContacts = document.createElement("div");
const contactsName = document.createElement("h1");
const contactGroup = document.createElement("h2");
const contactBio = document.createElement("p");

const mainSection = document.querySelector("section");
const emptyParagraph = document.querySelector("#temporaire");

const form = document.querySelector("form");

form.addEventListener("submit", function(event){
	event.preventDefault();
	const contactItems = {};
	for (let detail of event.target){
		console.log(detail);
		const {name, value} = detail;
	 	if(detail){
			contactItems[name] = value;
			let array = contactItems;
		}
		
	}
	document.write(array);
	
})