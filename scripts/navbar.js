const chem = document.getElementById("chemButton");
const tele = document.getElementById("teleButton");
const sent = document.getElementById("sentButton");

//render chem content
chem.onclick = showChemContent;

//render tele content
tele.onclick = showTeleContent;

//render sentencing content
sent.onclick = showSentenceContent;

function showChemContent(){
    document.getElementById("chemContent").classList = [];
    document.getElementById("teleContent").classList = ["hidden"];
    document.getElementById("sentenceContent").classList = ["hidden"];
}

function showTeleContent(){
    document.getElementById("chemContent").classList = ["hidden"];
    document.getElementById("teleContent").classList = [];
    document.getElementById("sentenceContent").classList = ["hidden"];
}

function showSentenceContent(){
    document.getElementById("chemContent").classList = ["hidden"];
    document.getElementById("teleContent").classList = ["hidden"];
    document.getElementById("sentenceContent").classList = [];
}