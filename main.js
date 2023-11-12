//Creare l’array di oggetti con le informazioni fornite.

// Array che contiene objects dependenti con le propietà : Nome, ruolo e foto.
let contenitore = document.getElementById("contenitore")

let dipendenti = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager	",
        foto: " walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
]



//Ciclo for che stampara gli elementi dell'array 
for (let i = 0; i < dipendenti.length; i++) {

    console.log(`Nome: ${dipendenti[i].nome} - Ruolo: ${dipendenti[i].ruolo} - Foto: ${dipendenti[i].foto}`);

      /////////////imagine/////////////////////
    // trasforma la stringa foto in una immagine effettiva
    let immagineElemento = document.createElement("img");


    //Imposta l'attributo src dell'imagine con la stringa della foto
    immagineElemento.src = dipendenti[i].foto;

    // Aggiunge l'imagine al corpo del documento html
    document.body.appendChild(immagineElemento);
    
   
     //////////nome e ruolo//////////////////
     // Crea un elemento "div" 
     const elementoDependenti = document.createElement("div")
    //crea il contenuto html con i dati dell'array 
    elementoDependenti.innerHTML = `${dipendenti[i].nome} <br> ${dipendenti[i].ruolo} `

    //aggiunge l'elemento al corpo del contenuto html
    document.body.appendChild(elementoDependenti)

    elementoDependenti.classList.add("p3");

}













