// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.finance-calculators.appspot.com
// www.samdomforpeace.appspot.com
// www.chukwuemeka-samuel.appspot.com

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

// Annual Percentage Yield Calculations

// Calculate APY
document.getElementById("annualPercentageYield").addEventListener("submit", annualPercentageYield);

function annualPercentageYield(event) {
    event.preventDefault();

    var rate = parseFloat(document.getElementById("rate").value, 10) || 0,
        rateUnit = document.getElementById("rateUnit").value,
        compoundingPeriodperYear,
        compoundingPeriodUnit = document.getElementById("compoundingPeriodUnit").value;
        

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


        var apy = 100 * (Math.pow((1 + rate/compoundingPeriodperYear), compoundingPeriodperYear) - 1);
       
        document.getElementById("apy").innerHTML = "The annual percentage yield is " + round(apy, 4).toFixed(4) + "%";
}


// Calculate Rate
document.getElementById("apyRate").addEventListener("submit", apyRate);

function apyRate(event) {
    event.preventDefault();

    var rcompoundingPeriodperYear,
        rcompoundingPeriodUnit = document.getElementById("rcompoundingPeriodUnit").value,
        rAPY = parseFloat(document.getElementById("rAPY").value, 10) || 0,
        rAPYUnit = document.getElementById("rAPYUnit").value;
       

        if (rAPYUnit === "percent") {
            rAPY = rAPY / 100;
        }


        if (rcompoundingPeriodUnit === "annually") {
            rcompoundingPeriodperYear = 1;
        }
        else if (rcompoundingPeriodUnit === "semiannually") {
        rcompoundingPeriodperYear = 2;
        }
        else if (rcompoundingPeriodUnit === "quarterly") {
        rcompoundingPeriodperYear = 4;
        }
        else if (rcompoundingPeriodUnit === "monthly") {
        rcompoundingPeriodperYear = 12;
        }
        else if (rcompoundingPeriodUnit === "weekly") {
        rcompoundingPeriodperYear = 52;
        }
        else if (rcompoundingPeriodUnit === "daily-ordinary") {
        rcompoundingPeriodperYear = 360;
        }
        else if (rcompoundingPeriodUnit === "daily-exact") {
        rcompoundingPeriodperYear = 365;
        }

       
        var rrate = 100 * rcompoundingPeriodperYear * (Math.pow(rAPY + 1, 1/rcompoundingPeriodperYear) - 1);

        document.getElementById("rrate").innerHTML = "The rate is " + round(rrate, 4).toFixed(4) + "%";
}


// Calculate APY - Continuous Compound Interest
document.getElementById("continuousAPYunit").addEventListener("submit", continuousAPYunit);

function continuousAPYunit(event) {
    event.preventDefault();

    var continuousAPYrate = parseFloat(document.getElementById("continuousAPYrate").value, 10) || 0,
        continuousAPYrateUnit = document.getElementById("continuousAPYrateUnit").value,
        continuousAPYcompoundingPeriodUnit = document.getElementById("continuousAPYcompoundingPeriodUnit").value;
  
        
        if (continuousAPYrateUnit === "percent") {
            continuousAPYrate = continuousAPYrate / 100;
        }

         
        var continuousAPY = 100 * (Math.pow(Math.E, continuousAPYrate) - 1);
        
        document.getElementById("continuousAPY").innerHTML = "The annual percentage yield is " + round(continuousAPY, 4).toFixed(4) + "%";
}


// Calculate Rate - APY - Continuous Compound Interest
document.getElementById("continuousRate").addEventListener("submit", continuousRate);

function continuousRate(event) {
    event.preventDefault();

    var rateCompoundingPeriodUnit = document.getElementById("rateCompoundingPeriodUnit").value,
        rateAPY = parseFloat(document.getElementById("rateAPY").value, 10) || 0,
        rateAPYUnit = document.getElementById("rateAPYUnit").value;
        
  
        
        if (rateAPYUnit === "percent") {
            rateAPY = rateAPY / 100;
        }


        var continuousRateAPY = 100 * Math.log(rateAPY + 1);
        
        document.getElementById("continuousRateAPY").innerHTML = "The rate is " + round(continuousRateAPY, 4).toFixed(4) + "%";
}