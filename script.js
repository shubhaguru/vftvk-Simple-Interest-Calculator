function compute()
{
    var p = document.getElementById("principal").value;
    if (p <= 0) {
        alert("Check principal.Should be > 0");
        document.getElementById("principal").focus();
    }

    var ri = document.getElementById("rate").value;
    var yrs = document.getElementById("years").value;
    var interest = (p * yrs * ri)/100;
    var year = new Date().getFullYear()+parseInt(yrs);
    document.getElementById("result").innerHTML="If you deposit <mark>"+p+"</mark>,\<br\>at an interest rate of <mark>"+ri+"%</mark>\<br\>You will receive an amount of <mark>"+interest+",</mark>\<br\>in the year <mark>"+year+"</mark>\<br\>"
}


function updateRate()
{
    // Get the rate val from slider and update the html field
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val") = rateVal;
}

