// Copyright 2020 - Samuel Dominic Chukwuemeka (Samdom For Peace)
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


// First
// Bond Calculations
//Zero-Coupon Bonds
// Calculate Coupon Payment
document.getElementById("firstBond").addEventListener("submit", firstBond);

function firstBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var firstFV = parseFloat(document.getElementById("firstFV").value, 10) || 0,
        firstCouponRate = parseFloat(document.getElementById("firstCouponRate").value, 10) || 0,
        firstCouponPaymentYear,
        firstCouponRateUnit = document.getElementById("firstCouponRateUnit").value,
        firstCouponPaymentYearUnit = document.getElementById("firstCouponPaymentYearUnit").value,
        firstCouponPayment;


        if (firstCouponRateUnit === "percent") {
            firstCouponRate = firstCouponRate / 100;
        }


        if (firstCouponPaymentYearUnit === "annually") {
            firstCouponPaymentYear = 1;
        }
        else if (firstCouponPaymentYearUnit === "semiannually") {
        firstCouponPaymentYear = 2;
        }
        else if (firstCouponPaymentYearUnit === "quarterly") {
        firstCouponPaymentYear = 4;
        }
        else if (firstCouponPaymentYearUnit === "monthly") {
        firstCouponPaymentYear = 12;
        }
        else if (firstCouponPaymentYearUnit === "weekly") {
        firstCouponPaymentYear = 52;
        }
        else if (firstCouponPaymentYearUnit === "daily-ordinary") {
        firstCouponPaymentYear = 360;
        }
        else if (firstCouponPaymentYearUnit === "daily-exact") {
        firstCouponPaymentYear = 365;
        }
 

        firstCouponPayment = (firstCouponRate * firstFV) / firstCouponPaymentYear;

        document.getElementById("firstCouponPayment").innerHTML = "The coupon payment is $" + round(firstCouponPayment, 2).toFixed(2);
}


// Second
// Calculate Yield to Maturity
document.getElementById("secondBond").addEventListener("submit", secondBond);

function secondBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var secondFV = parseFloat(document.getElementById("secondFV").value, 10) || 0,
        secondBP = parseFloat(document.getElementById("secondBP").value, 10) || 0,
        secondTime = parseFloat(document.getElementById("secondTime").value, 10) || 0,
        secondTimeUnit = document.getElementById("secondTimeUnit").value,
        secondYieldMaturity;
       
        if (secondTimeUnit === "months") {
            secondTime = secondTime / 12;
        }
        else if (secondTimeUnit === "weeks") {
        secondTime = secondTime / 52;
        }
        else if (secondTimeUnit === "days_O") {
        secondTime = secondTime / 360;
        }
        else if (secondTimeUnit === "days_E") {
        secondTime = secondTime / 365;
        }

       
        secondYieldMaturity = Math.pow((secondFV/secondBP), (1 / secondTime)) - 1; 

        document.getElementById("secondYieldMaturity").innerHTML = "The yield to maturity is " + secondYieldMaturity + " OR " + round(secondYieldMaturity * 100, 4).toFixed(4) + "%";
}


// Third
// Calculate Bond Price
document.getElementById("thirdBond").addEventListener("submit", thirdBond);

function thirdBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var thirdFV = parseFloat(document.getElementById("thirdFV").value, 10) || 0,
        thirdYieldMaturity = parseFloat(document.getElementById("thirdYieldMaturity").value, 10) || 0,
        thirdTime = parseFloat(document.getElementById("thirdTime").value, 10) || 0,
        thirdYieldMaturityUnit = document.getElementById("thirdYieldMaturityUnit").value,
        thirdTimeUnit = document.getElementById("thirdTimeUnit").value,
        thirdBondPrice;

        if (thirdYieldMaturityUnit === "percent") {
            thirdYieldMaturity = thirdYieldMaturity / 100;
        }
       
        if (thirdTimeUnit === "months") {
            thirdTime = thirdTime / 12;
        }
        else if (thirdTimeUnit === "weeks") {
        thirdTime = thirdTime / 52;
        }
        else if (thirdTimeUnit === "days_O") {
        thirdTime = thirdTime / 360;
        }
        else if (thirdTimeUnit === "days_E") {
        thirdTime = thirdTime / 365;
        }

       
        thirdBondPrice = thirdFV / (Math.pow((thirdYieldMaturity + 1), thirdTime)); 

        document.getElementById("thirdBondPrice").innerHTML = "The bond price is $" + round(thirdBondPrice, 2).toFixed(2);
}


