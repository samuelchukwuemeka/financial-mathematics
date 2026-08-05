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


//function to calculate IRR




// Investment Decision Rules Calculations

// 1st: Given: Initial Cash Outflow, Even Cash Inflows per Period
// To Calculate: Payback Period (in years)
document.getElementById("decisionFirst").addEventListener("submit", decisionFirst);

function decisionFirst(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowFirst = parseFloat(document.getElementById("cashOutflowFirst").value, 10) || 0,
        evenCashInflowFirst = parseFloat(document.getElementById("evenCashInflowFirst").value, 10) || 0,
        evenCashInflowUnitFirst = document.getElementById("evenCashInflowUnitFirst").value,
        paybackPeriodFirst;

        if (evenCashInflowUnitFirst === "year") {
            evenCashInflowFirst = evenCashInflowFirst * 1;
        } 
        if (evenCashInflowUnitFirst === "month") {
            evenCashInflowFirst = evenCashInflowFirst * 12;
        } 
        if (evenCashInflowUnitFirst === "week"){
            evenCashInflowFirst = evenCashInflowFirst * 52;
        } 
        if (evenCashInflowUnitFirst === "day_O"){
            evenCashInflowFirst = evenCashInflowFirst * 360;
        } 
        if (evenCashInflowUnitFirst == "day_E"){
            evenCashInflowFirst = evenCashInflowFirst * 365;
        }

        
        paybackPeriodFirst =  cashOutflowFirst / evenCashInflowFirst;     
        
        document.getElementById("paybackPeriodFirst").value = round(paybackPeriodFirst, 4).toFixed(4);
}


// 2nd: Given: Year, Initial Cash Outflow, Even or Uneven Cash Inflows per Period
// To Calculate: Annual Cumulative Cash Flows, Payback Period (in years)
document.getElementById("decisionSecond").addEventListener("submit", decisionSecond);

function decisionSecond(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowSecond = parseFloat(document.getElementById("cashOutflowSecond").value, 10) || 0,
        timeSecond = document.getElementById('timeSecond').value,
        timesSecond = timeSecond.split('\n'),
        sizeTimesSecond = timesSecond.length,
        cashInflowSecond = document.getElementById('cashInflowSecond').value,
        cashInflowsSecond = cashInflowSecond.split('\n'),
        sizeCashInflowsSecond = cashInflowsSecond.length,
        cashInflowValueSecond = [],
        cashInflowUnitSecond = document.getElementById("cashInflowUnitSecond").value,
        cumulativeCashFlowSecond = [],
        firstValueSecond,
        numeratorSecond,
        denominatorSecond,
        paybackPeriodSecond;

        if(sizeTimesSecond !== sizeCashInflowsSecond){
            alert("The size of the Year and the Cash Inflows must be equal.\nPlease check your data again.");
            quit();
        }

        cashInflowValueSecond = cashInflowsSecond.map(Number);


    for (var j = 0; j < sizeCashInflowsSecond; j++) {
        if (cashInflowUnitSecond === "year") {
            cashInflowValueSecond[j] = cashInflowValueSecond[j] * 1;
        }
        if (cashInflowUnitSecond === "month") {
            cashInflowValueSecond[j] = cashInflowValueSecond[j] * 12;
        }
        if (cashInflowUnitSecond === "week") {
            cashInflowValueSecond[j] = cashInflowValueSecond[j] * 52;
        }
        if (cashInflowUnitSecond === "day_O") {
            cashInflowValueSecond[j] = cashInflowValueSecond[j] * 360;
        }
        if (cashInflowUnitSecond == "day_E") {
            cashInflowValueSecond[j] = cashInflowValueSecond[j] * 365;
        }
    }

        

        cumulativeCashFlowSecond[0] = cashInflowValueSecond[0] - cashOutflowSecond;

    for (var i = 1; i < sizeCashInflowsSecond; i++) {
        cumulativeCashFlowSecond[i] = cashInflowValueSecond[i] + cumulativeCashFlowSecond[i - 1];
        firstValueSecond = cumulativeCashFlowSecond.indexOf(cumulativeCashFlowSecond.filter(n => n < 0).sort((a, b) => { return b - a })[0]);
        numeratorSecond = cumulativeCashFlowSecond[firstValueSecond];
        denominatorSecond = cashInflowValueSecond[firstValueSecond + 1];
    }

                       
        paybackPeriodSecond = (firstValueSecond + 1) + (Math.abs(numeratorSecond)/denominatorSecond);

        document.getElementById("cumulativeCashFlowSecond").value = cumulativeCashFlowSecond.join("\n");

        document.getElementById("paybackPeriodSecond").value = round(paybackPeriodSecond, 4).toFixed(4);
}



