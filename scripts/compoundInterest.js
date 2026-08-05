// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.finance-calculators.appspot.com
// www.samdomforpeace.appspot.com
// www.chukwuemeka-samuel.appspot.com

"use strict";


//Resize the textarea
$('textarea').on('input', function() {
  $(this).outerHeight(75).outerHeight(this.scrollHeight);
});

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


// Compound Interest Calculations

// Calculate Amount and Interest
document.getElementById("compoundInterestAmount").addEventListener("submit", compoundInterestAmount);

function compoundInterestAmount(event) {
    event.preventDefault();
    event.stopPropagation();

    var principal = parseFloat(document.getElementById("principal").value, 10) || 0,
        rate = parseFloat(document.getElementById("rate").value, 10) || 0,
        time = parseFloat(document.getElementById("time").value, 10) || 0,
        compoundingPeriodperYear,
        rateUnit = document.getElementById("rateUnit").value,
        compoundingPeriodUnit = document.getElementById("compoundingPeriodUnit").value,
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


        var amount = principal * Math.pow((1 + rate/compoundingPeriodperYear), (compoundingPeriodperYear * time));

        var compoundInterest = amount - principal;

        
        document.getElementById("amount").innerHTML = "The amount is $" + round(amount, 2).toFixed(2);

        document.getElementById("compoundInterest").innerHTML = "The compound interest is $" + round(compoundInterest, 2).toFixed(2);
}


// Calculate Time and Interest
document.getElementById("timeInterest").addEventListener("submit", timeInterest);

function timeInterest(event) {
    event.preventDefault();

    var tIprincipal = parseFloat(document.getElementById("tIprincipal").value, 10) || 0,
        tIamount = parseFloat(document.getElementById("tIamount").value, 10) || 0,
        tIcompoundingPeriodperYear,
        tIrate = parseFloat(document.getElementById("tIrate").value, 10) || 0,
        tIcompoundingPeriodUnit = document.getElementById("tIcompoundingPeriodUnit").value,
        tIrateUnit = document.getElementById("tIrateUnit").value;
       

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

       
        var tItime = Math.log10(tIamount/tIprincipal) / (tIcompoundingPeriodperYear * Math.log10(1 + tIrate/tIcompoundingPeriodperYear)); 

        var tIinterest = tIamount - tIprincipal;

        document.getElementById("tItime").innerHTML = "The time is " + round(tItime, 4).toFixed(4) + " years";

        document.getElementById("tIinterest").innerHTML = "The compound interest is $" + round(tIinterest, 2).toFixed(2);
}


// Calculate Principal and Interest
document.getElementById("principalInterest").addEventListener("submit", principalInterest);

