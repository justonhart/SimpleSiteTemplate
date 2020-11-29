//populate recipe list and add functionality
populateRecipeList();
//populate shortcut list and add functionality
populateShortcutLists();

function populateRecipeList(){

    const list = document.getElementById("recipeList");
    const recipes = {
        "Acetone (3)" : "(1) Oil + (1) Welding Fuel + (1) Oxygen",
        "Ammonia (3)" : "(3) Hydrogen + (1) Nitrogen",
        "Diethylamine (2)" : "(1) Ammonia + (1) Ethanol @ 374 K",
        "Oil (3)" : "(1) Carbon + (1) Hydrogen + (1) Welding Fuel",
        "Phenol (3)" : "(1) Oil + (1) Chlorine + (1) Water",
        "Stabilizing Agent (2)" : "(1) Iron + (1) Hydrogen + (1) Oxygen",
        "Synthflesh (3)" : "(1) Blood + (1) Carbon + (1) Styptic Powder"
    }

    for(const name in recipes){
        const row = document.createElement("li");
        row.innerText = name;
        row.onclick = () => {updateTextarea(recipes[name])};
        list.appendChild(row);
    }

    function updateTextarea(text){
        let textArea = document.getElementById("recipeText");
        textArea.innerText = text;
    }
}


function populateShortcutLists(){
    

    renderGeneralShortcuts();
    renderMedShortcuts();
    renderFunShortcuts();

    function renderGeneralShortcuts(){
        const list = document.getElementById("generalShortcutList");
        const shortcuts = {
            "Sulfuric Acid" : "sulfur=10;oxygen=10;hydrogen=10;"
        }

        for(const i in shortcuts){
            const row = document.createElement("li");
            row.innerText = i;
            row.onclick = () => {copy(shortcuts[i])};
            list.appendChild(row);
        }
    }
    function renderMedShortcuts(){
        const list = document.getElementById("medShortcutList");
        const shortcuts = {
            "Styptic (add Sulfuric)" : "aluminium=20;oxygen=20;hydrogen=20;"
        }

        for(const i in shortcuts){
            const row = document.createElement("li");
            row.innerText = i;
            row.onclick = () => {copy(shortcuts[i])};
            list.appendChild(row);
        }
    }
    function renderFunShortcuts(){
        const list = document.getElementById("funShortcutList");
        const shortcuts = {
            "Fluorosulfuric Acid (add Sulfuric)" : "fluorine=20;hydrogen=20;potassium=20;"
        }

        for(const i in shortcuts){
            const row = document.createElement("li");
            row.innerText = i;
            row.onclick = () => {copy(shortcuts[i])};
            list.appendChild(row);
        }
    }

    function copy(string){
        const buffer = document.getElementById("copyBuffer");
        buffer.innerText = string;
        buffer.select();
        document.execCommand("copy");
    }
}