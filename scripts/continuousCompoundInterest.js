// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// https://samuelchukwuemeka.github.io/financial-mathematics/


"use strict";

// Quotes
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}

// https://stackoverflow.com/questions/10015027/javascript-tofixed-not-rounding/23560569#23560569
//Answered by Shura
function round(n, digits) {
    if (digits === undefined) {
        digits = 0;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    return Math.round(n) / multiplicator;
}


// Continuous Compound Interest Calculations

// Calculate Amount and Interest
document.getElementById("continuousCompoundInterestAmount").addEventListener("submit", continuousCompoundInterestAmount);

function continuousCompoundInterestAmount(event) {
    event.preventDefault();

    var principal = parseFloat(document.getElementById("principal").value, 10) || 0,
        rate = parseFloat(document.getElementById("rate").value, 10) || 0,
        rateUnit = document.getElementById("rateUnit").value,
        time = parseFloat(document.getElementById("time").value, 10) || 0,
        timeUnit = document.getElementById("timeUnit").value;

        if (rateUnit === "percent") {
            rate = rate / 100;
        }


        if (timeUnit === "months") {
            time = time / 12;
        }
        else if (timeUnit === "weeks") {
        time = time / 52;
        }
        else if (timeUnit === "days_O") {
        time = time / 360;
        }
        else if (timeUnit === "days_E") {
        time = time / 365;
        }


        var amount = principal * Math.pow(Math.E, (rate * time));

        var continuousCompoundInterest = amount - principal;

        
        document.getElementById("amount").innerHTML = "The amount is $" + round(amount, 2).toFixed(2);

        document.getElementById("continuousCompoundInterest").innerHTML = "The continuous compound interest is $" + round(continuousCompoundInterest, 2).toFixed(2);
}


// Calculate Time and Interest
document.getElementById("timeInterest").addEventListener("submit", timeInterest);

function timeInterest(event) {
    event.preventDefault();

    var tIamount = parseFloat(document.getElementById("tIamount").value, 10) || 0,
        tIprincipal = parseFloat(document.getElementById("tIprincipal").value, 10) || 0,
        tIrate = parseFloat(document.getElementById("tIrate").value, 10) || 0,
        tIrateUnit = document.getElementById("tIrateUnit").value;
       

        if (tIrateUnit === "percent") {
            tIrate = tIrate / 100;
        }

     
        var tItime = Math.log(tIamount/tIprincipal) / tIrate; 

        var tIinterest = tIamount - tIprincipal;

        document.getElementById("tItime").innerHTML = "The time is " + round(tItime, 4).toFixed(4) + " years";

        document.getElementById("tIinterest").innerHTML = "The continuous compound interest is $" + round(tIinterest, 2).toFixed(2);
}



// Calculate Rate and Interest
document.getElementById("rateInterest").addEventListener("submit", rateInterest);

function rateInterest(event) {
    event.preventDefault();

    var rIamount = parseFloat(document.getElementById("rIamount").value, 10) || 0,
        rIprincipal = parseFloat(document.getElementById("rIprincipal").value, 10) || 0,
        rItime = parseFloat(document.getElementById("rItime").value, 10) || 0,
        rItimeUnit = document.getElementById("rItimeUnit").value;

       
        if (rItimeUnit === "months") {
            rItime = rItime / 12;
        }
        else if (rItimeUnit === "weeks") {
        rItime = rItime / 52;
        }
        else if (rItimeUnit === "days_O") {
        rItime = rItime / 360;
        }
        else if (rItimeUnit === "days_E") {
        rItime = rItime / 365;
        }


        var rIrate = 100 * Math.log(rIamount / rIprincipal) / rItime;

        var rIinterest = rIamount - rIprincipal;

        document.getElementById("rIrate").innerHTML = "The rate is " + round(rIrate, 4).toFixed(4) + "%";

        document.getElementById("rIinterest").innerHTML = "The continuous compound interest is $" + round(rIinterest, 2).toFixed(2);
}


// Calculate Amount and Rate
document.getElementById("amountRate").addEventListener("submit", amountRate);

function amountRate(event) {
    event.preventDefault();

    var aRinterest = parseFloat(document.getElementById("aRinterest").value, 10) || 0,
        aRprincipal = parseFloat(document.getElementById("aRprincipal").value, 10) || 0,
        aRtime = parseFloat(document.getElementById("aRtime").value, 10) || 0,
        aRtimeUnit = document.getElementById("aRtimeUnit").value;
       
          
        if (aRtimeUnit === "months") {
            aRtime = aRtime / 12;
        }
        else if (aRtimeUnit === "weeks") {
        aRtime = aRtime / 52;
        }
        else if (aRtimeUnit === "days_O") {
        aRtime = aRtime / 360;
        }
        else if (aRtimeUnit === "days_E") {
        aRtime = aRtime / 365;
        }


        var aRamount = aRprincipal + aRinterest; 

        var aRrate = 100 * Math.log(aRamount / aRprincipal) / aRtime;

        document.getElementById("aRamount").innerHTML = "The amount is $" + round(aRamount, 2).toFixed(2);

        document.getElementById("aRrate").innerHTML = "The rate is " + round(aRrate, 4).toFixed(4) + "%";
}


// Calculate Amount and Time
document.getElementById("amountTime").addEventListener("submit", amountTime);

function amountTime(event) {
    event.preventDefault();

    var aTinterest = parseFloat(document.getElementById("aTinterest").value, 10) || 0,
        aTprincipal = parseFloat(document.getElementById("aTprincipal").value, 10) || 0,
        aTrate = parseFloat(document.getElementById("aTrate").value, 10) || 0,
        aTrateUnit = document.getElementById("aTrateUnit").value;
       

        if (aTrateUnit === "percent") {
            aTrate = aTrate / 100;
        }

                       
        var aTamount = aTprincipal + aTinterest;
        
        var aTtime = Math.log(aTamount/aTprincipal) / aTrate; 
        
        document.getElementById("aTamount").innerHTML = "The amount is $" + round(aTamount, 2).toFixed(2); 

        document.getElementById("aTtime").innerHTML = "The time is " + round(aTtime, 4).toFixed(4) + " years";

}


// Calculate Principal and Interest
document.getElementById("principalInterest").addEventListener("submit", principalInterest);

function principalInterest(event) {
    event.preventDefault();

    var pIamount = parseFloat(document.getElementById("pIamount").value, 10) || 0,
        pIrate = parseFloat(document.getElementById("pIrate").value, 10) || 0,
        pIrateUnit = document.getElementById("pIrateUnit").value,
        pItime = parseFloat(document.getElementById("pItime").value, 10) || 0,
        pItimeUnit = document.getElementById("pItimeUnit").value;
       

        if (pIrateUnit === "percent") {
            pIrate = pIrate / 100;
        }


       if (pItimeUnit === "months") {
            pItime = pItime / 12;
        }
        else if (pItimeUnit === "weeks") {
        pItime = pItime / 52;
        }
        else if (pItimeUnit === "days_O") {
        pItime = pItime / 360;
        }
        else if (pItimeUnit === "days_E") {
        pItime = pItime / 365;
        }
        

        var pIprincipal = pIamount / Math.pow(Math.E, (pIrate * pItime)); 

        var pIinterest = pIamount - pIprincipal;

        document.getElementById("pIprincipal").innerHTML = "The principal is $" + round(pIprincipal, 2).toFixed(2);

        document.getElementById("pIinterest").innerHTML = "The continuous compound interest is $" + round(pIinterest, 2).toFixed(2);
}



// Calculate Principal and Amount
document.getElementById("principalAmount").addEventListener("submit", principalAmount);

function principalAmount(event) {
    event.preventDefault();

    var pAinterest = parseFloat(document.getElementById("pAinterest").value, 10) || 0,
        pArate = parseFloat(document.getElementById("pArate").value, 10) || 0,
        pArateUnit = document.getElementById("pArateUnit").value,
        pAtime = parseFloat(document.getElementById("pAtime").value, 10) || 0,
        pAtimeUnit = document.getElementById("pAtimeUnit").value;
        
       
        if (pArateUnit === "percent") {
            pArate = pArate / 100;
        }
       

        if (pAtimeUnit === "months") {
            pAtime = pAtime / 12;
        }
        else if (pAtimeUnit === "weeks") {
        pAtime = pAtime / 52;
        }
        else if (pAtimeUnit === "days_O") {
        pAtime = pAtime / 360;
        }
        else if (pAtimeUnit === "days_E") {
        pAtime = pAtime / 365;
        }
      
        var pAprincipal = pAinterest / (Math.pow(Math.E, (pArate * pAtime)) - 1); 

        var pAamount = pAprincipal + pAinterest;

        document.getElementById("pAprincipal").innerHTML = "The principal is $" + round(pAprincipal, 2).toFixed(2);

        document.getElementById("pAamount").innerHTML = "The amount is $" + round(pAamount, 2).toFixed(2);
}


// Calculate Principal and Time
document.getElementById("principalTime").addEventListener("submit", principalTime);

function principalTime(event) {
    event.preventDefault();

    var pTinterest = parseFloat(document.getElementById("pTinterest").value, 10) || 0,
        pTamount = parseFloat(document.getElementById("pTamount").value, 10) || 0,
        pTrate = parseFloat(document.getElementById("pTrate").value, 10) || 0,
        pTrateUnit = document.getElementById("pTrateUnit").value;
       

        if (pTrateUnit === "percent") {
            pTrate = pTrate / 100;
        }


        var pTprincipal = pTamount - pTinterest;
        
        var pTtime = Math.log(pTamount/pTprincipal) / pTrate; 
        
        document.getElementById("pTprincipal").innerHTML = "The principal is $" + round(pTprincipal, 2).toFixed(2); 

        document.getElementById("pTtime").innerHTML = "The time is " + round(pTtime, 4).toFixed(4) + " years";

}


// Calculate Principal and Rate
document.getElementById("principalRate").addEventListener("submit", principalRate);

function principalRate(event) {
    event.preventDefault();

    var pRinterest = parseFloat(document.getElementById("pRinterest").value, 10) || 0,
        pRamount = parseFloat(document.getElementById("pRamount").value, 10) || 0,
        pRtime = parseFloat(document.getElementById("pRtime").value, 10) || 0,
        pRtimeUnit = document.getElementById("pRtimeUnit").value;
        
        
        if (pRtimeUnit === "months") {
            pRtime = pRtime / 12;
        }
        else if (pRtimeUnit === "weeks") {
        pRtime = pRtime / 52;
        }
        else if (pRtimeUnit === "days_O") {
        pRtime = pRtime / 360;
        }
        else if (pRtimeUnit === "days_E") {
        pRtime = pRtime / 365;
        }


        var pRprincipal = pRamount - pRinterest; 

        var pRrate = 100 * Math.log(pRamount / pRprincipal) / pRtime;

        document.getElementById("pRprincipal").innerHTML = "The principal is $" + round(pRprincipal, 2).toFixed(2);

        document.getElementById("pRrate").innerHTML = "The rate is " + round(pRrate, 4).toFixed(4) + "%";
}