// 3rd: Given: Year, Initial Cash Outflow, Even or Uneven Cash Inflows per Period
// To Calculate: Present Value Factors, Annual Discounted Cash Flows, Annual Cumulative Discounted Cash Flows, Payback Period (in years)
document.getElementById("decisionThird").addEventListener("submit", decisionThird);

function decisionThird(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowThird = parseFloat(document.getElementById("cashOutflowThird").value, 10) || 0,
        timeThird = document.getElementById('timeThird').value,
        timesThird = timeThird.split('\n'),
        sizeTimesThird = timesThird.length,
        timesValueThird = [],
        cashInflowThird = document.getElementById('cashInflowThird').value,
        cashInflowsThird = cashInflowThird.split('\n'),
        sizeCashInflowsThird = cashInflowsThird.length,
        cashInflowValueThird = [],
        cashInflowUnitThird = document.getElementById("cashInflowUnitThird").value,
        rateThird = parseFloat(document.getElementById("rateThird").value, 10) || 0,
        rateUnitThird = document.getElementById('rateUnitThird').value,
        compoundingPeriodUnitThird = document.getElementById('compoundingPeriodUnitThird').value,
        compoundingPeriodThird,
        interestRatePeriodThird,
        presentValueFactorThird = [],
        discountedCashFlowsThird = [],
        cumulativeDiscountedCashFlowsThird = [],
        firstValueThird,
        numeratorThird,
        denominatorThird,
        paybackPeriodThird;

    if (sizeTimesThird !== sizeCashInflowsThird) {
        alert("The size of the Year and the Cash Inflows must be equal.\nPlease check your data again.");
        quit();
    }


    timesValueThird = timesThird.map(Number);

    cashInflowValueThird = cashInflowsThird.map(Number);


    for (var j = 0; j < sizeCashInflowsThird; j++) {
        if (cashInflowUnitThird === "year") {
            cashInflowValueThird[j] = cashInflowValueThird[j] * 1;
        }
        if (cashInflowUnitThird === "month") {
            cashInflowValueThird[j] = cashInflowValueThird[j] * 12;
        }
        if (cashInflowUnitThird === "week") {
            cashInflowValueThird[j] = cashInflowValueThird[j] * 52;
        }
        if (cashInflowUnitThird === "day_O") {
            cashInflowValueThird[j] = cashInflowValueThird[j] * 360;
        }
        if (cashInflowUnitThird == "day_E") {
            cashInflowValueThird[j] = cashInflowValueThird[j] * 365;
        }
    }

    if (rateUnitThird === "percent") {
        rateThird = rateThird / 100;
    }

    if (compoundingPeriodUnitThird === "annually") {
        compoundingPeriodThird = 1;
    }
    else if (compoundingPeriodUnitThird === "semiannually") {
        compoundingPeriodThird = 2;
    }
    else if (compoundingPeriodUnitThird === "quarterly") {
        compoundingPeriodThird = 4;
    }
    else if (compoundingPeriodUnitThird === "monthly") {
        compoundingPeriodThird = 12;
    }
    else if (compoundingPeriodUnitThird === "weekly") {
        compoundingPeriodThird = 52;
    }
    else if (compoundingPeriodUnitThird === "daily-ordinary") {
        compoundingPeriodThird = 360;
    }
    else if (compoundingPeriodUnitThird === "daily-exact") {
        compoundingPeriodThird = 365;
    }

    interestRatePeriodThird = rateThird / compoundingPeriodThird;

    presentValueFactorThird[0] = 1 / Math.pow((1 + interestRatePeriodThird), (compoundingPeriodThird * timesValueThird[0])); 

    discountedCashFlowsThird[0] = cashInflowValueThird[0] * presentValueFactorThird[0];

    cumulativeDiscountedCashFlowsThird[0] = discountedCashFlowsThird[0] - cashOutflowThird;

    for (var i = 1; i < sizeCashInflowsThird; i++) {
        presentValueFactorThird[i] = 1 / Math.pow((1 + interestRatePeriodThird), (compoundingPeriodThird * timesValueThird[i]));
        discountedCashFlowsThird[i] = cashInflowValueThird[i] * presentValueFactorThird[i];
        cumulativeDiscountedCashFlowsThird[i] = discountedCashFlowsThird[i] + cumulativeDiscountedCashFlowsThird[i - 1];
        firstValueThird = cumulativeDiscountedCashFlowsThird.indexOf(cumulativeDiscountedCashFlowsThird.filter(n => n < 0).sort((a, b) => { return b - a })[0]);
        numeratorThird = cumulativeDiscountedCashFlowsThird[firstValueThird];
        denominatorThird = discountedCashFlowsThird[firstValueThird + 1];
    }


    paybackPeriodThird = (firstValueThird + 1) + (Math.abs(numeratorThird) / denominatorThird);

    document.getElementById("presentValueFactorThird").value = presentValueFactorThird.join("\n");

    document.getElementById("discountedCashFlowsThird").value = discountedCashFlowsThird.join("\n");

    document.getElementById("cumulativeDiscountedCashFlowsThird").value = cumulativeDiscountedCashFlowsThird.join("\n");

    document.getElementById("paybackPeriodThird").value = round(paybackPeriodThird, 4).toFixed(4);
}



