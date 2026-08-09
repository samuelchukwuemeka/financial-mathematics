// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// https://samuelchukwuemeka.github.io/financial-mathematics/
// 

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


// Ordinary Annuity Calculations

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


        var futureValue = compoundingPeriodperYear * payment * ((Math.pow((1 + rate/compoundingPeriodperYear), (compoundingPeriodperYear * time)) - 1) / rate);

        var interest = futureValue - (payment * compoundingPeriodperYear * time);

        
        document.getElementById("futureValue").innerHTML = "The future value is $" + round(futureValue, 2).toFixed(2);

        document.getElementById("interest").innerHTML = "The interest is $" + round(interest, 2).toFixed(2);
}


// Calculate Payment and Interest - Sinking Funds
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
        

        var pmtIpayment = (pmtIfutureValue * pmtIrate) / (pmtIcompoundingPeriodperYear *(Math.pow((1 + pmtIrate/pmtIcompoundingPeriodperYear), (pmtIcompoundingPeriodperYear * pmtItime)) - 1)); 

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

       
        var tItime = (Math.log10((tIrate * tIfutureValue + tIcompoundingPeriodperYear * tIpayment)/(tIcompoundingPeriodperYear * tIpayment)) / (tIcompoundingPeriodperYear * Math.log10(1 + tIrate/tIcompoundingPeriodperYear))); 

        var tIinterest = tIfutureValue - (tIpayment * tIcompoundingPeriodperYear * tItime);

        document.getElementById("tItime").innerHTML = "The time is " + round(tItime, 4).toFixed(4) + " years";

        document.getElementById("tIinterest").innerHTML = "The interest is $" + round(tIinterest, 2).toFixed(2);
}


// Calculate Rate and Interest
document.getElementById("ordinaryAnnuityFirst").addEventListener("submit", ordinaryAnnuityFirst);

function ordinaryAnnuityFirst(event) {
    event.preventDefault();

    var futureValueFirst = parseFloat(document.getElementById("futureValueFirst").value, 10) || 0,
        paymentFirst = parseFloat(document.getElementById("paymentFirst").value, 10) || 0,
        timeFirst = parseFloat(document.getElementById("timeFirst").value, 10) || 0,
        timeUnitFirst = document.getElementById("timeUnitFirst").value,
        compoundingPeriodUnitFirst = document.getElementById("compoundingPeriodUnitFirst").value,
        compoundingPeriodperYearFirst,
        rateFirst,
        ratePercentFirst,
        interestFirst;
       
       

        if (compoundingPeriodUnitFirst === "annually") {
            compoundingPeriodperYearFirst = 1;
        }
        else if (compoundingPeriodUnitFirst === "semiannually") {
        compoundingPeriodperYearFirst = 2;
        }
        else if (compoundingPeriodUnitFirst === "quarterly") {
        compoundingPeriodperYearFirst = 4;
        }
        else if (compoundingPeriodUnitFirst === "monthly") {
        compoundingPeriodperYearFirst = 12;
        }
        else if (compoundingPeriodUnitFirst === "weekly") {
        compoundingPeriodperYearFirst = 52;
        }
        else if (compoundingPeriodUnitFirst === "daily-ordinary") {
        compoundingPeriodperYearFirst = 360;
        }
        else if (compoundingPeriodUnitFirst === "daily-exact") {
        compoundingPeriodperYearFirst = 365;
        }


        if (timeUnitFirst === "years") {
            timeFirst = timeFirst / 1;
        }
        if (timeUnitFirst === "months") {
            timeFirst = timeFirst / 12;
        }
        else if (timeUnitFirst === "weeks") {
        timeFirst = timeFirst / 52;
        }
        else if (timeUnitFirst === "days_O") {
        timeFirst = pmtItimeFirst / 360;
        }
        else if (timeUnitFirst === "days_E") {
        timeFirst = timeFirst / 365;
        }

       
        rateFirst = formulajs.RATE(compoundingPeriodperYearFirst * timeFirst, -1 * paymentFirst, 0, futureValueFirst);

        ratePercentFirst = rateFirst * 100;

        interestFirst = futureValueFirst - (paymentFirst * compoundingPeriodperYearFirst * timeFirst);

        document.getElementById("ratePercentFirst").innerHTML = "The rate is " + round(ratePercentFirst, 4).toFixed(4) + "%";

        document.getElementById("interestFirst").innerHTML = "The interest is $" + round(interestFirst, 2).toFixed(2);
}


