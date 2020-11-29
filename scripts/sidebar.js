const doorWires = ["Orange", "Pink", "White", "Yellow", "Red", "Blue", "Green", "Grey", "Olive", "Teal"];
const doorFunctions = ["Main", "Backup", "ID", "Open", "Bolts", "AI", "Safety", "Shock", "None"];

const vendingWires = ["Violet", "Orange", "Goldenrod", "Green"];
const vendingFuctions = ["AI", "Secret", "Shock", "Evil"];

const fabWires = ["Amber", "Teal", "Indigo", "Lime"];
const fabFunctions = ["Access", "Secret", "Shock", "Functionality"]

let doorsEntry = document.getElementById("Doors");
let vendingEntry = document.getElementById("VendingMachines");
let fabEntry = document.getElementById("Fabricators");

doorWires.forEach((w) => {
    let row = document.createElement("div");
    row.id = doorsEntry.id + w;
    row.classList.add("sidebarRow");

    let rowLabel = document.createElement("label");
    rowLabel.innerText = w;
    rowLabel.classList.add("rowLabel");
    row.appendChild(rowLabel);

    addButtons(row, doorFunctions);
    doorsEntry.appendChild(row);
});

vendingWires.forEach(w => {
    let row = document.createElement("div");
    row.id = vendingEntry.id + w;
    row.classList.add("sidebarRow");
    
    let rowLabel = document.createElement("label");
    rowLabel.innerText = w;
    rowLabel.classList.add("rowLabel");
    row.appendChild(rowLabel);

    addButtons(row, vendingFuctions);
    vendingEntry.appendChild(row);
});

fabWires.forEach(w => {
    let row = document.createElement("div");
    row.id = fabEntry.id + w;
    row.classList.add("sidebarRow");
    
    let rowLabel = document.createElement("label");
    rowLabel.innerText = w;
    rowLabel.classList.add("rowLabel");
    row.appendChild(rowLabel);

    addButtons(row, fabFunctions);
    fabEntry.appendChild(row);
});

function addButtons(row, functions){

    let name = row.id;
    functions.forEach(f => {

        let label = document.createElement("label");
        label.classList.add("buttonLabel");

        let button = document.createElement("input");
        button.type = "radio";
        button.name = name;
        button.value = f;

        label.appendChild(button);

        let span = document.createElement("span");
        span.innerText = f;


        label.appendChild(span);

        row.appendChild(label);
    });
}