// 4th: Given: Initial Cash Outflow, Even Cash Inflows per Period, Time, Annual Discount Rate, No/Negligible Salvage Value
// To Calculate: Net Present Value
document.getElementById("decisionFourth").addEventListener("submit", decisionFourth);

function decisionFourth(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowFourth = parseFloat(document.getElementById("cashOutflowFourth").value, 10) || 0,
        evenCashInflowFourth = parseFloat(document.getElementById("evenCashInflowFourth").value, 10) || 0,
        evenCashInflowUnitFourth = document.getElementById("evenCashInflowUnitFourth").value,
        numberCompoundingPeriodsFourth,
        timeFourth = parseFloat(document.getElementById("timeFourth").value, 10) || 0,
        timeUnitFourth = document.getElementById("timeUnitFourth").value,
        discountRateFourth = parseFloat(document.getElementById("discountRateFourth").value, 10) || 0,
        discountRateUnitFourth = document.getElementById("discountRateUnitFourth").value,
        numeratorFourth,
        netPresentValueFourth;


        if (evenCashInflowUnitFourth === "year") {
            numberCompoundingPeriodsFourth = 1;
        } 
        if (evenCashInflowUnitFourth === "month") {
            numberCompoundingPeriodsFourth = 12;
        } 
        if (evenCashInflowUnitFourth === "week"){
            numberCompoundingPeriodsFourth = 52;
        } 
        if (evenCashInflowUnitFourth === "day_O"){
            numberCompoundingPeriodsFourth = 360;
        } 
        if (evenCashInflowUnitFourth == "day_E"){
            numberCompoundingPeriodsFourth = 365;
        }


        if (timeUnitFourth === "years") {
            timeFourth = timeFourth / 1;
        }
        if (timeUnitFourth === "months") {
            timeFourth = timeFourth / 12;
        }
        else if (timeUnitFourth === "weeks") {
        timeFourth = timeFourth / 52;
        }
        else if (timeUnitFourth === "days_O") {
        timeFourth = timeFourth / 360;
        }
        else if (timeUnitFourth === "days_E") {
        timeFourth = timeFourth / 365;
        }


        if (discountRateUnitFourth === "year") {
            discountRateFourth = discountRateFourth / 100;
        } 
        if (discountRateUnitFourth === "month") {
            discountRateFourth = (discountRateFourth / 100) * 12;
        } 
        if (discountRateUnitFourth === "week"){
            discountRateFourth = (discountRateFourth / 100) * 52;
        } 
        if (discountRateUnitFourth === "day_O"){
            discountRateFourth = (discountRateFourth / 100) * 360;
        } 
        if (discountRateUnitFourth == "day_E"){
            discountRateFourth = (discountRateFourth / 100) * 365;
        }

        numeratorFourth = 1 - (Math.pow(1 + (discountRateFourth / numberCompoundingPeriodsFourth), -1 * numberCompoundingPeriodsFourth * timeFourth));
        
        netPresentValueFourth = (evenCashInflowFourth * numberCompoundingPeriodsFourth * (numeratorFourth / discountRateFourth)) - cashOutflowFourth;
        
        document.getElementById("netPresentValueFourth").value = round(netPresentValueFourth, 2).toFixed(2);
}



// 5th: Given: Years, Initial Cash Outflow, Even or Uneven Cash Inflows per Period, Discount Rate, Number of Compounding Period per Year, Salvage Value
// To Calculate: Present Value Factors, Total Cash Inflows, Present Value of Cash Inflows, Net Present Value
document.getElementById("decisionFifth").addEventListener("submit", decisionFifth);