// Calculate Present Value and Interest
document.getElementById("presentValueInterest").addEventListener("submit", presentValueInterest);

function presentValueInterest(event) {
    event.preventDefault();

    var pvIpayment = parseFloat(document.getElementById("pvIpayment").value, 10) || 0,
        pvIrate = parseFloat(document.getElementById("pvIrate").value, 10) || 0,
        pvIrateUnit = document.getElementById("pvIrateUnit").value,
        pvIcompoundingPeriodperYear,
        pvIcompoundingPeriodUnit = document.getElementById("pvIcompoundingPeriodUnit").value,
        pvItime = parseFloat(document.getElementById("pvItime").value, 10) || 0,
        pvItimeUnit = document.getElementById("pvItimeUnit").value;
        
        

        if (pvIrateUnit === "percent") {
            pvIrate = pvIrate / 100;
        }


        if (pvIcompoundingPeriodUnit === "annually") {
            pvIcompoundingPeriodperYear = 1;
        }
        else if (pvIcompoundingPeriodUnit === "semiannually") {
        pvIcompoundingPeriodperYear = 2;
        }
        else if (pvIcompoundingPeriodUnit === "quarterly") {
        pvIcompoundingPeriodperYear = 4;
        }
        else if (pvIcompoundingPeriodUnit === "monthly") {
        pvIcompoundingPeriodperYear = 12;
        }
        else if (pvIcompoundingPeriodUnit === "weekly") {
        pvIcompoundingPeriodperYear = 52;
        }
        else if (pvIcompoundingPeriodUnit === "daily-ordinary") {
        pvIcompoundingPeriodperYear = 360;
        }
        else if (pvIcompoundingPeriodUnit === "daily-exact") {
        pvIcompoundingPeriodperYear = 365;
        }


        if (pvItimeUnit === "months") {
            pvItime = pvItime / 12;
        }
        else if (pvItimeUnit === "weeks") {
        pvItime = pvItime / 52;
        }
        else if (pvItimeUnit === "days_O") {
        pvItime = pvItime / 360;
        }
        else if (pvItimeUnit === "days_E") {
        pvItime = pvItime / 365;
        }


        var presentValue = (pvIcompoundingPeriodperYear * pvIpayment * (1 - Math.pow(1 + pvIrate/pvIcompoundingPeriodperYear, -1 * pvIcompoundingPeriodperYear * pvItime))) / pvIrate;

        var pvIinterest = pvIpayment * pvIcompoundingPeriodperYear * pvItime - presentValue;

        
        document.getElementById("presentValue").innerHTML = "The present value is $" + round(presentValue, 2).toFixed(2);

        document.getElementById("pvIinterest").innerHTML = "The interest is $" + round(pvIinterest, 2).toFixed(2);
}


// Calculate Payment and Interest - Amortization
document.getElementById("amortizedPaymentInterest").addEventListener("submit", amortizedPaymentInterest);