// Fourth
// Calculate Face Value
document.getElementById("fourthBond").addEventListener("submit", fourthBond);

function fourthBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var fourthBP = parseFloat(document.getElementById("fourthBP").value, 10) || 0,
        fourthYieldMaturity = parseFloat(document.getElementById("fourthYieldMaturity").value, 10) || 0,
        fourthTime = parseFloat(document.getElementById("fourthTime").value, 10) || 0,
        fourthYieldMaturityUnit = document.getElementById("fourthYieldMaturityUnit").value,
        fourthTimeUnit = document.getElementById("fourthTimeUnit").value,
        fourthFaceValue;

        if (fourthYieldMaturityUnit === "percent") {
            fourthYieldMaturity = fourthYieldMaturity / 100;
        }
       
        if (fourthTimeUnit === "months") {
            fourthTime = fourthTime / 12;
        }
        else if (fourthTimeUnit === "weeks") {
        fourthTime = fourthTime / 52;
        }
        else if (fourthTimeUnit === "days_O") {
        fourthTime = fourthTime / 360;
        }
        else if (fourthTimeUnit === "days_E") {
        fourthTime = fourthTime / 365;
        }

       
        fourthFaceValue = fourthBP * (Math.pow((fourthYieldMaturity + 1), fourthTime)); 

        document.getElementById("fourthFaceValue").innerHTML = "The bond price is $" + round(fourthFaceValue, 2).toFixed(2);
}


// Fifth
// Calculate Time
document.getElementById("fifthBond").addEventListener("submit", fifthBond);

function fifthBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var fifthFV = parseFloat(document.getElementById("fifthFV").value, 10) || 0,
        fifthBP = parseFloat(document.getElementById("fifthBP").value, 10) || 0,
        fifthYieldMaturity = parseFloat(document.getElementById("fifthYieldMaturity").value, 10) || 0,
        fifthYieldMaturityUnit = document.getElementById("fifthYieldMaturityUnit").value,
        fifthTime;
       
        if (fifthYieldMaturityUnit === "percent") {
            fifthYieldMaturity = fifthYieldMaturity / 100;
        }

       
        fifthTime = Math.log10(fifthFV/fifthBP) / Math.log10(fifthYieldMaturity + 1);

        document.getElementById("fifthTime").innerHTML = "The time is " + round(fifthTime, 4).toFixed(4) + " years";
}


// Sixth
// Bond Calculations
// Coupon Bonds
// Given: Given: FV, CP, YTM, m, t
// Calculate the Bond Price
document.getElementById("sixthBond").addEventListener("submit", sixthBond);

function sixthBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var sixthFV = parseFloat(document.getElementById("sixthFV").value, 10) || 0,
        sixthCP = parseFloat(document.getElementById("sixthCP").value, 10) || 0,
        sixthYieldMaturity = parseFloat(document.getElementById("sixthYieldMaturity").value, 10) || 0,
        sixthYieldMaturityUnit = document.getElementById("sixthYieldMaturityUnit").value,
        sixthTime = parseFloat(document.getElementById("sixthTime").value, 10) || 0,
        sixthTimeUnit = document.getElementById("sixthTimeUnit").value,
        sixthCouponPaymentYear,
        sixthCouponPaymentYearUnit = document.getElementById("sixthCouponPaymentYearUnit").value,
        sixthFactor,
        sixthFirstPart,
        sixthSecondPart,
        sixthThirdPart,
        sixthCouponRate,
        sixthBondPrice;

                        
        if (sixthYieldMaturityUnit === "percent") {
            sixthYieldMaturity = sixthYieldMaturity / 100;
        }

        if (sixthCouponPaymentYearUnit === "annually") {
            sixthCouponPaymentYear = 1;
        }
        else if (sixthCouponPaymentYearUnit === "semiannually") {
        sixthCouponPaymentYear = 2;
        }
        else if (sixthCouponPaymentYearUnit === "quarterly") {
        sixthCouponPaymentYear = 4;
        }
        else if (sixthCouponPaymentYearUnit === "monthly") {
        sixthCouponPaymentYear = 12;
        }
        else if (sixthCouponPaymentYearUnit === "weekly") {
        sixthCouponPaymentYear = 52;
        }
        else if (sixthCouponPaymentYearUnit === "daily-ordinary") {
        sixthCouponPaymentYear = 360;
        }
        else if (sixthCouponPaymentYearUnit === "daily-exact") {
        sixthCouponPaymentYear = 365;
        }
        
        sixthCouponRate = (sixthCP * sixthCouponPaymentYear) / sixthFV;
        
        if (sixthTimeUnit === "months") {
            sixthTime = sixthTime / 12;
        }
        else if (sixthTimeUnit === "weeks") {
        sixthTime = sixthTime / 52;
        }
        else if (sixthTimeUnit === "days_O") {
        sixthTime = sixthTime / 360;
        }
        else if (sixthTimeUnit === "days_E") {
        sixthTime = sixthTime / 365;
        }
 
        sixthFactor = Math.pow(1 + (sixthYieldMaturity / sixthCouponPaymentYear), (sixthCouponPaymentYear * sixthTime));
        
        sixthFirstPart = (sixthFV * sixthCouponRate) / sixthYieldMaturity;
        
        sixthSecondPart = 1 - (1 / sixthFactor);
        
        sixthThirdPart = sixthFV / sixthFactor;

        sixthBondPrice = sixthFirstPart * sixthSecondPart + sixthThirdPart;

        document.getElementById("sixthBondPrice").innerHTML = "The bond price is $" + round(sixthBondPrice, 2).toFixed(2);
}