function decisionFifth(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowFifth = parseFloat(document.getElementById("cashOutflowFifth").value, 10) || 0,
        salvageValueFifth = parseFloat(document.getElementById("salvageValueFifth").value, 10) || 0,
        timeFifth = document.getElementById('timeFifth').value,
        timesFifth = timeFifth.split('\n'),
        sizeTimesFifth = timesFifth.length,
        timesValueFifth = [],
        cashInflowFifth = document.getElementById('cashInflowFifth').value,
        cashInflowsFifth = cashInflowFifth.split('\n'),
        sizeCashInflowsFifth = cashInflowsFifth.length,
        cashInflowValueFifth = [],
        cashInflowUnitFifth = document.getElementById("cashInflowUnitFifth").value,
        discountRateFifth = parseFloat(document.getElementById("discountRateFifth").value, 10) || 0,
        discountRateUnitFifth = document.getElementById('discountRateUnitFifth').value,
        compoundingPeriodUnitFifth = document.getElementById('compoundingPeriodUnitFifth').value,
        compoundingPeriodFifth,
        interestRatePeriodFifth,
        presentValueFactorFifth = [],
        totalCashInflowsFifth = [],
        presentValueCashInflowsFifth = [],
        sumPresentValueCashInflowsFifth = 0,
        netPresentValueFifth;

    if (sizeTimesFifth !== sizeCashInflowsFifth) {
        alert("The size of the Year and the Cash Inflows must be equal.\nPlease check your data again.");
        quit();
    }


    timesValueFifth = timesFifth.map(Number);

    cashInflowValueFifth = cashInflowsFifth.map(Number);


    for (var j = 0; j < sizeCashInflowsFifth; j++) {
        if (cashInflowUnitFifth === "year") {
            cashInflowValueFifth[j] = cashInflowValueFifth[j] * 1;
        }
        if (cashInflowUnitFifth === "month") {
            cashInflowValueFifth[j] = cashInflowValueFifth[j] * 12;
        }
        if (cashInflowUnitFifth === "week") {
            cashInflowValueFifth[j] = cashInflowValueFifth[j] * 52;
        }
        if (cashInflowUnitFifth === "day_O") {
            cashInflowValueFifth[j] = cashInflowValueFifth[j] * 360;
        }
        if (cashInflowUnitFifth == "day_E") {
            cashInflowValueFifth[j] = cashInflowValueFifth[j] * 365;
        }
    }


    if (discountRateUnitFifth === "year") {
        discountRateFifth = discountRateFifth / 100;
    } 
    if (discountRateUnitFifth === "month") {
        discountRateFifth = (discountRateFifth / 100) * 12;
    } 
    if (discountRateUnitFifth === "week"){
        discountRateFifth = (discountRateFifth / 100) * 52;
    } 
    if (discountRateUnitFifth === "day_O"){
        discountRateFifth = (discountRateFifth / 100) * 360;
    } 
    if (discountRateUnitFifth == "day_E"){
        discountRateFifth = (discountRateFifth / 100) * 365;
    }


    if (compoundingPeriodUnitFifth === "annually") {
        compoundingPeriodFifth = 1;
    }
    else if (compoundingPeriodUnitFifth === "semiannually") {
        compoundingPeriodFifth = 2;
    }
    else if (compoundingPeriodUnitFifth === "quarterly") {
        compoundingPeriodFifth = 4;
    }
    else if (compoundingPeriodUnitFifth === "monthly") {
        compoundingPeriodFifth = 12;
    }
    else if (compoundingPeriodUnitFifth === "weekly") {
        compoundingPeriodFifth = 52;
    }
    else if (compoundingPeriodUnitFifth === "daily-ordinary") {
        compoundingPeriodFifth = 360;
    }
    else if (compoundingPeriodUnitFifth === "daily-exact") {
        compoundingPeriodFifth = 365;
    }

    interestRatePeriodFifth = discountRateFifth / compoundingPeriodFifth;


    for (var i = 0; i < sizeCashInflowsFifth; i++) {
        presentValueFactorFifth[i] = 1 / Math.pow((1 + interestRatePeriodFifth), (compoundingPeriodFifth * timesValueFifth[i]));
        totalCashInflowsFifth[i] = cashInflowValueFifth[i];
        totalCashInflowsFifth[sizeCashInflowsFifth - 1] = cashInflowValueFifth[sizeCashInflowsFifth - 1] + salvageValueFifth;
        presentValueCashInflowsFifth[i] = totalCashInflowsFifth[i] * presentValueFactorFifth[i];
        sumPresentValueCashInflowsFifth += parseFloat(presentValueCashInflowsFifth[i]);
        netPresentValueFifth = sumPresentValueCashInflowsFifth - cashOutflowFifth;
    }


    document.getElementById("presentValueFactorFifth").value = presentValueFactorFifth.join("\n");

    document.getElementById("totalCashInflowsFifth").value = totalCashInflowsFifth.join("\n");

    document.getElementById("presentValueCashInflowsFifth").value = presentValueCashInflowsFifth.join("\n");

    document.getElementById("sumPresentValueCashInflowsFifth").value = round(sumPresentValueCashInflowsFifth, 2).toFixed(2);

    document.getElementById("netPresentValueFifth").value = round(netPresentValueFifth, 2).toFixed(2);
}



// 6th: Given: Years, Initial Cash Outflow, Even or Uneven Cash Inflows per Period, Discount Rate, Number of Compounding Period per Year, Salvage Value
// To Calculate: Present Value Factors, Total Cash Inflows, Present Value of Cash Inflows, Profitability Index
document.getElementById("decisionSixth").addEventListener("submit", decisionSixth);