function amortizedPaymentInterest(event) {
    event.preventDefault();

    var apmtIpresentValue = parseFloat(document.getElementById("apmtIpresentValue").value, 10) || 0,
        apmtIrate = parseFloat(document.getElementById("apmtIrate").value, 10) || 0,
        apmtIrateUnit = document.getElementById("apmtIrateUnit").value,
        apmtIcompoundingPeriodperYear,
        apmtIcompoundingPeriodUnit = document.getElementById("apmtIcompoundingPeriodUnit").value,
        apmtItime = parseFloat(document.getElementById("apmtItime").value, 10) || 0,
        apmtItimeUnit = document.getElementById("apmtItimeUnit").value;
       

        if (apmtIrateUnit === "percent") {
            apmtIrate = apmtIrate / 100;
        }


        if (apmtIcompoundingPeriodUnit === "annually") {
            apmtIcompoundingPeriodperYear = 1;
        }
        else if (apmtIcompoundingPeriodUnit === "semiannually") {
        apmtIcompoundingPeriodperYear = 2;
        }
        else if (apmtIcompoundingPeriodUnit === "quarterly") {
        apmtIcompoundingPeriodperYear = 4;
        }
        else if (apmtIcompoundingPeriodUnit === "monthly") {
        apmtIcompoundingPeriodperYear = 12;
        }
        else if (apmtIcompoundingPeriodUnit === "weekly") {
        apmtIcompoundingPeriodperYear = 52;
        }
        else if (apmtIcompoundingPeriodUnit === "daily-ordinary") {
        apmtIcompoundingPeriodperYear = 360;
        }
        else if (apmtIcompoundingPeriodUnit === "daily-exact") {
        apmtIcompoundingPeriodperYear = 365;
        }


        if (apmtItimeUnit === "months") {
            apmtItime = apmtItime / 12;
        }
        else if (apmtItimeUnit === "weeks") {
        apmtItime = apmtItime / 52;
        }
        else if (apmtItimeUnit === "days_O") {
        apmtItime = apmtItime / 360;
        }
        else if (apmtItimeUnit === "days_E") {
        apmtItime = apmtItime / 365;
        }
        

        var apmtIpayment = (apmtIpresentValue * apmtIrate) / (apmtIcompoundingPeriodperYear * (1 - Math.pow(1 + apmtIrate/apmtIcompoundingPeriodperYear, -1 * apmtIcompoundingPeriodperYear * apmtItime))); 

        var apmtIinterest = apmtIpayment * apmtIcompoundingPeriodperYear * apmtItime - apmtIpresentValue;

        document.getElementById("apmtIpayment").innerHTML = "The periodic payment is $" + round(apmtIpayment, 2).toFixed(2);

        document.getElementById("apmtIinterest").innerHTML = "The interest is $" + round(apmtIinterest, 2).toFixed(2);
}


// Calculate Time and Interest
document.getElementById("pvTimeInterest").addEventListener("submit", pvTimeInterest);

function pvTimeInterest(event) {
    event.preventDefault();

    var tIpresentValue = parseFloat(document.getElementById("tIpresentValue").value, 10) || 0,
        pvtIpayment = parseFloat(document.getElementById("pvtIpayment").value, 10) || 0,
        pvtIrate = parseFloat(document.getElementById("pvtIrate").value, 10) || 0,
        pvtIrateUnit = document.getElementById("pvtIrateUnit").value,
        pvtIcompoundingPeriodperYear,
        pvtIcompoundingPeriodUnit = document.getElementById("pvtIcompoundingPeriodUnit").value;
       
       

        if (pvtIrateUnit === "percent") {
            pvtIrate = pvtIrate / 100;
        }


        if (pvtIcompoundingPeriodUnit === "annually") {
            pvtIcompoundingPeriodperYear = 1;
        }
        else if (pvtIcompoundingPeriodUnit === "semiannually") {
        pvtIcompoundingPeriodperYear = 2;
        }
        else if (pvtIcompoundingPeriodUnit === "quarterly") {
        pvtIcompoundingPeriodperYear = 4;
        }
        else if (pvtIcompoundingPeriodUnit === "monthly") {
        pvtIcompoundingPeriodperYear = 12;
        }
        else if (pvtIcompoundingPeriodUnit === "weekly") {
        pvtIcompoundingPeriodperYear = 52;
        }
        else if (pvtIcompoundingPeriodUnit === "daily-ordinary") {
        pvtIcompoundingPeriodperYear = 360;
        }
        else if (pvtIcompoundingPeriodUnit === "daily-exact") {
        pvtIcompoundingPeriodperYear = 365;
        }


        var pvtItime = (Math.log10(((pvtIcompoundingPeriodperYear * pvtIpayment) - (pvtIrate * tIpresentValue)) / (pvtIcompoundingPeriodperYear * pvtIpayment))) / (-1 * pvtIcompoundingPeriodperYear * Math.log10(1 + pvtIrate / pvtIcompoundingPeriodperYear)); 

        var pvtIinterest = pvtIpayment * pvtIcompoundingPeriodperYear * pvtItime - tIpresentValue;

        document.getElementById("pvtItime").innerHTML = "The time is " + round(pvtItime, 4).toFixed(4) + " years";

        document.getElementById("pvtIinterest").innerHTML = "The interest is $" + round(pvtIinterest, 2).toFixed(2);
}

