//populate recipe list and add functionality
populateRecipeList();
//populate shortcut list and add functionality
populateShortcutLists();

function populateRecipeList(){

    const basicList = {
        "Acetone" : "(1) Oil + (1) Welding Fuel + (1) Oxygen -> (3) Acetone",
        "Ammonia" : "(3) Hydrogen + (1) Nitrogen -> (3) Ammonia",
        "Diethylamine" : "(1) Ammonia + (1) Ethanol @ 374 K -> (2) Diethylamine",
        "Oil" : "(1) Carbon + (1) Hydrogen + (1) Welding Fuel -> (3) Oil",
        "Phenol" : "(1) Oil + (1) Chlorine + (1) Water -> (3) Phenol",
        "Stabilizing Agent" : "(1) Iron + (1) Hydrogen + (1) Oxygen -> (2) Stabilizing Agent",
        "Acetic Acid" : "(1) Acetaldehyde + (1) Oxygen + (4) Nitrogen -> (3) Acetic Acid",
        "Fluorosulfuric Acid" : "(1) Sulfuric Acid + (1) Fluorine + (1) Hydrogen + (1) Potassium @ 374 K -> (3) Fluorosulfuric Acid",
        "Hydrochloric Acid" : "(1) Hydrogen + (1) Chlorine + (1) Water -> (3) Hydrochloric Acid",
        "Sulfuric Acid" : "(1) Sulfur + (1) Hydrogen + (1) Oxygen -> (2) Sulfuric Acid",
    }

    const medList = {
        "Ammonium Bicarbonate (Smelling Salts)" : "(1) Ammonia + (1) Carbon + (1) Oxygen @ 374 K -> (3) Ammonium Bicarbonate",
        "Antihol" : "(1) Ethanol + (1) Charcoal -> (2) Antihol",
        "Atropine" : "(1) Ethanol + (1) Diethylamine + (1) Acetone + (1) Phenol + (1) Sulfuric Acid -> (4) Atropine",
        "Calomel" : "(1) Mercury + (1) Chlorine @ 374 K -> (1) Calomel",
        "Charcoal" : "(1) Ash + (1) Salt @ 374 K -> (2) Charcoal",
        "Cryoxadone" : "(1) Cryostylane + (1) Unstable Mutagen + (1) Plasma + (1) Acetone -> (3) Cryoxadone",
        "Diphenhydramine (Antihistamine)" : "(1) Oil + (1) Carbon + (1) Bromine + (1) Diethylamine + (1) Ethanol -> (4) Diphenhydramine",
        "Ephedrine" : "(1) Sugar + (1) Oil + (1) Hydrogen + (1) Diethylamine -> (3) Ephedrine",
        "Epinephrie" : "(1) Phenol + (1) Hydrogen + (1) Oxygen + (1) Chlorine + (1) Acetone + (1) Diethylamine -> (4) Epinephrine",
        "Ether" : "(1) Ethanol + (1) Hydrochloric Acid + (1) Oxygen -> (1) Ether",
        "Filgrastim" : "(1) Blood + (1) Stable Mutagen + (1) E.Coli + (1) Spaceacillin -> (2) Filgrastim",
        "Hairgrownium" : "(1) Synthflesh + (1) Ephedrine + (1) Carpet -> (3) Hairgrownium",
        "Haloperidol" : "(1) Chlorine + (1) Fluorine + (1) Aluminium + (1) Potassium Iodide + (1) Oil -> (4) Haloperidol",
        "Heparin" : "(1) Sugar + (1) Meat Slurry + (1) Phenol + (1) Sulfuric Acid -> (2) Heparin",
        "Hunchback" : "(1) Bourbon + (1) Cola + (1) Tomato Juice -> (3) Hunchback",
        "Mannitol" : "(1) Sugar + (1) Hydrogen + (1) Water -> (2) Mannitol",
        "Menthol" : "(1) Mint + (1) Ethanol @ 324 K -> (2) Menthol OR Put mint into a still.",
        "Mutadone" : "(1) Unstable Mutagen + (1) Acetone + (1) Bromine -> (3) Mutadone",
        "Oculine" : "(1) Atropine + (1) Saline-Glucose Solution + (1) Spaceacillin -> (4) Oculine",
        "Pentetic Acid" : "(1) Welding Fuel + (1) Chlorine + (1) Ammonia + (1) Formaldehyde + (1) Sodium + (1) Cyanide -> (6) Pentetic Acid",
        "Perfluorodecalin" : "(1) Hydrogen + (1) Fluorine + (1) Salicylic Acid @ 374 K -> (2) Perfluorodecalin",
        "Potassium Iodide" : "(1) Potassium + (1) Iodine -> (2) Potassium Iodide",
        "Proconvertin" : "(1) Blood + (1) Stable Mutagen + (1) Mannitol + (1) Salt -> (2) Proconvertin",
        "Robustissin" : "(1) Menthol + (1) Morphine + (1) Hydrogen + (1) Acetone -> (4) Robustissin OR  Antihistamine + (1) Oil + (1) Salicylic Acid + (1) Menthol -> (4) Robustissin",
        "Salbutamol" : "(1) Oil + (1) Lithium + (1) Ammonia + (1) Aluminium + (1) Bromine -> (5) Salbutamol",
        "Salicylic Acid" : "(1) Sodium + (1) Phenol + (1) Carbon + (1) Oxygen + (1) Sulfuric Acid -> (5) Salicylic Acid",
        "Saline-Glucose Solution" : "(1) Salt + (1) Water + (1) Sugar -> (3) Saline-Glucose Solution",
        "Silver Sulfadiazine" : "(1) Silver + (1) Sulfur + (1) Oxygen + (1) Chlorine + (1) Ammonia -> (5) Silver Sulfadiazine",
        "Simethicone" : "(1) Oxygen + (1) Chlorine + (1) Hydrogen + (1) Silicon -> (3) Simethicone",
        "Spaceacillin" : "(1) Space Fungus + (1) Ethanol -> (2) Spaceacillin",
        "Strange Reagent" : "(1) Omnizine + (1) Unstable Mutagen + (1) Holy Water -> (2) Strange Reagent",
        "Styptic Powder" : "(1) Aluminium + (1) Oxygen + (1) Hydrogen + (1) Sulfuric Acid -> (4) Styptic Powder",
        "Super Hairgrownium" : "(1) Hairgrownium + (1) Methamphetamine + (1) Iron -> (3) Super Hairgrownium",
        "Synthflesh" : "(1) Blood + (1) Carbon + (1) Styptic Powder -> (3) Synthflesh",
        "Terporone" : "(1) Silicon + (1) Acetone + (1) Plasma -> (2) Teporone",
    }

    const drugsList = {
        "Aranesp" : "(1) Atropine + (1) Epinephrine + (1) Insulin -> (3) Aranesp",
        "Bath Salts" : "(1) Monosodium Glutamate + (1) ???? + (1) Denatured Enzyme + (1) Saltpetre + (1) Space Cleaner + (1) Mercury + (1) Mugwort @ 374 K -> (6) Bath Salts",
        "Cat Drugs" : "(1) Catonium + (1) Psilocybin + (1) Ammonia + (1) Welding Fuel @ 374 K -> (3) Cat Drugs",
        "Crank" : "(1) Diphenhydramine + (1) Ammonia + (1) Lithium + (1) Welding Fuel + (1) Sulfuric Acid @ 374 K -> (5) Crank",
        "Jenkem" : "(1) Urine + (1) Compost -> (2) Jenkem",
        "Krokodil" : "(1) Morphine + (1) Diphenhydramine + (1) Space Cleaner + (1) Phosphorous + (1) Potassium + (1) Welding Fuel @ 374 K -> (5) Krokodil",
        "LSD" : "(1) Diethylamine + (1) Space Fungus -> (3) LSD",
        "Meth" : "(1) Ephedrine + (1) Phosphorous + (1) Hydrogen + (1) Iodine @ 374 K -> (3) Methamphetamine",
        "Space Drugs" : "(1) Mercury + (1) Sugar + (1) Lithium -> (3) Space Drugs OR (1) Safrole + (1) Salbutamol + (1) Nitrogen + (1) Water -> (1) Space Drugs",
    }

    const toxList = {
        "Acetaldehyde" : "(1) Chromium + (1) Oxygen + (1) Copper + (1) Ethanol @ 549 K -> (3) Acetaldehyde",
        "Atrazine (Weedkiller)" : "(1) Chlorine + (1) Nitrogen + (1) Hydrogen -> (3) Atrazine",
        "Capulettium" : "(1) Neurotoxin + (1) Chlorine + (1) Hydrogen -> (1) Capulettium",
        "Capulettium Plus" : "(1) Capulettium + (1) Ephedrine + (1) Methamphetamine -> (3) Capulettium Plus",
        "Cyanide" : "(1) Ammonia + (1) Oil + (1) Oxygen @ 374 K -> (1) Cyanide",
        "Formaldehyde" : "(1) Ethanol + (1) Oxygen + (1) Silver @ 424K -> (2) Formaldehyde",
        "Itching Powder" : "(1) Ammonia + (1) Welding Fuel + (1) Space Fungus -> (4) Itching Powder",
        "Lipolicide" : "(1) Ephedrine + (1) Diethylamine + (1) Mercury -> (2) Lipolicide",
        "Neurotoxin" : "(1) Space Drugs @ 674 K -> (1) Neurotoxin",
        "Stable Mutagen" : "(1) Unstable Mutagen + (1) Lithium + (1) Acetone + (1) Bromine -> (3) Stable Mutagen",
        "Sulfonal" : "(1) Acetone + (1) Diethylamine + (1) Sulfur -> (2) Sulfonal",
        "Unstable Mutagen" : "(1) Radium + (1) Plasma + (1) Chlorine -> (3) Unstable Mutagen",
    }   

    const pyroList = {
        "Aerosol Propellant" : "(1) Chlorine + (1) Sugar + (1) Hydrogen + (1) Platinum (+ (1) Stabilizing Agent) -> (3) Aerosol Propellant",
        "Black Powder" : "(1) Charcoal + (1) Sulfur + (1) Saltpetre -> (3) Black Powder",
        "Chlorine Trifluoride" : "(1) Chlorine + (3) Fluorine @ 424 K -> (2) Chlorine Trifluoride",
        "Cryostylane" : "(1) Nitrogen + (1) Plasma + (1) Water -> (3) Cryostylane",
        "Flash Powder" : "(1) Aluminium + (1) Potassium + (1) Sulfur + (1) Chlorine (+ (1) Stabilizing Agent) -> (5) Flash Powder",
        "Fluorosurfactant" : "(2) Fluorine + (2) Carbon + (1) Sulfuric Acid -> (5) Fluorosurfactant",
        "Hootingium" : "(1) Oxygen + (1) Cola + (1) Phosphorous (+ (1) Stabilizing Agent) -> (2) Hootingium",
        "Liquid Dark Matter" : "(1) Plasma + (1) Radium + (1) Carbon (+ (1) Stabilizing Agent) -> 4 Liquid Dark Matter",
        "Napalm Goo" : "(1) Sugar + (1) Welding Fuel + (1) Ethanol -> (3) Napalm Goo",
        "Phlogiston" : "(1) Phosphorous + (1) Plasma + (1) Sulfuric Acid (+ (1) Stabilizing Agent) -> (4) Phlogiston",
        "Phlogiston Dust" : "(1) Phlogiston + (1) Charcoal + (1) Phosphorous + (1) Sulfur -> (2) Phlogiston Dust",
        "Pyrosium" : "(1) Plasma + (1) Radium + (1) Phosphorous -> (3) Pyrosium",
        "Smoke Powder" : "(1) Potassium + (1) Sugar + (1) Phosphorus (+ (1) Stabilizing Agent) -> (3) Smoke Powder",
        "Sorium" : "(1) Mercury + (1) Carbon + (1) Nitrogen + (1) Oxygen (+ (1) Stabilizing Agent) -> (4) Sorium",
        "Thermite" : "(1) Aluminium + (1) Iron + (1) Oxygen -> (3) Thermite",
    }

    const miscList = {
        "Ash" : "Burn paper, collect the ash with a beaker OR (1) Paper @ 424K -> (1) Ash",
        "Calcium Carbonate" : "(1) Calcium + (2) Chlorine + (2) Sodium + (1) Carbon + (3) Oxygen -> (1) Calcium Carbonate + (2) Salt",
        "Calcium Sulfate": "(1) Sulfuric Acid + (1) Calcium Carbonate -> (1) Calcium Sulfate",
        "Carbon Tetrachloride (Firefighting Foam)" : "(1) Chlorine + (1) Sulfur + (1) Carbon -> (3) Carbon Tetrachloride",
        "Carpet" : "(1) Space Fungus + (1) Blood -> (2) Carpet",
        "Chalk" : "	(4) Calcium Sulfate + (1) Oil -> (5) Chalk",
        "Colorful Reagent" : "(1) Plasma + (1) Radium + (1) Stabilizing Agent + (1) Space Drugs + (1) Cryoxadone + (1) Triple Citrus -> (6) Colorful Reagent",
        "Denatured Enzyme" : "(1) Booster Enzyme @ 424 K -> (1) Denatured Enzyme",
        "Denatured Fliptonium" : "(1) Fliptonium + (2) Water -> (3) Diluted Fliptonium",
        "Fartonium" : "	(1) Egg + (1) Refried Beans + (1) ???? + (1) Cheese Substitute -> (2) Fartonium OR extract from buttburgers",
        "Flaptonium" : "(1) Egg + (1) Colorful Reagent + (1) Chicken Soup + (1) Strange Reagent + (1) Blood @ 374 K -> REACTION",
        "Foamed Metal" : "(3) (Aluminium or Iron) + (1) Fluorosurfactant + (1) Sulfuric Acid -> REACTION",
        "Holy Water" : "(1) Water + (1) Wine + (1) Mercury -> (3) Holy Water OR Extract garlic.",
        "Honkfartium" : "(1) Simethicone + (1) Fartonium@ 374 K -> (1) Honkfartium",
        "Life" : "(5x) Synthflesh + (2x) Blood + (x) Strange Reagent @ 374 K -> REACTION",
        "Luminol" : "(1) Oxygen + (1) Hydrogen + (1) Nitrogen + (1) Carbon -> (3) Luminol",
        "Magnesium-Ammonium Chloride" : "(1) Magnesium Chloride + (6) Ammonia @ 303K -> (1) Magnesium-Ammonium Chloride",
        "Magnesium Chloride" : "(1) Magnesium + (2) Hydrochloric Acid -> (1) Magnesium Chloride + (2) Hydrogen OR (1) Magnesium-Ammonium Chloride @ 423K -> (1) Magnesium Chloride + (6) Ammonia",
        "Organic Superlubricant" : "(1) Space Lube + (1) Helium -> (1) Organic Superlubricant",
        "Potash" : "(1) Ash + (1) Water @ 354 K -> (1) Potash OR (1) Potassium + (1) Chlorine + (1) Sulfuric Acid -> (2) Potash",
        "Pure Love" : "(1) Pure hugs + (1) Chocolate -> (2) Pure Love",
        "Sakuride" : "(1)Pure Love + (1) Tea + (1) Colorful Reagent -> (3) Sakuride",
        "Saltpetre" : "(1) Urine + (1) Compost + (1) Potash -> (3) Saltpetre",
        "Silicate" : "(1) Aluminium + (1) Silicon + (1) Oxygen -> (3) Silicate",
        "Space Cleaner" : "(1) Ammonia + (1) Ethanol + (1) Water -> (3) Space Cleaner",
        "Space Lube" : "(1) Water + (1) Silicon + (1) Oxygen -> (3) Space Lube"
    }

    const lists = {
        "basic" : basicList,
        "med" : medList,
        "drugs" : drugsList,
        "tox" : toxList,
        "pyro" : pyroList,
        "misc" : miscList
    }

    let listOptions = document.getElementById("recipeSelect");
    listOptions.onchange = () => {loadList(listOptions.value)};
    


    function updateTextarea(text){
        let textArea = document.getElementById("recipeText");
        textArea.innerText = text;
    }

    function loadList(value){
        const listElement = document.getElementById("recipeList");
        while(listElement.firstChild){
            listElement.removeChild(listElement.firstChild);
        }
        recipes = lists[value];
        
        for(const name in recipes){
            const row = document.createElement("li");
            row.innerText = name;
            row.onclick = () => {updateTextarea(recipes[name])};
            listElement.appendChild(row);
        }
    }
    

    loadList("basic");
}