function decisionSixth(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowSixth = parseFloat(document.getElementById("cashOutflowSixth").value, 10) || 0,
        salvageValueSixth = parseFloat(document.getElementById("salvageValueSixth").value, 10) || 0,
        timeSixth = document.getElementById('timeSixth').value,
        timesSixth = timeSixth.split('\n'),
        sizeTimesSixth = timesSixth.length,
        timesValueSixth = [],
        cashInflowSixth = document.getElementById('cashInflowSixth').value,
        cashInflowsSixth = cashInflowSixth.split('\n'),
        sizeCashInflowsSixth = cashInflowsSixth.length,
        cashInflowValueSixth = [],
        cashInflowUnitSixth = document.getElementById("cashInflowUnitSixth").value,
        discountRateSixth = parseFloat(document.getElementById("discountRateSixth").value, 10) || 0,
        discountRateUnitSixth = document.getElementById('discountRateUnitSixth').value,
        compoundingPeriodUnitSixth = document.getElementById('compoundingPeriodUnitSixth').value,
        compoundingPeriodSixth,
        interestRatePeriodSixth,
        presentValueFactorSixth = [],
        totalCashInflowsSixth = [],
        presentValueCashInflowsSixth = [],
        sumPresentValueCashInflowsSixth = 0,
        profitabilityIndexSixth,
        messageSixth;

    if (sizeTimesSixth !== sizeCashInflowsSixth) {
        alert("The size of the Year and the Cash Inflows must be equal.\nPlease check your data again.");
        quit();
    }


    timesValueSixth = timesSixth.map(Number);

    cashInflowValueSixth = cashInflowsSixth.map(Number);


    for (var j = 0; j < sizeCashInflowsSixth; j++) {
        if (cashInflowUnitSixth === "year") {
            cashInflowValueSixth[j] = cashInflowValueSixth[j] * 1;
        }
        if (cashInflowUnitSixth === "month") {
            cashInflowValueSixth[j] = cashInflowValueSixth[j] * 12;
        }
        if (cashInflowUnitSixth === "week") {
            cashInflowValueSixth[j] = cashInflowValueSixth[j] * 52;
        }
        if (cashInflowUnitSixth === "day_O") {
            cashInflowValueSixth[j] = cashInflowValueSixth[j] * 360;
        }
        if (cashInflowUnitSixth == "day_E") {
            cashInflowValueSixth[j] = cashInflowValueSixth[j] * 365;
        }
    }


    if (discountRateUnitSixth === "year") {
        discountRateSixth = discountRateSixth / 100;
    } 
    if (discountRateUnitSixth === "month") {
        discountRateSixth = (discountRateSixth / 100) * 12;
    } 
    if (discountRateUnitSixth === "week"){
        discountRateSixth = (discountRateSixth / 100) * 52;
    } 
    if (discountRateUnitSixth === "day_O"){
        discountRateSixth = (discountRateSixth / 100) * 360;
    } 
    if (discountRateUnitSixth == "day_E"){
        discountRateSixth = (discountRateSixth / 100) * 365;
    }


    if (compoundingPeriodUnitSixth === "annually") {
        compoundingPeriodSixth = 1;
    }
    else if (compoundingPeriodUnitSixth === "semiannually") {
        compoundingPeriodSixth = 2;
    }
    else if (compoundingPeriodUnitSixth === "quarterly") {
        compoundingPeriodSixth = 4;
    }
    else if (compoundingPeriodUnitSixth === "monthly") {
        compoundingPeriodSixth = 12;
    }
    else if (compoundingPeriodUnitSixth === "weekly") {
        compoundingPeriodSixth = 52;
    }
    else if (compoundingPeriodUnitSixth === "daily-ordinary") {
        compoundingPeriodSixth = 360;
    }
    else if (compoundingPeriodUnitSixth === "daily-exact") {
        compoundingPeriodSixth = 365;
    }

    interestRatePeriodSixth = discountRateSixth / compoundingPeriodSixth;


    for (var i = 0; i < sizeCashInflowsSixth; i++) {
        presentValueFactorSixth[i] = 1 / Math.pow((1 + interestRatePeriodSixth), (compoundingPeriodSixth * timesValueSixth[i]));
        totalCashInflowsSixth[i] = cashInflowValueSixth[i];
        totalCashInflowsSixth[sizeCashInflowsSixth - 1] = cashInflowValueSixth[sizeCashInflowsSixth - 1] + salvageValueSixth;
        presentValueCashInflowsSixth[i] = totalCashInflowsSixth[i] * presentValueFactorSixth[i];
        sumPresentValueCashInflowsSixth += parseFloat(presentValueCashInflowsSixth[i]);
        profitabilityIndexSixth = sumPresentValueCashInflowsSixth / cashOutflowSixth;
    }

    if(profitabilityIndexSixth > 1){
        messageSixth = "The profitability index is greater than 1 <br>";
        messageSixth += "This implies that the project generates value. <br>";
        messageSixth += "Ceteris paribus with all other factors, you may proceed with the project.";
    }

    if(profitabilityIndexSixth < 1){
        messageSixth = "The profitability index is less than 1 <br>";
        messageSixth += "This implies that the project destroys value. <br>";
        messageSixth += "Ceteris paribus with all other factors, you should not proceed with the project.";
    }

    if(profitabilityIndexSixth == 1){
        messageSixth = "The profitability index is less than 1 <br>";
        messageSixth += "This implies that the project break even. <br>";
        messageSixth += "Check all other factors/measures before making a decision.";
    }


    document.getElementById("presentValueFactorSixth").value = presentValueFactorSixth.join("\n");

    document.getElementById("totalCashInflowsSixth").value = totalCashInflowsSixth.join("\n");

    document.getElementById("presentValueCashInflowsSixth").value = presentValueCashInflowsSixth.join("\n");

    document.getElementById("sumPresentValueCashInflowsSixth").value = round(sumPresentValueCashInflowsSixth, 2).toFixed(2);

    document.getElementById("profitabilityIndexSixth").value = round(profitabilityIndexSixth, 5).toFixed(5);

    document.getElementById("messageSixth").innerHTML = messageSixth;
}



