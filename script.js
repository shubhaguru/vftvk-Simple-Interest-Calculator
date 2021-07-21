function compute()
{
    var p = document.getElementById("principal").value;
    if (p <= 0) {
        alert("Check principal.Should be > 0");
        document.getElementById("principal").focus();
    }

    if (typeof p == 'number') alert(p+" is num");

    var ri = document.getElementById("rate").value;
    if (typeof ri == 'number') alert(ri+" is num");

    var yrs = document.getElementById("years").value;
   if (typeof yrs == 'number') alert(yrs+" is num");
    var interest = (p * yrs * rate)/100;
    var year = new Date().getFullYear()+parseInt(yrs);
    document.getElementById("result").innerHTML="If you deposit "+p+",\<br\>at an interest rate of "+ri+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}


if(typeof num == 'number'){
        alert(num + " is a number");
       }else{
        alert(num + " is not a number");
       }
        
function updateRate()
{
    // Get the rate val from slider and update the html field
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val") = rateVal;
}

