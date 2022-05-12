const divContacts = document.createElement("div");
divContacts.setAttribute("id", "styliser");
const mainSection = document.querySelector("#contact-list");
const form = document.querySelector("form");
const paragraph = document.createElement('p');

form.addEventListener("submit", function(event){
	event.preventDefault();
	
	const prenom = event.target.firstName.value;
	const nom = event.target.lastName.value;
	const groupe = event.target.group.value;
	const info = event.target.bio.value;
	const file = event.target.photo.value;
	
	divContacts.innerHTML += `<div class="bloc-contact">
															<p class="photo"><img  alt="Photo de ${prenom}"/></p>
															<div class="info">
																<p class="info-list"> ${prenom} ${nom} <br/>${groupe}</p>
																<p class="info-list">${info}</p>
															</div>
															<p class="fermeture"><img src="croix.png" /><p>
														</div>`;

	
	
	

	mainSection.appendChild(divContacts);
	const infoList = document.getElementsByClassName("info-list");
	mainSection.style.display = "block";
	let fermeture = document.querySelector("#fermeture img")
	fermeture.style.width = "20px";
});

// 	const openFile = function(event) {
//   const input = event.target;

//   const reader = new FileReader();
//   reader.onload = function(){
//     const dataURL = reader.result;
//     const output = document.querySelector('.photo img');
//     output.src = dataURL;
//   };
//   reader.readAsDataURL(input.files[0]);
// }

// const values = {};
// 	for (const field of this.elements){
// 		const{name, value} = field;
// 		if(name){
// 			values[name] = value;
// 		}
// 	}
// 	const div1 = document.createElement('div');
// 	div1.setAttribute('class', 'bloc-contact');
	
// 	paragraph += values.name;
// 	div1.appendChild(paragraph);
// 	divContacts.appendChild(div1);