// 7th: Given: Cash Outflow, Present Value
// To Calculate: Net Present Value, Profitability Index
document.getElementById("decisionSeventh").addEventListener("submit", decisionSeventh);

function decisionSeventh(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowSeventh = parseFloat(document.getElementById("cashOutflowSeventh").value, 10) || 0,
        presentValueSeventh = parseFloat(document.getElementById("presentValueSeventh").value, 10) || 0,
        netPresentValueSeventh,
        profitabilityIndexSeventh,
        messageSeventh;

        netPresentValueSeventh = presentValueSeventh - cashOutflowSeventh;
        
        profitabilityIndexSeventh = presentValueSeventh / cashOutflowSeventh;

        if(profitabilityIndexSeventh > 1){
            messageSeventh = "The profitability index is greater than 1 <br>";
            messageSeventh += "This implies that the project generates value. <br>";
            messageSeventh += "Ceteris paribus with all other factors, you may proceed with the project.";
        }
    
        if(profitabilityIndexSeventh < 1){
            messageSeventh = "The profitability index is less than 1 <br>";
            messageSeventh += "This implies that the project destroys value. <br>";
            messageSeventh += "Ceteris paribus with all other factors, you should not proceed with the project.";
        }
    
        if(profitabilityIndexSeventh == 1){
            messageSeventh = "The profitability index is less than 1 <br>";
            messageSeventh += "This implies that the project break even. <br>";
            messageSeventh += "Check all other factors/measures before making a decision.";
        }
        
        document.getElementById("netPresentValueSeventh").value = round(netPresentValueSeventh, 2).toFixed(2);

        document.getElementById("profitabilityIndexSeventh").value = round(profitabilityIndexSeventh, 5).toFixed(5);

        document.getElementById("messageSeventh").innerHTML = messageSeventh;
}


// 8th: Given: Cash Outflow, Net Present Value
// To Calculate: Present Value, Profitability Index
document.getElementById("decisionEighth").addEventListener("submit", decisionEighth);

function decisionEighth(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowEighth = parseFloat(document.getElementById("cashOutflowEighth").value, 10) || 0,
        netPresentValueEighth = parseFloat(document.getElementById("netPresentValueEighth").value, 10) || 0,
        presentValueEighth,
        profitabilityIndexEighth,
        messageEighth;

        presentValueEighth = netPresentValueEighth + cashOutflowEighth;
        
        profitabilityIndexEighth = presentValueEighth / cashOutflowEighth;

        if(profitabilityIndexEighth > 1){
            messageEighth = "The profitability index is greater than 1 <br>";
            messageEighth += "This implies that the project generates value. <br>";
            messageEighth += "Ceteris paribus with all other factors, you may proceed with the project.";
        }
    
        if(profitabilityIndexEighth < 1){
            messageEighth = "The profitability index is less than 1 <br>";
            messageEighth += "This implies that the project destroys value. <br>";
            messageEighth += "Ceteris paribus with all other factors, you should not proceed with the project.";
        }
    
        if(profitabilityIndexEighth == 1){
            messageEighth = "The profitability index is less than 1 <br>";
            messageEighth += "This implies that the project break even. <br>";
            messageEighth += "Check all other factors/measures before making a decision.";
        }
        
        document.getElementById("presentValueEighth").value = round(presentValueEighth, 2).toFixed(2);

        document.getElementById("profitabilityIndexEighth").value = round(profitabilityIndexEighth, 5).toFixed(5);

        document.getElementById("messageEighth").innerHTML = messageEighth;
}