// Calculate Rate and Interest
document.getElementById("ordinaryAnnuitySecond").addEventListener("submit", ordinaryAnnuitySecond);

function ordinaryAnnuitySecond(event) {
    event.preventDefault();

    var presentValueSecond = parseFloat(document.getElementById("presentValueSecond").value, 10) || 0,
        paymentSecond = parseFloat(document.getElementById("paymentSecond").value, 10) || 0,
        timeSecond = parseFloat(document.getElementById("timeSecond").value, 10) || 0,
        timeUnitSecond = document.getElementById("timeUnitSecond").value,
        compoundingPeriodUnitSecond = document.getElementById("compoundingPeriodUnitSecond").value,
        compoundingPeriodperYearSecond,
        rateSecond,
        ratePercentSecond,
        interestSecond;
       
       

        if (compoundingPeriodUnitSecond === "annually") {
            compoundingPeriodperYearSecond = 1;
        }
        else if (compoundingPeriodUnitSecond === "semiannually") {
        compoundingPeriodperYearSecond = 2;
        }
        else if (compoundingPeriodUnitSecond === "quarterly") {
        compoundingPeriodperYearSecond = 4;
        }
        else if (compoundingPeriodUnitSecond === "monthly") {
        compoundingPeriodperYearSecond = 12;
        }
        else if (compoundingPeriodUnitSecond === "weekly") {
        compoundingPeriodperYearSecond = 52;
        }
        else if (compoundingPeriodUnitSecond === "daily-ordinary") {
        compoundingPeriodperYearSecond = 360;
        }
        else if (compoundingPeriodUnitSecond === "daily-exact") {
        compoundingPeriodperYearSecond = 365;
        }


        if (timeUnitSecond === "years") {
            timeSecond = timeSecond / 1;
        }
        if (timeUnitSecond === "months") {
            timeSecond = timeSecond / 12;
        }
        else if (timeUnitSecond === "weeks") {
        timeSecond = timeSecond / 52;
        }
        else if (timeUnitSecond === "days_O") {
        timeSecond = pmtItimeSecond / 360;
        }
        else if (timeUnitSecond === "days_E") {
        timeSecond = timeSecond / 365;
        }

       
        rateSecond = formulajs.RATE(compoundingPeriodperYearSecond * timeSecond, paymentSecond, -1 * presentValueSecond);

        ratePercentSecond = rateSecond * 100 * compoundingPeriodperYearSecond;

        interestSecond = (paymentSecond * compoundingPeriodperYearSecond * timeSecond) - presentValueSecond;

        document.getElementById("ratePercentSecond").innerHTML = "The rate is " + round(ratePercentSecond, 4).toFixed(4) + "%";

        document.getElementById("interestSecond").innerHTML = "The interest is $" + round(interestSecond, 2).toFixed(2);
}


// Given PMT-i-n; Calculate FV
document.getElementById("futureValuePMTIN").addEventListener("submit", futureValuePMTIN);

