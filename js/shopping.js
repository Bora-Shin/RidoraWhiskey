//To calculate the Total
function calculateTotal(){
    var amount1 = document.getElementById("amount1").value;
    var amount2 = document.getElementById("amount2").value;
    var discount = document.getElementById("discount").value;
    var Total1 = 0;
    var Total2 = 0;
    var totalAmount = 0;
    var subTotal = 0;

    //To check if the amount is numeric
    if(!isNaN(amount1) && !isNaN(amount1) && amount1 >= 0 && amount2 >=0){
        if(discount != "h"){
            Total1 = amount1 * 217;
            Total2 = amount2 * 117;
            subTotal = Total1 + Total2;
            totalAmount = subTotal + 12;
            alert("Your discount code is wrong!")
        }

        else if(discount = "h"){
            Total1 = amount1 * 217 * 0.9;
            Total2 = amount2 * 117 * 0.9;
            subTotal = Total1 + Total2;
            totalAmount = subTotal + 12;
            alert("congratulation you will get 10% discount!")
        }
    
    else(
        alert("Please enter valid number!")
        )
    }
    document.getElementById("tol1").innerHTML = Total1;
    document.getElementById("tol2").innerHTML = Total2;
    document.getElementById("subT").innerHTML = subTotal;
    document.getElementById("tolA").innerHTML = totalAmount;


}