// 9th: Given: Year, Initial Cash Outflow, Even or Uneven Cash Inflows per Period
// To Calculate: Internal Rate of Return
document.getElementById("decisionNinth").addEventListener("submit", decisionNinth);

function decisionNinth(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowNinth = parseFloat(document.getElementById("cashOutflowNinth").value, 10) || 0,
        timeNinth = document.getElementById('timeNinth').value,
        timesNinth = timeNinth.split('\n'),
        sizeTimesNinth = timesNinth.length,
        cashInflowNinth = document.getElementById('cashInflowNinth').value,
        cashInflowsNinth = cashInflowNinth.split('\n'),
        sizeCashInflowsNinth = cashInflowsNinth.length,
        timesValueNinth = [],
        cashInflowValueNinth = [],
        cashInflowUnitNinth = document.getElementById("cashInflowUnitNinth").value,
        salvageValueNinth = parseFloat(document.getElementById("salvageValueNinth").value, 10) || 0,
        internalRateReturnNinth,
        internalRateReturnPercentNinth;

        if(sizeTimesNinth !== sizeCashInflowsNinth){
            alert("The size of the Year and the Cash Inflows must be equal.\nPlease check your data again.");
            quit();
        }

        
        timesValueNinth = timesNinth.map(Number);

        cashInflowValueNinth = cashInflowsNinth.map(Number);


    for (var j = 0; j < sizeCashInflowsNinth; j++) {
        if (cashInflowUnitNinth === "year") {
            cashInflowValueNinth[j] = cashInflowValueNinth[j] * 1;
        }
        if (cashInflowUnitNinth === "month") {
            cashInflowValueNinth[j] = cashInflowValueNinth[j] * 12;
        }
        if (cashInflowUnitNinth === "week") {
            cashInflowValueNinth[j] = cashInflowValueNinth[j] * 52;
        }
        if (cashInflowUnitNinth === "day_O") {
            cashInflowValueNinth[j] = cashInflowValueNinth[j] * 360;
        }
        if (cashInflowUnitNinth == "day_E") {
            cashInflowValueNinth[j] = cashInflowValueNinth[j] * 365;
        }
    }


    cashInflowValueNinth[sizeCashInflowsNinth - 1] = cashInflowValueNinth[sizeCashInflowsNinth - 1] + salvageValueNinth;

    internalRateReturnNinth = formulajs.IRR([-1 * cashOutflowNinth, ...cashInflowValueNinth]);

    internalRateReturnPercentNinth = internalRateReturnNinth * 100;

    document.getElementById("internalRateReturnNinth").value = internalRateReturnNinth;
    document.getElementById("internalRateReturnPercentNinth").value = round(internalRateReturnPercentNinth, 4).toFixed(4);
}


// 10th: Given: Years, Initial Cash Outflow, Even or Uneven Cash Inflows per Period, Finance Rate, Reinvestment Rate, Number of Compounding Period per Year, Salvage Value
// To Calculate: Future Value Factors, Terminal Cash Inflows, Future Value of Cash Inflows, Modified Internal Rate of Return
document.getElementById("decisionTenth").addEventListener("submit", decisionTenth);

