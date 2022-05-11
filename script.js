const divContacts = document.createElement("div");
const contactPhoto = document.createElement("img");
const toRemove = document.querySelector("#toRemove");

const mainSection = document.querySelector("#contact-list");
const emptyParagraph = document.querySelector("#temporaire");
const form = document.querySelector("form");

form.addEventListener("submit", function(event){
	event.preventDefault();
	const contactItems = {};
	const prenom = event.target.firstName.value;
	const nom = event.target.lastName.value;
	const groupe = event.target.group.value;
	const info = event.target.bio.value;
	const file = event.target.photo.value;
	
	for (let detail of event.target){
		if(detail == undefined){
			alert("Remplissez tous les champs");
		}else{
			
			toRemove.remove();
			
		}
			
	}	
	divContacts.innerHTML += `<p><img src="${file}" alt="photo de ${prenom}"/> ${prenom} ${nom} <br/>${groupe}</p><p>${info}</p>`;
	mainSection.appendChild(divContacts);
	mainSection.style = "display: default";
})

// const div1 = document.createElement("div");
// const listContact = document.querySelector("#contact-list");

// div1.innerHTML = `<p>Comment ça va</p><p>Je voudrais tester comment ça marche et voir comment l'intégrer</p>`;
// if(div1){
// 	listContact.firstChild.remove();
// 	listContact.appendChild(div1);
// }