function populateShortcutLists(){
    
    const generalShortcuts = {
        "Ammonia" : "hydrogen=30;nitrogen=10;",
        "Hydrochloric Acid" : "hydrogen=10;chlorine=10;water=10;",
        "Sulfuric Acid" : "sulfur=10;oxygen=10;hydrogen=10;",
        "Stabilizer" : "iron=10;hydrogen=10;oxygen=10;",

    }

    const medShortcuts = {
        "Styptic (add Sulfuric)" : "aluminium=20;oxygen=20;hydrogen=20;",
        "Silver Sulfadiazine (add 20 units of Ammonia)" : "silver=20;sulfur=20;oxygen=20;chlorine=20;",
        "Mannitol" : "sugar=10;hydrogen=10;water=10;"
    }

    const funShortcuts = {
        "Propellant (add stabilizer)" : "chlorine=10;sugar=10;hydrogen=10;platinum=10;",
        "Flash Powder (add 20 stabilizer)" : "aluminium=20;potassium=20;sulfur=20;chlorine=20;",
        "Smoke Powder (add stabilizer)" : "potassium=10;sugar=10;phosphorous=10;",
        "Thermite" : "oxygen=33;iron=33;aluminium=33;",
        "Pyrosium" : "plasma=33;radium=33;phosphorous=33;",
        "Fluorosulfuric Acid (add sulfuric)" : "fluorine=20;hydrogen=20;potassium=20;",
        "Space Drugs" : "mercury=11;sugar=11;lithium=11;",
        "Liquid Dark Matter (ADD STABILIZER!!)" : "plasma=20;radium=20;carbon=20",
    }


    renderGeneralShortcuts();
    renderMedShortcuts();
    renderFunShortcuts();

    function renderGeneralShortcuts(){
        const list = document.getElementById("generalShortcutList");

        for(const i in generalShortcuts){
            const row = document.createElement("li");
            row.innerText = i;
            row.onclick = () => {copy(generalShortcuts[i])};
            list.appendChild(row);
        }
    }
    function renderMedShortcuts(){
        const list = document.getElementById("medShortcutList");
        for(const i in medShortcuts){
            const row = document.createElement("li");
            row.innerText = i;
            row.onclick = () => {copy(shortcuts[i])};
            list.appendChild(row);
        }
    }
    function renderFunShortcuts(){
        const list = document.getElementById("funShortcutList");
        for(const i in funShortcuts){
            const row = document.createElement("li");
            row.innerText = i;
            row.onclick = () => {copy(funShortcuts[i])};
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