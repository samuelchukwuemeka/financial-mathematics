// Copyright 2019 - Samuel Dominic Chukwuemeka (Samdom For Peace)
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

// Annuity Due Calculations

// Calculate Future Value and Interest
document.getElementById("futureValueInterest").addEventListener("submit", futureValueInterest);

function futureValueInterest(event) {
    event.preventDefault();

    var payment = parseFloat(document.getElementById("payment").value, 10) || 0,
        rate = parseFloat(document.getElementById("rate").value, 10) || 0,
        rateUnit = document.getElementById("rateUnit").value,
        compoundingPeriodperYear,
        compoundingPeriodUnit = document.getElementById("compoundingPeriodUnit").value,
        time = parseFloat(document.getElementById("time").value, 10) || 0,
        timeUnit = document.getElementById("timeUnit").value;
        
        

        if (rateUnit === "percent") {
            rate = rate / 100;
        }


        if (compoundingPeriodUnit === "annually") {
            compoundingPeriodperYear = 1;
        }
        else if (compoundingPeriodUnit === "semiannually") {
        compoundingPeriodperYear = 2;
        }
        else if (compoundingPeriodUnit === "quarterly") {
        compoundingPeriodperYear = 4;
        }
        else if (compoundingPeriodUnit === "monthly") {
        compoundingPeriodperYear = 12;
        }
        else if (compoundingPeriodUnit === "weekly") {
        compoundingPeriodperYear = 52;
        }
        else if (compoundingPeriodUnit === "daily-ordinary") {
        compoundingPeriodperYear = 360;
        }
        else if (compoundingPeriodUnit === "daily-exact") {
        compoundingPeriodperYear = 365;
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


        var futureValue = compoundingPeriodperYear * payment * ((Math.pow((1 + rate/compoundingPeriodperYear), (compoundingPeriodperYear * time)) - 1) / rate) * (1 + (rate/compoundingPeriodperYear));

        var interest = futureValue - (payment * compoundingPeriodperYear * time);

        
        document.getElementById("futureValue").innerHTML = "The future value is $" + round(futureValue, 2).toFixed(2);

        document.getElementById("interest").innerHTML = "The interest is $" + round(interest, 2).toFixed(2);
}


// Calculate Payment and Interest
document.getElementById("paymentInterest").addEventListener("submit", paymentInterest);

function paymentInterest(event) {
    event.preventDefault();

    var pmtIfutureValue = parseFloat(document.getElementById("pmtIfutureValue").value, 10) || 0,
        pmtIrate = parseFloat(document.getElementById("pmtIrate").value, 10) || 0,
        pmtIrateUnit = document.getElementById("pmtIrateUnit").value,
        pmtIcompoundingPeriodperYear,
        pmtIcompoundingPeriodUnit = document.getElementById("pmtIcompoundingPeriodUnit").value,
        pmtItime = parseFloat(document.getElementById("pmtItime").value, 10) || 0,
        pmtItimeUnit = document.getElementById("pmtItimeUnit").value;
       

        if (pmtIrateUnit === "percent") {
            pmtIrate = pmtIrate / 100;
        }


        if (pmtIcompoundingPeriodUnit === "annually") {
            pmtIcompoundingPeriodperYear = 1;
        }
        else if (pmtIcompoundingPeriodUnit === "semiannually") {
        pmtIcompoundingPeriodperYear = 2;
        }
        else if (pmtIcompoundingPeriodUnit === "quarterly") {
        pmtIcompoundingPeriodperYear = 4;
        }
        else if (pmtIcompoundingPeriodUnit === "monthly") {
        pmtIcompoundingPeriodperYear = 12;
        }
        else if (pmtIcompoundingPeriodUnit === "weekly") {
        pmtIcompoundingPeriodperYear = 52;
        }
        else if (pmtIcompoundingPeriodUnit === "daily-ordinary") {
        pmtIcompoundingPeriodperYear = 360;
        }
        else if (pmtIcompoundingPeriodUnit === "daily-exact") {
        pmtIcompoundingPeriodperYear = 365;
        }


        if (pmtItimeUnit === "months") {
            pmtItime = pmtItime / 12;
        }
        else if (pmtItimeUnit === "weeks") {
        pmtItime = pmtItime / 52;
        }
        else if (pmtItimeUnit === "days_O") {
        pmtItime = pmtItime / 360;
        }
        else if (pmtItimeUnit === "days_E") {
        pmtItime = pmtItime / 365;
        }
        

        var pmtIpayment = (pmtIfutureValue * pmtIrate) / ((pmtIcompoundingPeriodperYear + pmtIrate) *(Math.pow((1 + (pmtIrate/pmtIcompoundingPeriodperYear)), (pmtIcompoundingPeriodperYear * pmtItime)) - 1)); 

        var pmtIinterest = pmtIfutureValue - (pmtIpayment * pmtIcompoundingPeriodperYear * pmtItime);

        document.getElementById("pmtIpayment").innerHTML = "The periodic payment is $" + round(pmtIpayment, 2).toFixed(2);

        document.getElementById("pmtIinterest").innerHTML = "The interest is $" + round(pmtIinterest, 2).toFixed(2);
}


// Calculate Time and Interest
document.getElementById("timeInterest").addEventListener("submit", timeInterest);

function timeInterest(event) {
    event.preventDefault();

    var tIfutureValue = parseFloat(document.getElementById("tIfutureValue").value, 10) || 0,
        tIpayment = parseFloat(document.getElementById("tIpayment").value, 10) || 0,
        tIrate = parseFloat(document.getElementById("tIrate").value, 10) || 0,
        tIrateUnit = document.getElementById("tIrateUnit").value,
        tIcompoundingPeriodperYear,
        tIcompoundingPeriodUnit = document.getElementById("tIcompoundingPeriodUnit").value;
       
       

        if (tIrateUnit === "percent") {
            tIrate = tIrate / 100;
        }


        if (tIcompoundingPeriodUnit === "annually") {
            tIcompoundingPeriodperYear = 1;
        }
        else if (tIcompoundingPeriodUnit === "semiannually") {
        tIcompoundingPeriodperYear = 2;
        }
        else if (tIcompoundingPeriodUnit === "quarterly") {
        tIcompoundingPeriodperYear = 4;
        }
        else if (tIcompoundingPeriodUnit === "monthly") {
        tIcompoundingPeriodperYear = 12;
        }
        else if (tIcompoundingPeriodUnit === "weekly") {
        tIcompoundingPeriodperYear = 52;
        }
        else if (tIcompoundingPeriodUnit === "daily-ordinary") {
        tIcompoundingPeriodperYear = 360;
        }
        else if (tIcompoundingPeriodUnit === "daily-exact") {
        tIcompoundingPeriodperYear = 365;
        }

       
        var tItime = Math.log10(((tIrate * tIfutureValue) / (tIpayment * (tIcompoundingPeriodperYear + tIrate))) + 1) / (tIcompoundingPeriodperYear * Math.log10(1 + (tIrate/tIcompoundingPeriodperYear))); 

        var tIinterest = tIfutureValue - (tIpayment * tIcompoundingPeriodperYear * tItime);

        document.getElementById("tItime").innerHTML = "The time is " + round(tItime, 4).toFixed(4) + " years";

        document.getElementById("tIinterest").innerHTML = "The interest is $" + round(tIinterest, 2).toFixed(2);
}



// Given PMT-i-n; Calculate FV
document.getElementById("futureValuePMTIN").addEventListener("submit", futureValuePMTIN);

function futureValuePMTIN(event) {
    event.preventDefault();

    var paymentPMTIN = parseFloat(document.getElementById("paymentPMTIN").value, 10) || 0,
        interestPeriodPMTIN = parseFloat(document.getElementById("interestPeriodPMTIN").value, 10) || 0,
        interestPeriodUnitPMTIN = document.getElementById("interestPeriodUnitPMTIN").value,
        totalPeriodsPMTIN = parseFloat(document.getElementById("totalPeriodsPMTIN").value, 10) || 0,
        futureValuePIN;
              

        if (interestPeriodUnitPMTIN === "percent") {
            interestPeriodPMTIN = interestPeriodPMTIN / 100;
        }


        var futureValuePIN = paymentPMTIN * ((Math.pow((1 + interestPeriodPMTIN), totalPeriodsPMTIN) - 1) / interestPeriodPMTIN) * (1 + interestPeriodPMTIN); 

        document.getElementById("futureValuePIN").innerHTML = "The future value is $" + round(futureValuePIN, 2).toFixed(2);
}


// Given FV-i-n; Calculate PMT
document.getElementById("paymentFVIN").addEventListener("submit", paymentFVIN);

function paymentFVIN(event) {
    event.preventDefault();

    var futureValueFVIN = parseFloat(document.getElementById("futureValueFVIN").value, 10) || 0,
        interestPeriodFVIN = parseFloat(document.getElementById("interestPeriodFVIN").value, 10) || 0,
        interestPeriodUnitFVIN = document.getElementById("interestPeriodUnitFVIN").value,
        totalPeriodsFVIN = parseFloat(document.getElementById("totalPeriodsFVIN").value, 10) || 0,
        paymentFIN;
              

        if (interestPeriodUnitFVIN === "percent") {
            interestPeriodFVIN = interestPeriodFVIN / 100;
        }


        var paymentFIN = (futureValueFVIN * interestPeriodFVIN)  / ((1 + interestPeriodFVIN) * (Math.pow((1 + interestPeriodFVIN), totalPeriodsFVIN) - 1)); 

        document.getElementById("paymentFIN").innerHTML = "The periodic payment is $" + round(paymentFIN, 2).toFixed(2);
}


// Given FV-i-PMT; Calculate n
document.getElementById("periodFVIPMT").addEventListener("submit", periodFVIPMT);

function periodFVIPMT(event) {
    event.preventDefault();

    var futureValueFVIPMT = parseFloat(document.getElementById("futureValueFVIPMT").value, 10) || 0,
        interestPeriodFVIPMT = parseFloat(document.getElementById("interestPeriodFVIPMT").value, 10) || 0,
        interestPeriodUnitFVIPMT = document.getElementById("interestPeriodUnitFVIPMT").value,
        paymentFVIPMT = parseFloat(document.getElementById("paymentFVIPMT").value, 10) || 0,
        periodFIP;
              

        if (interestPeriodUnitFVIPMT === "percent") {
            interestPeriodFVIPMT = interestPeriodFVIPMT / 100;
        }


        var periodFIP = Math.log10((interestPeriodFVIPMT * futureValueFVIPMT) / (paymentFVIPMT * (1 + interestPeriodFVIPMT)) + 1) / Math.log10(1 + interestPeriodFVIPMT); 

        document.getElementById("periodFIP").innerHTML = "The total number of compounding periods is " + periodFIP;
}