function futureValuePMTIN(event) {
    event.preventDefault();

    var paymentPMTIN = parseFloat(document.getElementById("paymentPMTIN").value, 10) || 0,
        interestPeriodPMTIN = parseFloat(document.getElementById("interestPeriodPMTIN").value, 10) || 0,
        interestPeriodUnitPMTIN = document.getElementById("interestPeriodUnitPMTIN").value,
        totalPeriodsPMTIN = parseFloat(document.getElementById("totalPeriodsPMTIN").value, 10) || 0,
        futureValuePIN,
        interestPIN;
              

        if (interestPeriodUnitPMTIN === "percent") {
            interestPeriodPMTIN = interestPeriodPMTIN / 100;
        }


        futureValuePIN = paymentPMTIN * (Math.pow((1 + interestPeriodPMTIN), totalPeriodsPMTIN) - 1) / interestPeriodPMTIN; 

        interestPIN = futureValuePIN - (paymentPMTIN * totalPeriodsPMTIN);

        document.getElementById("futureValuePIN").innerHTML = "The future value is $" + round(futureValuePIN, 2).toFixed(2);

        document.getElementById("interestPIN").innerHTML = "The interest is $" + round(interestPIN, 2).toFixed(2);
}


// Given FV-i-n; Calculate PMT
document.getElementById("paymentFVIN").addEventListener("submit", paymentFVIN);

function paymentFVIN(event) {
    event.preventDefault();

    var futureValueFVIN = parseFloat(document.getElementById("futureValueFVIN").value, 10) || 0,
        interestPeriodFVIN = parseFloat(document.getElementById("interestPeriodFVIN").value, 10) || 0,
        interestPeriodUnitFVIN = document.getElementById("interestPeriodUnitFVIN").value,
        totalPeriodsFVIN = parseFloat(document.getElementById("totalPeriodsFVIN").value, 10) || 0,
        paymentFIN,
        interestFIN;
              

        if (interestPeriodUnitFVIN === "percent") {
            interestPeriodFVIN = interestPeriodFVIN / 100;
        }


        paymentFIN = (futureValueFVIN * interestPeriodFVIN)  / ((Math.pow((1 + interestPeriodFVIN), totalPeriodsFVIN) - 1)); 

        interestFIN = futureValueFVIN - (paymentFIN * totalPeriodsFVIN);

        document.getElementById("paymentFIN").innerHTML = "The periodic payment is $" + round(paymentFIN, 2).toFixed(2);

        document.getElementById("interestFIN").innerHTML = "The interest is $" + round(interestFIN, 2).toFixed(2);
}


// Given FV-i-PMT; Calculate n
document.getElementById("periodFVIPMT").addEventListener("submit", periodFVIPMT);

function periodFVIPMT(event) {
    event.preventDefault();

    var futureValueFVIPMT = parseFloat(document.getElementById("futureValueFVIPMT").value, 10) || 0,
        interestPeriodFVIPMT = parseFloat(document.getElementById("interestPeriodFVIPMT").value, 10) || 0,
        interestPeriodUnitFVIPMT = document.getElementById("interestPeriodUnitFVIPMT").value,
        paymentFVIPMT = parseFloat(document.getElementById("paymentFVIPMT").value, 10) || 0,
        periodFIP,
        interestFIP;
              

        if (interestPeriodUnitFVIPMT === "percent") {
            interestPeriodFVIPMT = interestPeriodFVIPMT / 100;
        }


        periodFIP = Math.log10((interestPeriodFVIPMT * futureValueFVIPMT + paymentFVIPMT)/paymentFVIPMT) / Math.log10(1 + interestPeriodFVIPMT); 

        interestFIP = futureValueFVIPMT - (paymentFVIPMT * periodFIP);

        document.getElementById("periodFIP").innerHTML = "The total number of compounding periods is " + periodFIP;

        document.getElementById("interestFIP").innerHTML = "The interest is $" + round(interestFIP, 2).toFixed(2);
}


// Given PMT-i-n; Calculate PV
document.getElementById("presentValuePVPMTIN").addEventListener("submit", presentValuePVPMTIN);