// Seventh
// Given: Given: FV, CR, YTM, m, t
// Calculate the Bond Price
document.getElementById("seventhBond").addEventListener("submit", seventhBond);

function seventhBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var seventhFV = parseFloat(document.getElementById("seventhFV").value, 10) || 0,
        seventhCouponRate = parseFloat(document.getElementById("seventhCouponRate").value, 10) || 0,
        seventhCouponRateUnit = document.getElementById("seventhCouponRateUnit").value,
        seventhYieldMaturity = parseFloat(document.getElementById("seventhYieldMaturity").value, 10) || 0,
        seventhYieldMaturityUnit = document.getElementById("seventhYieldMaturityUnit").value,
        seventhTime = parseFloat(document.getElementById("seventhTime").value, 10) || 0,
        seventhTimeUnit = document.getElementById("seventhTimeUnit").value,
        seventhCouponPaymentYear,
        seventhCouponPaymentYearUnit = document.getElementById("seventhCouponPaymentYearUnit").value,
        seventhFactor,
        seventhFirstPart,
        seventhSecondPart,
        seventhThirdPart,
        seventhBondPrice;


        if (seventhCouponRateUnit === "percent") {
            seventhCouponRate = seventhCouponRate / 100;
        }
                
        if (seventhYieldMaturityUnit === "percent") {
            seventhYieldMaturity = seventhYieldMaturity / 100;
        }

        if (seventhCouponPaymentYearUnit === "annually") {
            seventhCouponPaymentYear = 1;
        }
        else if (seventhCouponPaymentYearUnit === "semiannually") {
        seventhCouponPaymentYear = 2;
        }
        else if (seventhCouponPaymentYearUnit === "quarterly") {
        seventhCouponPaymentYear = 4;
        }
        else if (seventhCouponPaymentYearUnit === "monthly") {
        seventhCouponPaymentYear = 12;
        }
        else if (seventhCouponPaymentYearUnit === "weekly") {
        seventhCouponPaymentYear = 52;
        }
        else if (seventhCouponPaymentYearUnit === "daily-ordinary") {
        seventhCouponPaymentYear = 360;
        }
        else if (seventhCouponPaymentYearUnit === "daily-exact") {
        seventhCouponPaymentYear = 365;
        }
        
        if (seventhTimeUnit === "months") {
            seventhTime = seventhTime / 12;
        }
        else if (seventhTimeUnit === "weeks") {
        seventhTime = seventhTime / 52;
        }
        else if (seventhTimeUnit === "days_O") {
        seventhTime = seventhTime / 360;
        }
        else if (seventhTimeUnit === "days_E") {
        seventhTime = seventhTime / 365;
        }
 
        seventhFactor = Math.pow(1 + (seventhYieldMaturity / seventhCouponPaymentYear), (seventhCouponPaymentYear * seventhTime));
        
        seventhFirstPart = (seventhFV * seventhCouponRate) / seventhYieldMaturity;
        
        seventhSecondPart = 1 - (1 / seventhFactor);
        
        seventhThirdPart = seventhFV / seventhFactor;

        seventhBondPrice = seventhFirstPart * seventhSecondPart + seventhThirdPart;

        document.getElementById("seventhBondPrice").innerHTML = "The bond price is $" + round(seventhBondPrice, 2).toFixed(2);
}


