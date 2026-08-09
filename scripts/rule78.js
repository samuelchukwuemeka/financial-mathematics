// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// 
// https://samuelchukwuemeka.github.io/financial-mathematics/
// 

"use strict";

// Quotes
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}

// https://stackoverflow.com/questions/4652468/is-there-a-javascript-function-that-reduces-a-fraction
// Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
function simplify(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
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


// Rule of 78 Calculations
// 1st: Given LA, ONMP, OMP, ANMP; Calculate other details
document.getElementById("firstRule78").addEventListener("submit", firstRule78);

function firstRule78(event) {
    event.preventDefault();

    var firstLA = parseFloat(document.getElementById("firstLA").value, 10) || 0,
        firstONMP = parseFloat(document.getElementById("firstONMP").value, 10) || 0,
        firstOMP = parseFloat(document.getElementById("firstOMP").value, 10) || 0,
        firstANMP = parseFloat(document.getElementById("firstANMP").value, 10) || 0,
        firstTP,
        firstTI,
        firstk,
        firstUI,
        firstNumerator,
        firstDenominator,
        firstRefundFraction = [],
        firstRFnumerator,
        firstRFdenominator,
        firstRF,
        firstLAR;

        firstTP = firstONMP * firstOMP;
        
        firstTI = firstTP - firstLA;
        
        firstk = firstONMP - firstANMP;
        
        firstUI = (firstTI * firstk * (firstk + 1)) / (firstONMP * (firstONMP + 1));
        
        firstNumerator = (firstk / 2) * (1 + firstk);
        
        firstDenominator = (firstONMP / 2) * (1 + firstONMP);
        
        firstRefundFraction = simplify(firstNumerator, firstDenominator);
        
        firstRFnumerator = firstRefundFraction[0];
        
        firstRFdenominator = firstRefundFraction[1];
        
        firstRF = firstRFnumerator / firstRFdenominator;
        
        firstLAR = (firstLA * firstUI) / firstTI;

        document.getElementById("firstTP").value = round(firstTP, 2).toFixed(2);

        document.getElementById("firstTI").value = round(firstTI, 2).toFixed(2);
        
        document.getElementById("firstk").value = firstk;
        
        document.getElementById("firstUI").value = round(firstUI, 2).toFixed(2);
                               
        document.getElementById("firstRFnumerator").value = firstRFnumerator;
        
        document.getElementById("firstRFdenominator").value = firstRFdenominator;
        
        document.getElementById("firstRF").value = firstRF;
        
        document.getElementById("firstLAR").value = round(firstLAR, 2).toFixed(2);
}


// 2nd: Given TI, ONMP, ANMP; Calculate other details
document.getElementById("secondRule78").addEventListener("submit", secondRule78);

function secondRule78(event) {
    event.preventDefault();

    var secondTI = parseFloat(document.getElementById("secondTI").value, 10) || 0,
        secondONMP = parseFloat(document.getElementById("secondONMP").value, 10) || 0,
        secondANMP = parseFloat(document.getElementById("secondANMP").value, 10) || 0,
        secondk,
        secondUI,
        secondNumerator,
        secondDenominator,
        secondRefundFraction = [],
        secondRFnumerator,
        secondRFdenominator,
        secondRF;

                    
        secondk = secondONMP - secondANMP;
        
        secondUI = (secondTI * secondk * (secondk + 1)) / (secondONMP * (secondONMP + 1));
        
        secondNumerator = (secondk / 2) * (1 + secondk);
        
        secondDenominator = (secondONMP / 2) * (1 + secondONMP);
        
        secondRefundFraction = simplify(secondNumerator, secondDenominator);
        
        secondRFnumerator = secondRefundFraction[0];
        
        secondRFdenominator = secondRefundFraction[1];
        
        secondRF = secondRFnumerator / secondRFdenominator;
               
        
        document.getElementById("secondk").value = secondk;
        
        document.getElementById("secondUI").value = round(secondUI, 2).toFixed(2);
                      
        document.getElementById("secondRFnumerator").value = secondRFnumerator;
        
        document.getElementById("secondRFdenominator").value = secondRFdenominator;
        
        document.getElementById("secondRF").value = secondRF;
}


// 3rd: Given TI, ONMP, k; Calculate other details
document.getElementById("thirdRule78").addEventListener("submit", thirdRule78);

function thirdRule78(event) {
    event.preventDefault();

    var thirdTI = parseFloat(document.getElementById("thirdTI").value, 10) || 0,
        thirdONMP = parseFloat(document.getElementById("thirdONMP").value, 10) || 0,
        thirdk = parseFloat(document.getElementById("thirdk").value, 10) || 0,
        thirdUI,
        thirdNumerator,
        thirdDenominator,
        thirdRefundFraction = [],
        thirdRFnumerator,
        thirdRFdenominator,
        thirdRF;
                    
        
        thirdUI = (thirdTI * thirdk * (thirdk + 1)) / (thirdONMP * (thirdONMP + 1));
        
        thirdNumerator = (thirdk / 2) * (1 + thirdk);
        
        thirdDenominator = (thirdONMP / 2) * (1 + thirdONMP);
        
        thirdRefundFraction = simplify(thirdNumerator, thirdDenominator);
        
        thirdRFnumerator = thirdRefundFraction[0];
        
        thirdRFdenominator = thirdRefundFraction[1];
        
        thirdRF = thirdRFnumerator / thirdRFdenominator;
               
                
        document.getElementById("thirdUI").value = round(thirdUI, 2).toFixed(2);
                      
        document.getElementById("thirdRFnumerator").value = thirdRFnumerator;
        
        document.getElementById("thirdRFdenominator").value = thirdRFdenominator;
        
        document.getElementById("thirdRF").value = thirdRF;
}


// 4th: Given ONMP, k; Calculate other details
document.getElementById("fourthRule78").addEventListener("submit", fourthRule78);

function fourthRule78(event) {
    event.preventDefault();

    var fourthONMP = parseFloat(document.getElementById("fourthONMP").value, 10) || 0,
        fourthk = parseFloat(document.getElementById("fourthk").value, 10) || 0,
        fourthNumerator,
        fourthDenominator,
        fourthRefundFraction = [],
        fourthRFnumerator,
        fourthRFdenominator,
        fourthRF;
                    
                       
        fourthNumerator = (fourthk / 2) * (1 + fourthk);
        
        fourthDenominator = (fourthONMP / 2) * (1 + fourthONMP);
        
        fourthRefundFraction = simplify(fourthNumerator, fourthDenominator);
        
        fourthRFnumerator = fourthRefundFraction[0];
        
        fourthRFdenominator = fourthRefundFraction[1]; 
        
        fourthRF = fourthRFnumerator / fourthRFdenominator;
       
                      
        document.getElementById("fourthRFnumerator").value = fourthRFnumerator;
        
        document.getElementById("fourthRFdenominator").value = fourthRFdenominator;
        
        document.getElementById("fourthRF").value = fourthRF;
}


// 5th: Given ONMP, ANMP; Calculate other details
document.getElementById("fifthRule78").addEventListener("submit", fifthRule78);

function fifthRule78(event) {
    event.preventDefault();

    var fifthONMP = parseFloat(document.getElementById("fifthONMP").value, 10) || 0,
        fifthANMP = parseFloat(document.getElementById("fifthANMP").value, 10) || 0,
        fifthk,
        fifthNumerator,
        fifthDenominator,
        fifthRefundFraction = [],
        fifthRFnumerator,
        fifthRFdenominator,
        fifthRF;
        
        fifthk = fifthONMP - fifthANMP;
                       
        fifthNumerator = (fifthk / 2) * (1 + fifthk);
        
        fifthDenominator = (fifthONMP / 2) * (1 + fifthONMP);
        
        fifthRefundFraction = simplify(fifthNumerator, fifthDenominator);
        
        fifthRFnumerator = fifthRefundFraction[0];
        
        fifthRFdenominator = fifthRefundFraction[1];  
        
        fifthRF = fifthRFnumerator / fifthRFdenominator;
        
       
        document.getElementById("fifthk").value = fifthk;
                      
        document.getElementById("fifthRFnumerator").value = fifthRFnumerator;
        
        document.getElementById("fifthRFdenominator").value = fifthRFdenominator;
        
        document.getElementById("fifthRF").value = fifthRF;
}


// 6th: Given LA, ONMP, k; Calculate other details
document.getElementById("sixthRule78").addEventListener("submit", sixthRule78);

function sixthRule78(event) {
    event.preventDefault();

    var sixthLA = parseFloat(document.getElementById("sixthLA").value, 10) || 0,
        sixthONMP = parseFloat(document.getElementById("sixthONMP").value, 10) || 0,
        sixthk = parseFloat(document.getElementById("sixthk").value, 10) || 0,
        sixthNumerator,
        sixthDenominator,
        sixthRefundFraction = [],
        sixthRFnumerator,
        sixthRFdenominator,
        sixthRF,
        sixthLAR;
                    
                       
        sixthNumerator = (sixthk / 2) * (1 + sixthk);
        
        sixthDenominator = (sixthONMP / 2) * (1 + sixthONMP);
        
        sixthRefundFraction = simplify(sixthNumerator, sixthDenominator);
        
        sixthRFnumerator = sixthRefundFraction[0];
        
        sixthRFdenominator = sixthRefundFraction[1]; 
        
        sixthRF = sixthRFnumerator / sixthRFdenominator;
        
        sixthLAR = sixthLA * sixthRF;
       
                      
        document.getElementById("sixthRFnumerator").value = sixthRFnumerator;
        
        document.getElementById("sixthRFdenominator").value = sixthRFdenominator;
        
        document.getElementById("sixthRF").value = sixthRF;
        
        document.getElementById("sixthLAR").value = round(sixthLAR, 2).toFixed(2);
}


// 7th: Given LA, ONMP, ANMP; Calculate other details
document.getElementById("seventhRule78").addEventListener("submit", seventhRule78);

function seventhRule78(event) {
    event.preventDefault();

    var seventhLA = parseFloat(document.getElementById("seventhLA").value, 10) || 0,
        seventhONMP = parseFloat(document.getElementById("seventhONMP").value, 10) || 0,
        seventhANMP = parseFloat(document.getElementById("seventhANMP").value, 10) || 0,
        seventhk,
        seventhNumerator,
        seventhDenominator,
        seventhRefundFraction = [],
        seventhRFnumerator,
        seventhRFdenominator,
        seventhRF,
        seventhLAR;


        seventhk = seventhONMP - seventhANMP;                    
                       
        seventhNumerator = (seventhk / 2) * (1 + seventhk);
        
        seventhDenominator = (seventhONMP / 2) * (1 + seventhONMP);
        
        seventhRefundFraction = simplify(seventhNumerator, seventhDenominator);
        
        seventhRFnumerator = seventhRefundFraction[0];
        
        seventhRFdenominator = seventhRefundFraction[1]; 
        
        seventhRF = seventhRFnumerator / seventhRFdenominator;
        
        seventhLAR = seventhLA * seventhRF;
       
       
        document.getElementById("seventhk").value = seventhk;
                      
        document.getElementById("seventhRFnumerator").value = seventhRFnumerator;
        
        document.getElementById("seventhRFdenominator").value = seventhRFdenominator;
        
        document.getElementById("seventhRF").value = seventhRF;
        
        document.getElementById("seventhLAR").value = round(seventhLAR, 2).toFixed(2);
}