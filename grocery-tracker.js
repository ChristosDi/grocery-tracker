let grocery1;
let grocery2;
let grocery3;

function calculateTotalAmount(){
    grocery1=parseFloat(document.getElementById("grocery1").value||0);
    grocery2=parseFloat(document.getElementById("grocery2").value||0);
    grocery3=parseFloat(document.getElementById("grocery3").value||0);

    let summary= grocery1+grocery2+grocery3;

    document.getElementById('result').innerText=`The total amount spent on grocery is: ${summary}.`;
}