// Eighth
// Given: Given: FV, CP, BP, t
// Calculate Approximate Yield to Maturity, Approximate Annualized Yield to Maturity
document.getElementById("eighthBond").addEventListener("submit", eighthBond);

function eighthBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var eighthFV = parseFloat(document.getElementById("eighthFV").value, 10) || 0,
        eighthCP = parseFloat(document.getElementById("eighthCP").value, 10) || 0,
        eighthBP = parseFloat(document.getElementById("eighthBP").value, 10) || 0,
        eighthCouponPaymentYear,
        eighthCouponPaymentYearUnit = document.getElementById("eighthCouponPaymentYearUnit").value,
        eighthTime = parseFloat(document.getElementById("eighthTime").value, 10) || 0,
        eighthTimeUnit = document.getElementById("eighthTimeUnit").value,
        eighthCouponRate,
        eighthNumerator,
        eighthAnnualizedNumerator,
        eighthDenominator,
        eighthYieldMaturity,
        eighthAnnualizedYieldMaturity;

        if (eighthCouponPaymentYearUnit === "annually") {
            eighthCouponPaymentYear = 1;
        }
        else if (eighthCouponPaymentYearUnit === "semiannually") {
        eighthCouponPaymentYear = 2;
        }
        else if (eighthCouponPaymentYearUnit === "quarterly") {
        eighthCouponPaymentYear = 4;
        }
        else if (eighthCouponPaymentYearUnit === "monthly") {
        eighthCouponPaymentYear = 12;
        }
        else if (eighthCouponPaymentYearUnit === "weekly") {
        eighthCouponPaymentYear = 52;
        }
        else if (eighthCouponPaymentYearUnit === "daily-ordinary") {
        eighthCouponPaymentYear = 360;
        }
        else if (eighthCouponPaymentYearUnit === "daily-exact") {
        eighthCouponPaymentYear = 365;
        }
        

        if (eighthTimeUnit === "months") {
            eighthTime = eighthTime / 12;
        }
        else if (eighthTimeUnit === "weeks") {
        eighthTime = eighthTime / 52;
        }
        else if (eighthTimeUnit === "days_O") {
        eighthTime = eighthTime / 360;
        }
        else if (eighthTimeUnit === "days_E") {
        eighthTime = eighthTime / 365;
        }
        
        
        eighthCouponRate = (eighthCP * eighthCouponPaymentYear) / eighthFV;

        eighthNumerator = eighthTime * eighthCouponRate * eighthFV + eighthFV - eighthBP;
        
        eighthAnnualizedNumerator = eighthCouponPaymentYear * (eighthTime * eighthCouponRate * eighthFV + eighthFV - eighthBP);
        
        eighthDenominator = eighthTime * (eighthFV + eighthBP);
        
        eighthYieldMaturity = eighthNumerator / eighthDenominator; 
        
        eighthAnnualizedYieldMaturity = eighthAnnualizedNumerator / eighthDenominator; 
        
        document.getElementById("eighthYieldMaturity").innerHTML = "The approximate yield to maturity is " + eighthYieldMaturity + " OR " + round(eighthYieldMaturity * 100, 4).toFixed(4) + "%";
        
        document.getElementById("eighthAnnualizedYieldMaturity").innerHTML = "The approximate annualized yield to maturity is " + eighthAnnualizedYieldMaturity + " OR " + round(eighthAnnualizedYieldMaturity * 100, 4).toFixed(4) + "%";
}


// Ninth
// Given: Given: FV, CP, BP, m, t
// Calculate the Approximate Yield to Maturity, Approximate Annualized Yield to Maturity
document.getElementById("ninthBond").addEventListener("submit", ninthBond);

function ninthBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var ninthFV = parseFloat(document.getElementById("ninthFV").value, 10) || 0,
        ninthCouponRate = parseFloat(document.getElementById("ninthCouponRate").value, 10) || 0,
        ninthCouponRateUnit = document.getElementById("ninthCouponRateUnit").value,
        ninthBP = parseFloat(document.getElementById("ninthBP").value, 10) || 0,
        ninthTime = parseFloat(document.getElementById("ninthTime").value, 10) || 0,
        ninthTimeUnit = document.getElementById("ninthTimeUnit").value,
        ninthCouponPaymentYear,
        ninthCouponPaymentYearUnit = document.getElementById("ninthCouponPaymentYearUnit").value,
        ninthNumerator,
        ninthAnnualizedNumerator,
        ninthDenominator,
        ninthYieldMaturity,
        ninthAnnualizedYieldMaturity;


        if (ninthCouponRateUnit === "percent") {
            ninthCouponRate = ninthCouponRate / 100;
        }
                
        if (ninthCouponPaymentYearUnit === "annually") {
            ninthCouponPaymentYear = 1;
        }
        else if (ninthCouponPaymentYearUnit === "semiannually") {
        ninthCouponPaymentYear = 2;
        }
        else if (ninthCouponPaymentYearUnit === "quarterly") {
        ninthCouponPaymentYear = 4;
        }
        else if (ninthCouponPaymentYearUnit === "monthly") {
        ninthCouponPaymentYear = 12;
        }
        else if (ninthCouponPaymentYearUnit === "weekly") {
        ninthCouponPaymentYear = 52;
        }
        else if (ninthCouponPaymentYearUnit === "daily-ordinary") {
        ninthCouponPaymentYear = 360;
        }
        else if (ninthCouponPaymentYearUnit === "daily-exact") {
        ninthCouponPaymentYear = 365;
        }
        
        if (ninthTimeUnit === "months") {
            ninthTime = ninthTime / 12;
        }
        else if (ninthTimeUnit === "weeks") {
        ninthTime = ninthTime / 52;
        }
        else if (ninthTimeUnit === "days_O") {
        ninthTime = ninthTime / 360;
        }
        else if (ninthTimeUnit === "days_E") {
        ninthTime = ninthTime / 365;
        }
 
        ninthNumerator = ninthTime * ninthCouponRate * ninthFV + ninthFV - ninthBP;
        
        ninthAnnualizedNumerator = ninthCouponPaymentYear * (ninthTime * ninthCouponRate * ninthFV + ninthFV - ninthBP);
        
        ninthDenominator = ninthTime * (ninthFV + ninthBP);
        
        ninthYieldMaturity = ninthNumerator / ninthDenominator; 
        
        ninthAnnualizedYieldMaturity = ninthAnnualizedNumerator / ninthDenominator; 
        
        document.getElementById("ninthYieldMaturity").innerHTML = "The approximate yield to maturity is " + ninthYieldMaturity + " OR " + round(ninthYieldMaturity * 100, 4).toFixed(4) + "%";
        
        document.getElementById("ninthAnnualizedYieldMaturity").innerHTML = "The approximate annualized yield to maturity is " + ninthAnnualizedYieldMaturity + " OR " +  round(ninthAnnualizedYieldMaturity * 100, 4).toFixed(4) + "%";
}



// Tenth
// Given: Given: FV, CR, BP, m, t
// Calculate the Yield to Maturity, Annualized Yield to Maturity
document.getElementById("tenthBond").addEventListener("submit", tenthBond);

function tenthBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var tenthFV = parseFloat(document.getElementById("tenthFV").value, 10) || 0,
        tenthCouponRate = parseFloat(document.getElementById("tenthCouponRate").value, 10) || 0,
        tenthCouponRateUnit = document.getElementById("tenthCouponRateUnit").value,
        tenthBP = parseFloat(document.getElementById("tenthBP").value, 10) || 0,
        tenthTime = parseFloat(document.getElementById("tenthTime").value, 10) || 0,
        tenthTimeUnit = document.getElementById("tenthTimeUnit").value,
        tenthCouponPayment,
        tenthCouponPaymentYear,
        tenthCouponPaymentYearUnit = document.getElementById("tenthCouponPaymentYearUnit").value,
        tenthYieldMaturity,
        tenthAnnualizedYieldMaturity;


        if (tenthCouponRateUnit === "percent") {
            tenthCouponRate = tenthCouponRate / 100;
        }
                
        if (tenthCouponPaymentYearUnit === "annually") {
            tenthCouponPaymentYear = 1;
        }
        else if (tenthCouponPaymentYearUnit === "semiannually") {
        tenthCouponPaymentYear = 2;
        }
        else if (tenthCouponPaymentYearUnit === "quarterly") {
        tenthCouponPaymentYear = 4;
        }
        else if (tenthCouponPaymentYearUnit === "monthly") {
        tenthCouponPaymentYear = 12;
        }
        else if (tenthCouponPaymentYearUnit === "weekly") {
        tenthCouponPaymentYear = 52;
        }
        else if (tenthCouponPaymentYearUnit === "daily-ordinary") {
        tenthCouponPaymentYear = 360;
        }
        else if (tenthCouponPaymentYearUnit === "daily-exact") {
        tenthCouponPaymentYear = 365;
        }
        
        if (tenthTimeUnit === "months") {
            tenthTime = tenthTime / 12;
        }
        else if (tenthTimeUnit === "weeks") {
        tenthTime = tenthTime / 52;
        }
        else if (tenthTimeUnit === "days_O") {
        tenthTime = tenthTime / 360;
        }
        else if (tenthTimeUnit === "days_E") {
        tenthTime = tenthTime / 365;
        }


        tenthCouponPayment = (tenthCouponRate * tenthFV) / tenthCouponPaymentYear;
 
        tenthYieldMaturity = formulajs.RATE(tenthCouponPaymentYear * tenthTime, tenthCouponPayment, -1 * tenthBP, tenthFV);
        
        tenthAnnualizedYieldMaturity = tenthYieldMaturity * tenthCouponPaymentYear; 
        
        document.getElementById("tenthYieldMaturity").innerHTML = "The yield to maturity is " + tenthYieldMaturity + " OR " + round(tenthYieldMaturity * 100, 4).toFixed(4) + "%";
        
        document.getElementById("tenthAnnualizedYieldMaturity").innerHTML = "The annualized yield to maturity is " + tenthAnnualizedYieldMaturity + " OR " +  round(tenthAnnualizedYieldMaturity * 100, 4).toFixed(4) + "%";
}


