function compute()
{
    var p = document.getElementById("principal").value;
    var ri = document.getElementById("rate").value;
    var yrs = document.getElementById("years").value;
    var interest = p*yrs*rate/100;
    var amount = p+interest;
    var years = new Date().getFullYear()+parseInt(yrs);
    document.getElementById("result").innerHTML="If you deposit "+p+",\<br\>at an interest rate of "+ri+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+years+"\<br\>"
}
        
function updateRate()
{
    // Get the rate val from slider and update the html field
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val") = rateVal;
}