function principalInterest(event) {
    event.preventDefault();

    var pIamount = parseFloat(document.getElementById("pIamount").value, 10) || 0,
        pIrate = parseFloat(document.getElementById("pIrate").value, 10) || 0,
        pIcompoundingPeriodperYear,
        pItime = parseFloat(document.getElementById("pItime").value, 10) || 0,
        pIcompoundingPeriodUnit = document.getElementById("pIcompoundingPeriodUnit").value,
        pIrateUnit = document.getElementById("pIrateUnit").value,
        pItimeUnit = document.getElementById("pItimeUnit").value;
       

        if (pIrateUnit === "percent") {
            pIrate = pIrate / 100;
        }


        if (pIcompoundingPeriodUnit === "annually") {
            pIcompoundingPeriodperYear = 1;
        }
        else if (pIcompoundingPeriodUnit === "semiannually") {
        pIcompoundingPeriodperYear = 2;
        }
        else if (pIcompoundingPeriodUnit === "quarterly") {
        pIcompoundingPeriodperYear = 4;
        }
        else if (pIcompoundingPeriodUnit === "monthly") {
        pIcompoundingPeriodperYear = 12;
        }
        else if (pIcompoundingPeriodUnit === "weekly") {
        pIcompoundingPeriodperYear = 52;
        }
        else if (pIcompoundingPeriodUnit === "daily-ordinary") {
        pIcompoundingPeriodperYear = 360;
        }
        else if (pIcompoundingPeriodUnit === "daily-exact") {
        pIcompoundingPeriodperYear = 365;
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
        

        var pIprincipal = pIamount / Math.pow((1 + pIrate/pIcompoundingPeriodperYear), (pIcompoundingPeriodperYear * pItime)); 

        var pIinterest = pIamount - pIprincipal;

        document.getElementById("pIprincipal").innerHTML = "The principal is $" + round(pIprincipal, 2).toFixed(2);

        document.getElementById("pIinterest").innerHTML = "The compound interest is $" + round(pIinterest, 2).toFixed(2);
}


// Calculate Rate and Interest
document.getElementById("rateInterest").addEventListener("submit", rateInterest);

function rateInterest(event) {
    event.preventDefault();

    var rIprincipal = parseFloat(document.getElementById("rIprincipal").value, 10) || 0,
        rIamount = parseFloat(document.getElementById("rIamount").value, 10) || 0,
        rIcompoundingPeriodperYear,
        rItime = parseFloat(document.getElementById("rItime").value, 10) || 0,
        rIcompoundingPeriodUnit = document.getElementById("rIcompoundingPeriodUnit").value,
        rItimeUnit = document.getElementById("rItimeUnit").value;

       
        if (rIcompoundingPeriodUnit === "annually") {
            rIcompoundingPeriodperYear = 1;
        }
        else if (rIcompoundingPeriodUnit === "semiannually") {
        rIcompoundingPeriodperYear = 2;
        }
        else if (rIcompoundingPeriodUnit === "quarterly") {
        rIcompoundingPeriodperYear = 4;
        }
        else if (rIcompoundingPeriodUnit === "monthly") {
        rIcompoundingPeriodperYear = 12;
        }
        else if (rIcompoundingPeriodUnit === "weekly") {
        rIcompoundingPeriodperYear = 52;
        }
        else if (rIcompoundingPeriodUnit === "daily-ordinary") {
        rIcompoundingPeriodperYear = 360;
        }
        else if (rIcompoundingPeriodUnit === "daily-exact") {
        rIcompoundingPeriodperYear = 365;
        }


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
       

        var rIrate = 100 * (rIcompoundingPeriodperYear * (Math.pow((rIamount/rIprincipal), (1/(rIcompoundingPeriodperYear*rItime))) - 1));

        var rIinterest = rIamount - rIprincipal;

        document.getElementById("rIrate").innerHTML = "The rate is " + round(rIrate, 4).toFixed(4) + "%";

        document.getElementById("rIinterest").innerHTML = "The compound interest is $" + round(rIinterest, 2).toFixed(2);
}



// Calculate Principal and Amount
document.getElementById("principalAmount").addEventListener("submit", principalAmount);

function principalAmount(event) {
    event.preventDefault();

    var pAinterest = parseFloat(document.getElementById("pAinterest").value, 10) || 0,
        pArate = parseFloat(document.getElementById("pArate").value, 10) || 0,
        pArateUnit = document.getElementById("pArateUnit").value,
        pAcompoundingPeriodperYear,
        pAcompoundingPeriodUnit = document.getElementById("pAcompoundingPeriodUnit").value,
        pAtime = parseFloat(document.getElementById("pAtime").value, 10) || 0,
        pAtimeUnit = document.getElementById("pAtimeUnit").value;
        
       
        if (pArateUnit === "percent") {
            pArate = pArate / 100;
        }
       

        if (pAcompoundingPeriodUnit === "annually") {
            pAcompoundingPeriodperYear = 1;
        }
        else if (pAcompoundingPeriodUnit === "semiannually") {
        pAcompoundingPeriodperYear = 2;
        }
        else if (pAcompoundingPeriodUnit === "quarterly") {
        pAcompoundingPeriodperYear = 4;
        }
        else if (pAcompoundingPeriodUnit === "monthly") {
        pAcompoundingPeriodperYear = 12;
        }
        else if (pAcompoundingPeriodUnit === "weekly") {
        pAcompoundingPeriodperYear = 52;
        }
        else if (pAcompoundingPeriodUnit === "daily-ordinary") {
        pAcompoundingPeriodperYear = 360;
        }
        else if (pAcompoundingPeriodUnit === "daily-exact") {
        pAcompoundingPeriodperYear = 365;
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
      
        var pAprincipal = pAinterest / (Math.pow((1+(pArate/pAcompoundingPeriodperYear)), (pAcompoundingPeriodperYear*pAtime)) - 1); 

        var pAamount = pAprincipal + pAinterest;

        document.getElementById("pAprincipal").innerHTML = "The principal is $" + round(pAprincipal, 2).toFixed(2);

        document.getElementById("pAamount").innerHTML = "The amount is $" + round(pAamount, 2).toFixed(2);
}



// Calculate Principal and Rate
document.getElementById("principalRate").addEventListener("submit", principalRate);

function principalRate(event) {
    event.preventDefault();

    var pRinterest = parseFloat(document.getElementById("pRinterest").value, 10) || 0,
        pRamount = parseFloat(document.getElementById("pRamount").value, 10) || 0,
        pRtime = parseFloat(document.getElementById("pRtime").value, 10) || 0,
        pRtimeUnit = document.getElementById("pRtimeUnit").value,
        pRcompoundingPeriodperYear,
        pRcompoundingPeriodUnit = document.getElementById("pRcompoundingPeriodUnit").value;
          

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


        if (pRcompoundingPeriodUnit === "annually") {
            pRcompoundingPeriodperYear = 1;
        }
        else if (pRcompoundingPeriodUnit === "semiannually") {
        pRcompoundingPeriodperYear = 2;
        }
        else if (pRcompoundingPeriodUnit === "quarterly") {
        pRcompoundingPeriodperYear = 4;
        }
        else if (pRcompoundingPeriodUnit === "monthly") {
        pRcompoundingPeriodperYear = 12;
        }
        else if (pRcompoundingPeriodUnit === "weekly") {
        pRcompoundingPeriodperYear = 52;
        }
        else if (pRcompoundingPeriodUnit === "daily-ordinary") {
        pRcompoundingPeriodperYear = 360;
        }
        else if (pRcompoundingPeriodUnit === "daily-exact") {
        pRcompoundingPeriodperYear = 365;
        }
      

        var pRprincipal = pRamount - pRinterest; 

        var pRrate = 100 * (pRcompoundingPeriodperYear * (Math.pow((pRamount/pRprincipal), (1/(pRcompoundingPeriodperYear*pRtime))) - 1));

        document.getElementById("pRprincipal").innerHTML = "The principal is $" + round(pRprincipal, 2).toFixed(2);

        document.getElementById("pRrate").innerHTML = "The rate is " + round(pRrate, 4).toFixed(4) + "%";
}


// Calculate Amount and Rate
document.getElementById("amountRate").addEventListener("submit", amountRate);

function amountRate(event) {
    event.preventDefault();

    var aRinterest = parseFloat(document.getElementById("aRinterest").value, 10) || 0,
        aRprincipal = parseFloat(document.getElementById("aRprincipal").value, 10) || 0,
        aRtime = parseFloat(document.getElementById("aRtime").value, 10) || 0,
        aRtimeUnit = document.getElementById("aRtimeUnit").value,
        aRcompoundingPeriodperYear,
        aRcompoundingPeriodUnit = document.getElementById("aRcompoundingPeriodUnit").value;
          

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


        if (aRcompoundingPeriodUnit === "annually") {
            aRcompoundingPeriodperYear = 1;
        }
        else if (aRcompoundingPeriodUnit === "semiannually") {
        aRcompoundingPeriodperYear = 2;
        }
        else if (aRcompoundingPeriodUnit === "quarterly") {
        aRcompoundingPeriodperYear = 4;
        }
        else if (aRcompoundingPeriodUnit === "monthly") {
        aRcompoundingPeriodperYear = 12;
        }
        else if (aRcompoundingPeriodUnit === "weekly") {
        aRcompoundingPeriodperYear = 52;
        }
        else if (aRcompoundingPeriodUnit === "daily-ordinary") {
        aRcompoundingPeriodperYear = 360;
        }
        else if (aRcompoundingPeriodUnit === "daily-exact") {
        aRcompoundingPeriodperYear = 365;
        }
      

        var aRamount = aRprincipal + aRinterest; 

        var aRrate = 100 * (aRcompoundingPeriodperYear * (Math.pow(aRamount/aRprincipal , 1/(aRcompoundingPeriodperYear*aRtime)) - 1));

        document.getElementById("aRamount").innerHTML = "The amount is $" + round(aRamount, 2).toFixed(2);

        document.getElementById("aRrate").innerHTML = "The rate is " + round(aRrate, 4).toFixed(4) + "%";
}


// Calculate Principal and Time
document.getElementById("principalTime").addEventListener("submit", principalTime);

function principalTime(event) {
    event.preventDefault();

    var pTinterest = parseFloat(document.getElementById("pTinterest").value, 10) || 0,
        pTamount = parseFloat(document.getElementById("pTamount").value, 10) || 0,
        pTcompoundingPeriodperYear,
        pTrate = parseFloat(document.getElementById("pTrate").value, 10) || 0,
        pTcompoundingPeriodUnit = document.getElementById("pTcompoundingPeriodUnit").value,
        pTrateUnit = document.getElementById("pTrateUnit").value;
       

        if (pTrateUnit === "percent") {
            pTrate = pTrate / 100;
        }


        if (pTcompoundingPeriodUnit === "annually") {
            pTcompoundingPeriodperYear = 1;
        }
        else if (pTcompoundingPeriodUnit === "semiannually") {
        pTcompoundingPeriodperYear = 2;
        }
        else if (pTcompoundingPeriodUnit === "quarterly") {
        pTcompoundingPeriodperYear = 4;
        }
        else if (pTcompoundingPeriodUnit === "monthly") {
        pTcompoundingPeriodperYear = 12;
        }
        else if (pTcompoundingPeriodUnit === "weekly") {
        pTcompoundingPeriodperYear = 52;
        }
        else if (pTcompoundingPeriodUnit === "daily-ordinary") {
        pTcompoundingPeriodperYear = 360;
        }
        else if (pTcompoundingPeriodUnit === "daily-exact") {
        pTcompoundingPeriodperYear = 365;
        }

       
        var pTprincipal = pTamount - pTinterest;
        
        var pTtime = Math.log10(pTamount/pTprincipal) / (pTcompoundingPeriodperYear * Math.log10(1 + pTrate/pTcompoundingPeriodperYear));
        
        document.getElementById("pTprincipal").innerHTML = "The principal is $" + round(pTprincipal, 2).toFixed(2); 

        document.getElementById("pTtime").innerHTML = "The time is " + round(pTtime, 4).toFixed(4) + " years";

}


// Calculate Amount and Time
document.getElementById("amountTime").addEventListener("submit", amountTime);

function amountTime(event) {
    event.preventDefault();

    var aTinterest = parseFloat(document.getElementById("aTinterest").value, 10) || 0,
        aTprincipal = parseFloat(document.getElementById("aTprincipal").value, 10) || 0,
        aTcompoundingPeriodperYear,
        aTrate = parseFloat(document.getElementById("aTrate").value, 10) || 0,
        aTcompoundingPeriodUnit = document.getElementById("aTcompoundingPeriodUnit").value,
        aTrateUnit = document.getElementById("aTrateUnit").value;
       

        if (aTrateUnit === "percent") {
            aTrate = aTrate / 100;
        }


        if (aTcompoundingPeriodUnit === "annually") {
            aTcompoundingPeriodperYear = 1;
        }
        else if (aTcompoundingPeriodUnit === "semiannually") {
        aTcompoundingPeriodperYear = 2;
        }
        else if (aTcompoundingPeriodUnit === "quarterly") {
        aTcompoundingPeriodperYear = 4;
        }
        else if (aTcompoundingPeriodUnit === "monthly") {
        aTcompoundingPeriodperYear = 12;
        }
        else if (aTcompoundingPeriodUnit === "weekly") {
        aTcompoundingPeriodperYear = 52;
        }
        else if (aTcompoundingPeriodUnit === "daily-ordinary") {
        aTcompoundingPeriodperYear = 360;
        }
        else if (aTcompoundingPeriodUnit === "daily-exact") {
        aTcompoundingPeriodperYear = 365;
        }

       
        var aTamount = aTprincipal + aTinterest;
        
        var aTtime = Math.log10(aTamount/aTprincipal) / (aTcompoundingPeriodperYear * Math.log10(1 + aTrate/aTcompoundingPeriodperYear));
        
        document.getElementById("aTamount").innerHTML = "The amount is $" + round(aTamount, 2).toFixed(2); 

        document.getElementById("aTtime").innerHTML = "The time is " + round(aTtime, 4).toFixed(4) + " years";

}

// Given: Principal, Annual Interest Rate per Period, Total Number of Compounding Periods per Year
// Calculate Amount
document.getElementById("amountFormula").addEventListener("submit", amountFormula);

function amountFormula(event) {
    event.preventDefault();

    var aPrincipal = parseFloat(document.getElementById("aPrincipal").value, 10) || 0,
        aInterestPeriod = parseFloat(document.getElementById("aInterestPeriod").value, 10) || 0,
        aInterestPeriodUnit = document.getElementById("aInterestPeriodUnit").value,
        aTotalPeriods = parseFloat(document.getElementById("aTotalPeriods").value, 10) || 0,
        amount2ndFormula;
       
        if (aInterestPeriodUnit === "percent") {
            aInterestPeriod = aInterestPeriod / 100;
        }
               
        var amount2ndFormula = aPrincipal * Math.pow((1 + aInterestPeriod), aTotalPeriods);
                       
        document.getElementById("amount2ndFormula").innerHTML = "The amount is $" + round(amount2ndFormula, 2).toFixed(2); 
}

// Given: Amount, Annual Interest Rate per Period, Total Number of Compounding Periods per Year
// Calculate Principal
document.getElementById("principalFormula").addEventListener("submit", principalFormula);

function principalFormula(event) {
    event.preventDefault();

    var pAmount = parseFloat(document.getElementById("pAmount").value, 10) || 0,
        pInterestPeriod = parseFloat(document.getElementById("pInterestPeriod").value, 10) || 0,
        pInterestPeriodUnit = document.getElementById("pInterestPeriodUnit").value,
        pTotalPeriods = parseFloat(document.getElementById("pTotalPeriods").value, 10) || 0,
        principal2ndFormula;
       
        if (pInterestPeriodUnit === "percent") {
            pInterestPeriod = pInterestPeriod / 100;
        }
               
        var principal2ndFormula = pAmount / Math.pow((1 + pInterestPeriod), pTotalPeriods);
                       
        document.getElementById("principal2ndFormula").innerHTML = "The principal is $" + round(principal2ndFormula, 2).toFixed(2); 
}

// Given: Rate, Number of Compounding Periods per Year
// Calculate Annual Interest Rate per Period
document.getElementById("interestRatePeriodForm").addEventListener("submit", interestRatePeriodForm);

function interestRatePeriodForm(event) {
    event.preventDefault();
    event.stopPropagation();

    var iRate = parseFloat(document.getElementById("iRate").value, 10) || 0,
        iRateUnit = document.getElementById("iRateUnit").value,
        iCompoundingPeriod,
        iCompoundingPeriodUnit = document.getElementById("iCompoundingPeriodUnit").value,
        interestRatePeriodValue;
       
        if (iRateUnit === "percent") {
            iRate = iRate / 100;
        }
        
        if (iCompoundingPeriodUnit === "annually") {
            iCompoundingPeriod = 1;
        }
        else if (iCompoundingPeriodUnit === "semiannually") {
        iCompoundingPeriod = 2;
        }
        else if (iCompoundingPeriodUnit === "quarterly") {
        iCompoundingPeriod = 4;
        }
        else if (iCompoundingPeriodUnit === "monthly") {
        iCompoundingPeriod = 12;
        }
        else if (iCompoundingPeriodUnit === "weekly") {
        iCompoundingPeriod = 52;
        }
        else if (iCompoundingPeriodUnit === "daily-ordinary") {
        iCompoundingPeriod = 360;
        }
        else if (iCompoundingPeriodUnit === "daily-exact") {
        iCompoundingPeriod = 365;
        }
               
        var interestRatePeriodValue = iRate / iCompoundingPeriod;
                       
        document.getElementById("interestRatePeriodValue").innerHTML = "The interest rate per year is " + interestRatePeriodValue + " OR " + round(interestRatePeriodValue, 4).toFixed(4) + "%"; 
}


//Future Value of Cash Flows (Cash Flows at the end of each period) Calculator
document.getElementById("firstCompoundInterestCalculator").addEventListener("submit", firstCompoundInterestCalculator);

function firstCompoundInterestCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var firstDataYear = document.getElementById('firstDataYear').value,
            firstCIDataYear = firstDataYear.split('\n'),
            numberFirstDataYear = firstCIDataYear.length,
            maxFirstDataYear = parseFloat(firstCIDataYear[numberFirstDataYear - 1]),
            firstCashFlows = document.getElementById('firstCashFlows').value,
            firstCICashFlows = firstCashFlows.split('\n'),
            numberFirstCashFlows = firstCICashFlows.length,
            firstRate = parseFloat(document.getElementById("firstRate").value, 10) || 0,
            firstRateUnit = document.getElementById("firstRateUnit").value,
            firstCompoundingPeriod,
            firstCompoundingPeriodUnit = document.getElementById("firstCompoundingPeriodUnit").value,
            firstDataYearBase,
            firstDataYearExponent = [],
            firstDataYearFactor = [],
            firstFutureCashFlows = [],
            firstSumFutureCashFlows = 0;
    
    
    if(numberFirstDataYear !== numberFirstCashFlows){
        alert("The sizes of the Year and the Cash Flows must be equal.\nPlease check your data again.");
        quit();
    }
    
       
    if (firstRateUnit === "percent") {
        firstRate = firstRate / 100;
    }

    if (firstCompoundingPeriodUnit === "annually") {
        firstCompoundingPeriod = 1;
    } else if (firstCompoundingPeriodUnit === "semiannually") {
        firstCompoundingPeriod = 2;
    } else if (firstCompoundingPeriodUnit === "quarterly") {
        firstCompoundingPeriod = 4;
    } else if (firstCompoundingPeriodUnit === "monthly") {
        firstCompoundingPeriod = 12;
    } else if (firstCompoundingPeriodUnit === "weekly") {
        firstCompoundingPeriod = 52;
    } else if (firstCompoundingPeriodUnit === "daily-ordinary") {
        firstCompoundingPeriod = 360;
    } else if (firstCompoundingPeriodUnit === "daily-exact") {
        firstCompoundingPeriod = 365;
    }
    
    firstDataYearBase = 1 + (firstRate / firstCompoundingPeriod);
    
    for (var i = 0; i < numberFirstCashFlows; i++) {
        firstDataYearExponent[i] = firstCompoundingPeriod * (maxFirstDataYear - firstCIDataYear[i]);
        if(firstDataYearExponent[i] < 0){
            alert("Please check your data again.\nEnter the years in ascending order.\nMake sure you enter their corresponding cash flows.");
            quit();
        }
        firstDataYearFactor[i] = Math.pow(firstDataYearBase, firstDataYearExponent[i]);
        firstFutureCashFlows[i] = firstCICashFlows[i] * firstDataYearFactor[i];
        firstSumFutureCashFlows += parseFloat(firstFutureCashFlows[i]);
    }
    
        
    document.getElementById("firstFutureCashFlows").value = firstFutureCashFlows.join("\n");
        
    document.getElementById("firstSumFutureCashFlows").value = firstSumFutureCashFlows;
}