// Eleventh
// Given: Given: FV, CP, BP, t
// Calculate Yield to Maturity, Annualized Yield to Maturity
document.getElementById("eleventhBond").addEventListener("submit", eleventhBond);

function eleventhBond(event) {
    event.preventDefault();
    event.stopPropagation();

    var eleventhFV = parseFloat(document.getElementById("eleventhFV").value, 10) || 0,
        eleventhCP = parseFloat(document.getElementById("eleventhCP").value, 10) || 0,
        eleventhBP = parseFloat(document.getElementById("eleventhBP").value, 10) || 0,
        eleventhCouponPaymentYear,
        eleventhCouponPaymentYearUnit = document.getElementById("eleventhCouponPaymentYearUnit").value,
        eleventhTime = parseFloat(document.getElementById("eleventhTime").value, 10) || 0,
        eleventhTimeUnit = document.getElementById("eleventhTimeUnit").value,
        eleventhYieldMaturity,
        eleventhAnnualizedYieldMaturity;

        if (eleventhCouponPaymentYearUnit === "annually") {
            eleventhCouponPaymentYear = 1;
        }
        else if (eleventhCouponPaymentYearUnit === "semiannually") {
        eleventhCouponPaymentYear = 2;
        }
        else if (eleventhCouponPaymentYearUnit === "quarterly") {
        eleventhCouponPaymentYear = 4;
        }
        else if (eleventhCouponPaymentYearUnit === "monthly") {
        eleventhCouponPaymentYear = 12;
        }
        else if (eleventhCouponPaymentYearUnit === "weekly") {
        eleventhCouponPaymentYear = 52;
        }
        else if (eleventhCouponPaymentYearUnit === "daily-ordinary") {
        eleventhCouponPaymentYear = 360;
        }
        else if (eleventhCouponPaymentYearUnit === "daily-exact") {
        eleventhCouponPaymentYear = 365;
        }
        

        if (eleventhTimeUnit === "months") {
            eleventhTime = eleventhTime / 12;
        }
        else if (eleventhTimeUnit === "weeks") {
        eleventhTime = eleventhTime / 52;
        }
        else if (eleventhTimeUnit === "days_O") {
        eleventhTime = eleventhTime / 360;
        }
        else if (eleventhTimeUnit === "days_E") {
        eleventhTime = eleventhTime / 365;
        }
        
        eleventhYieldMaturity = formulajs.RATE(eleventhCouponPaymentYear * eleventhTime, eleventhCP, -1 * eleventhBP, eleventhFV);
        
        eleventhAnnualizedYieldMaturity = eleventhYieldMaturity * eleventhCouponPaymentYear; 
        
        document.getElementById("eleventhYieldMaturity").innerHTML = "The yield to maturity is " + eleventhYieldMaturity + " OR " + round(eleventhYieldMaturity * 100, 4).toFixed(4) + "%";
        
        document.getElementById("eleventhAnnualizedYieldMaturity").innerHTML = "The annualized yield to maturity is " + eleventhAnnualizedYieldMaturity + " OR " + round(eleventhAnnualizedYieldMaturity * 100, 4).toFixed(4) + "%";
}