function decisionTenth(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowTenth = parseFloat(document.getElementById("cashOutflowTenth").value, 10) || 0,
        salvageValueTenth = parseFloat(document.getElementById("salvageValueTenth").value, 10) || 0,
        timeTenth = document.getElementById('timeTenth').value,
        timesTenth = timeTenth.split('\n'),
        sizeTimesTenth = timesTenth.length,
        timesValueTenth = [],
        cashInflowTenth = document.getElementById('cashInflowTenth').value,
        cashInflowsTenth = cashInflowTenth.split('\n'),
        sizeCashInflowsTenth = cashInflowsTenth.length,
        cashInflowValueTenth = [],
        cashInflowUnitTenth = document.getElementById("cashInflowUnitTenth").value,
        reinvestmentRateTenth = parseFloat(document.getElementById("reinvestmentRateTenth").value, 10) || 0,
        reinvestmentRateUnitTenth = document.getElementById('reinvestmentRateUnitTenth').value,
        compoundingPeriodUnitTenth = document.getElementById('compoundingPeriodUnitTenth').value,
        compoundingPeriodTenth,
        numberCompoundingPeriodsTenth,
        interestRatePeriodTenth,
        futureValueFactorTenth = [],
        totalCashInflowsTenth = [],
        futureValueCashInflowsTenth = [],
        sumFutureValueCashInflowsTenth = 0,
        modifiedInternalRateReturnTenth,
        modifiedInternalRateReturnPercentTenth;

    if (sizeTimesTenth !== sizeCashInflowsTenth) {
        alert("The size of the Year and the Cash Inflows must be equal.\nPlease check your data again.");
        quit();
    }


    timesValueTenth = timesTenth.map(Number);

    cashInflowValueTenth = cashInflowsTenth.map(Number);


    for (var j = 0; j < sizeCashInflowsTenth; j++) {
        if (cashInflowUnitTenth === "year") {
            cashInflowValueTenth[j] = cashInflowValueTenth[j] * 1;
        }
        if (cashInflowUnitTenth === "month") {
            cashInflowValueTenth[j] = cashInflowValueTenth[j] * 12;
        }
        if (cashInflowUnitTenth === "week") {
            cashInflowValueTenth[j] = cashInflowValueTenth[j] * 52;
        }
        if (cashInflowUnitTenth === "day_O") {
            cashInflowValueTenth[j] = cashInflowValueTenth[j] * 360;
        }
        if (cashInflowUnitTenth == "day_E") {
            cashInflowValueTenth[j] = cashInflowValueTenth[j] * 365;
        }
    }


    if (reinvestmentRateUnitTenth === "year") {
        reinvestmentRateTenth = reinvestmentRateTenth / 100;
    } 
    if (reinvestmentRateUnitTenth === "month") {
        reinvestmentRateTenth = (reinvestmentRateTenth / 100) * 12;
    } 
    if (reinvestmentRateUnitTenth === "week"){
        reinvestmentRateTenth = (reinvestmentRateTenth / 100) * 52;
    } 
    if (reinvestmentRateUnitTenth === "day_O"){
        reinvestmentRateTenth = (reinvestmentRateTenth / 100) * 360;
    } 
    if (reinvestmentRateUnitTenth == "day_E"){
        reinvestmentRateTenth = (reinvestmentRateTenth / 100) * 365;
    }


    if (compoundingPeriodUnitTenth === "annually") {
        compoundingPeriodTenth = 1;
    }
    else if (compoundingPeriodUnitTenth === "semiannually") {
        compoundingPeriodTenth = 2;
    }
    else if (compoundingPeriodUnitTenth === "quarterly") {
        compoundingPeriodTenth = 4;
    }
    else if (compoundingPeriodUnitTenth === "monthly") {
        compoundingPeriodTenth = 12;
    }
    else if (compoundingPeriodUnitTenth === "weekly") {
        compoundingPeriodTenth = 52;
    }
    else if (compoundingPeriodUnitTenth === "daily-ordinary") {
        compoundingPeriodTenth = 360;
    }
    else if (compoundingPeriodUnitTenth === "daily-exact") {
        compoundingPeriodTenth = 365;
    }

    numberCompoundingPeriodsTenth = compoundingPeriodTenth * sizeTimesTenth;

    interestRatePeriodTenth = reinvestmentRateTenth / compoundingPeriodTenth;


    for (var i = 0; i < sizeCashInflowsTenth; i++) {
        timesValueTenth[i] = numberCompoundingPeriodsTenth - timesValueTenth[i];
        futureValueFactorTenth[i] = Math.pow((1 + interestRatePeriodTenth), (compoundingPeriodTenth * timesValueTenth[i]));
        totalCashInflowsTenth[i] = cashInflowValueTenth[i];
        totalCashInflowsTenth[sizeCashInflowsTenth - 1] = cashInflowValueTenth[sizeCashInflowsTenth - 1] + salvageValueTenth;
        futureValueCashInflowsTenth[i] = totalCashInflowsTenth[i] * futureValueFactorTenth[i];
        sumFutureValueCashInflowsTenth += parseFloat(futureValueCashInflowsTenth[i]);
    }

    modifiedInternalRateReturnTenth = Math.pow((sumFutureValueCashInflowsTenth / cashOutflowTenth), (1 / numberCompoundingPeriodsTenth)) - 1;
    
    modifiedInternalRateReturnPercentTenth = modifiedInternalRateReturnTenth * 100;

    document.getElementById("futureValueFactorTenth").value = futureValueFactorTenth.join("\n");

    document.getElementById("totalCashInflowsTenth").value = totalCashInflowsTenth.join("\n");

    document.getElementById("futureValueCashInflowsTenth").value = futureValueCashInflowsTenth.join("\n");

    document.getElementById("sumFutureValueCashInflowsTenth").value = round(sumFutureValueCashInflowsTenth, 2).toFixed(2);

    document.getElementById("numberCompoundingPeriodsTenth").value = numberCompoundingPeriodsTenth;

    document.getElementById("modifiedInternalRateReturnTenth").value = modifiedInternalRateReturnTenth;
    
    document.getElementById("modifiedInternalRateReturnPercentTenth").value = round(modifiedInternalRateReturnPercentTenth, 4).toFixed(4);

}