function presentValuePVPMTIN(event) {
    event.preventDefault();

    var paymentPVPMTIN = parseFloat(document.getElementById("paymentPVPMTIN").value, 10) || 0,
        interestPeriodPVPMTIN = parseFloat(document.getElementById("interestPeriodPVPMTIN").value, 10) || 0,
        interestPeriodUnitPVPMTIN = document.getElementById("interestPeriodUnitPVPMTIN").value,
        totalPeriodsPVPMTIN = parseFloat(document.getElementById("totalPeriodsPVPMTIN").value, 10) || 0,
        presentValuePIN,
        interestPVPMTIN;
              

        if (interestPeriodUnitPVPMTIN === "percent") {
            interestPeriodPVPMTIN = interestPeriodPVPMTIN / 100;
        }


        presentValuePIN = paymentPVPMTIN * (1 - Math.pow((1 + interestPeriodPVPMTIN), -1 * totalPeriodsPVPMTIN)) / interestPeriodPVPMTIN; 

        interestPVPMTIN = (paymentPVPMTIN * totalPeriodsPVPMTIN) - presentValuePIN;

        document.getElementById("presentValuePIN").innerHTML = "The present value is $" + round(presentValuePIN, 2).toFixed(2);

        document.getElementById("interestPVPMTIN").innerHTML = "The interest is $" + round(interestPVPMTIN, 2).toFixed(2);
}


// Given PV-i-n; Calculate PMT
document.getElementById("paymentPVIN").addEventListener("submit", paymentPVIN);

function paymentPVIN(event) {
    event.preventDefault();

    var presentValuePVIN = parseFloat(document.getElementById("presentValuePVIN").value, 10) || 0,
        interestPeriodPVIN = parseFloat(document.getElementById("interestPeriodPVIN").value, 10) || 0,
        interestPeriodUnitPVIN = document.getElementById("interestPeriodUnitPVIN").value,
        totalPeriodsPVIN = parseFloat(document.getElementById("totalPeriodsPVIN").value, 10) || 0,
        paymentPIN,
        interestPVIN;
              

        if (interestPeriodUnitPVIN === "percent") {
            interestPeriodPVIN = interestPeriodPVIN / 100;
        }


        paymentPIN = (presentValuePVIN * interestPeriodPVIN) / (1 - (Math.pow((1 + interestPeriodPVIN), -1 * totalPeriodsPVIN))); 

        interestPVIN = (paymentPIN * totalPeriodsPVIN) - presentValuePVIN;

        document.getElementById("paymentPIN").innerHTML = "The periodic payment is $" + round(paymentPIN, 2).toFixed(2);

        document.getElementById("interestPVIN").innerHTML = "The interest is $" + round(interestPVIN, 2).toFixed(2);
}


// Given PV-i-PMT; Calculate n
document.getElementById("periodPVIPMT").addEventListener("submit", periodPVIPMT);

function periodPVIPMT(event) {
    event.preventDefault();

    var presentValuePVIPMT = parseFloat(document.getElementById("presentValuePVIPMT").value, 10) || 0,
        interestPeriodPVIPMT = parseFloat(document.getElementById("interestPeriodPVIPMT").value, 10) || 0,
        interestPeriodUnitPVIPMT = document.getElementById("interestPeriodUnitPVIPMT").value,
        paymentPVIPMT = parseFloat(document.getElementById("paymentPVIPMT").value, 10) || 0,
        periodPIP,
        interestPVIPMT;
              

        if (interestPeriodUnitPVIPMT === "percent") {
            interestPeriodPVIPMT = interestPeriodPVIPMT / 100;
        }


        periodPIP = Math.log10(paymentPVIPMT/(paymentPVIPMT - interestPeriodPVIPMT * presentValuePVIPMT)) / Math.log10(1 + interestPeriodPVIPMT); 

        interestPVIPMT = (paymentPVIPMT * periodPIP) - presentValuePVIPMT;

        document.getElementById("periodPIP").innerHTML = "The total number of compounding periods is " + periodPIP;

        document.getElementById("interestPVIPMT").innerHTML = "The interest is $" + round(interestPVIPMT, 2).toFixed(2);
}