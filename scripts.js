function calculateTip(event) {
    event.preventDefault();
    let bill= document.getElementById('bill').value;
    let QualidadeDeServ = document.getElementById('QualidadeDeServ').value;
    let pessoas = document.getElementById('pessoas').value;

if(bill =='' | QualidadeDeServ == 0 ){
    alert("por favor, preencha os valores")
    return;
 }

 if(pessoas == "" | pessoas <= 1) {
    pessoas = 1;
    document.getElementById('each').style.display = "none"
 } else {
    document.getElementById('each').style.display = "block"
 }

 let total = (bill * QualidadeDeServ) / pessoas;
 total = total.toFixed(2);
 document.getElementById('Tip').innerHTML = total;
 document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);