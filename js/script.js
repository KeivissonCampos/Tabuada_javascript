// Seleção de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number")
const multiplicadorInput = document.querySelector("#multiplicador")
const multiplicationTable = document.querySelector("#multiplication-operation");
const multiplicationTitle = document.querySelector("#multiplication-h2 span");
const multiplicationInfo = document.querySelector("#multiplication-operation p");
const title = document.getElementById("multiplication-operation");

// Funções

const createTable = (number, multiplicationNumber) =>{
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicationNumber; i++){
        const result = number * i;
        
    const template = 
    `<div class="row">
        <div class="operation">${number} x ${i} =</div>
        <div class="result">${result}</div>
    </div>`;

    const parser = new DOMParser();
    const htmlTemplete = parser.parseFromString(template, "text/html");
    const row = htmlTemplete.querySelector(".row");
    multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
}

// Eventos

multiplicationForm.addEventListener("submit", (e) =>{               //
    e.preventDefault();

    const multiplicationNumber = numberInput.value;
    const multiplicatorNumber = multiplicadorInput.value;

    if((!multiplicationNumber || !multiplicatorNumber)) return;
    if(multiplicatorNumber < 1 ){
        multiplicationTable.innerHTML = "";

        const newParagraph = document.createElement("p")
        newParagraph.innerText = "Informe no Multiplicador um número maior que 0";
        newParagraph.style.color = "red";
        multiplicationTable.appendChild(newParagraph);
        return;
    }

    createTable(multiplicationNumber, multiplicatorNumber)

})