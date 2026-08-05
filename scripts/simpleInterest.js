// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.finance-calculators.appspot.com
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



// Simple Interest Calculations
// Calculate Interest and Amount
document.getElementById("simpleInterestAmount").addEventListener("submit", simpleInterestAmount);

function simpleInterestAmount(event) {
    event.preventDefault();

    var principal = parseFloat(document.getElementById("principal").value, 10) || 0,
        rate = parseFloat(document.getElementById("rate").value, 10) || 0,
        time = parseFloat(document.getElementById("time").value, 10) || 0,
        rateUnit = document.getElementById("rateUnit").value,
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

        var simpleInterest = principal * rate * time;

        var amount = principal + simpleInterest;

        document.getElementById("simpleInterest").innerHTML = "The simple interest is $" + round(simpleInterest, 2).toFixed(2);

        document.getElementById("amount").innerHTML = "The amount is $" + round(amount, 2).toFixed(2);
}


// Calculate Time and Amount
document.getElementById("timeAmount").addEventListener("submit", timeAmount);

function timeAmount(event) {
    event.preventDefault();

    var tAprincipal = parseFloat(document.getElementById("tAprincipal").value, 10) || 0,
        tArate = parseFloat(document.getElementById("tArate").value, 10) || 0,
        tAinterest = parseFloat(document.getElementById("tAinterest").value, 10) || 0,
        tArateUnit = document.getElementById("tArateUnit").value;
       

        if (tArateUnit === "percent") {
            tArate = tArate / 100;
        }
       
        var tAtime = tAinterest / (tAprincipal * tArate); 

        var tAamount = tAprincipal + tAinterest;

        document.getElementById("tAtime").innerHTML = "The time is " + round(tAtime, 4).toFixed(4) + " years";

        document.getElementById("tAamount").innerHTML = "The amount is $" + round(tAamount, 2).toFixed(2);
}


// Calculate Time and Simple Interest
document.getElementById("timeInterest").addEventListener("submit", timeInterest);

function timeInterest(event) {
    event.preventDefault();

    var tIprincipal = parseFloat(document.getElementById("tIprincipal").value, 10) || 0,
        tIrate = parseFloat(document.getElementById("tIrate").value, 10) || 0,
        tIamount = parseFloat(document.getElementById("tIamount").value, 10) || 0,
        tIrateUnit = document.getElementById("tIrateUnit").value;
       

        if (tIrateUnit === "percent") {
            tIrate = tIrate / 100;
        }
        
        var tItime = (tIamount - tIprincipal) / (tIprincipal * tIrate); 

        var tIinterest = tIamount - tIprincipal;

        document.getElementById("tItime").innerHTML = "The time is " + round(tItime, 4).toFixed(4) + " years";

        document.getElementById("tIinterest").innerHTML = "The interest is $" + round(tIinterest, 2).toFixed(2);
}


// Calculate Rate and Amount
document.getElementById("rateAmount").addEventListener("submit", rateAmount);

function rateAmount(event) {
    event.preventDefault();

    var rAprincipal = parseFloat(document.getElementById("rAprincipal").value, 10) || 0,
        rAinterest = parseFloat(document.getElementById("rAinterest").value, 10) || 0,
        rAtime = parseFloat(document.getElementById("rAtime").value, 10) || 0,
        rAtimeUnit = document.getElementById("rAtimeUnit").value;
       

        if (rAtimeUnit === "months") {
            rAtime = rAtime / 12;
        }
        else if (rAtimeUnit === "weeks") {
        rAtime = rAtime / 52;
        }
        else if (rAtimeUnit === "days_O") {
        rAtime = rAtime / 360;
        }
        else if (rAtimeUnit === "days_E") {
        rAtime = rAtime / 365;
        }
       
        var rArate = (rAinterest * 100) / (rAprincipal * rAtime); 

        var rAamount = rAprincipal + rAinterest;

        document.getElementById("rArate").innerHTML = "The rate is " + round(rArate, 4).toFixed(4) + "%";

        document.getElementById("rAamount").innerHTML = "The amount is $" + round(rAamount, 2).toFixed(2);
}

// Calculate Rate and Simple Interest
document.getElementById("rateInterest").addEventListener("submit", rateInterest);

function rateInterest(event) {
    event.preventDefault();

    var rIprincipal = parseFloat(document.getElementById("rIprincipal").value, 10) || 0,
        rIamount = parseFloat(document.getElementById("rIamount").value, 10) || 0,
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
      
        var rIrate = 100 * (rIamount - rIprincipal) / (rIprincipal * rItime); 

        var rIinterest = rIamount - rIprincipal;

        document.getElementById("rIrate").innerHTML = "The rate is " + round(rIrate, 4).toFixed(4) + "%";

        document.getElementById("rIinterest").innerHTML = "The interest is $" + round(rIinterest, 2).toFixed(2);
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
      
        var pAprincipal = pAinterest / (pArate * pAtime); 

        var pAamount = pAprincipal + pAinterest;

        document.getElementById("pAprincipal").innerHTML = "The principal is $" + round(pAprincipal, 2).toFixed(2);

        document.getElementById("pAamount").innerHTML = "The amount is $" +round(pAamount, 2).toFixed(2);
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
      
        var pIprincipal = pIamount / (1 + pIrate * pItime); 

        var pIinterest = pIamount - pIprincipal;

        document.getElementById("pIprincipal").innerHTML = "The principal is $" + round(pIprincipal, 2).toFixed(2);

        document.getElementById("pIinterest").innerHTML = "The interest is $" + round(pIinterest, 2).toFixed(2);
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

        var pRrate = pRinterest / (pRprincipal * pRtime);

        document.getElementById("pRprincipal").innerHTML = "The principal is $" + round(pRprincipal, 2).toFixed(2);

        document.getElementById("pRrate").innerHTML = "The rate is " + round(pRrate, 4).toFixed(4) + "%";
}


// Given: Principal, Two Rates, Time, Interest
// Calculate Investment at each Rate, Amount
document.getElementById("investment2rates").addEventListener("submit", investment2rates);

function investment2rates(event) {
    event.preventDefault();

    var i2Rprincipal = parseFloat(document.getElementById("i2Rprincipal").value, 10) || 0,
        i2Rrate1 = parseFloat(document.getElementById("i2Rrate1").value, 10) || 0,
        i2Rrate2 = parseFloat(document.getElementById("i2Rrate2").value, 10) || 0,
        i2Rrate1Unit = document.getElementById("i2Rrate1Unit").value,
        i2Rrate2Unit = document.getElementById("i2Rrate2Unit").value,
        i2Rinterest = parseFloat(document.getElementById("i2Rinterest").value, 10) || 0,
        i2Rtime = parseFloat(document.getElementById("i2Rtime").value, 10) || 0,
        i2RtimeUnit = document.getElementById("i2RtimeUnit").value;
              
        if (i2Rrate1Unit === "percent") {
            i2Rrate1 = i2Rrate1 / 100;
        }
       
       if (i2Rrate2Unit === "percent") {
            i2Rrate2 = i2Rrate2 / 100;
        }

        if (i2RtimeUnit === "months") {
            i2Rtime = i2Rtime / 12;
        }
        else if (i2RtimeUnit === "weeks") {
        i2Rtime = i2Rtime / 52;
        }
        else if (i2RtimeUnit === "days_O") {
        i2Rtime = i2Rtime / 360;
        }
        else if (i2RtimeUnit === "days_E") {
        i2Rtime = i2Rtime / 365;
        }
       
        var i2Rprincipal1 = (i2Rinterest - (i2Rrate2 * i2Rprincipal * i2Rtime)) / (i2Rtime * (i2Rrate1 - i2Rrate2)); 
        
        var i2Rprincipal2 = i2Rprincipal - i2Rprincipal1; 

        var i2Ramount = i2Rprincipal + i2Rinterest;
        
        var i2Requation = "Equation: rate1 * investment1 * time + rate2 * time * (investment - investment1) = interest";

        document.getElementById("i2Rprincipal1").innerHTML = "The investment at " + (i2Rrate1 * 100) + "% is $" +  round(i2Rprincipal1, 2).toFixed(2);
        
        document.getElementById("i2Rprincipal2").innerHTML = "The investment at " + (i2Rrate2 * 100) + "% is $" + round(i2Rprincipal2, 2).toFixed(2);
        
        document.getElementById("i2Ramount").innerHTML = "The amount is $" + round(i2Ramount, 2).toFixed(2);
        
        document.getElementById("i2Requation").innerHTML = i2Requation;
}



// Given: Principal, Two Rates, Time, Interest
// Calculate Investment at each Rate, Amount
// One account received a gain, the other account suffered a loss
document.getElementById("investment2ratesFirst").addEventListener("submit", investment2ratesFirst);

function investment2ratesFirst(event) {
    event.preventDefault();

    var i2RprincipalFirst = parseFloat(document.getElementById("i2RprincipalFirst").value, 10) || 0,
        i2Rrate1First = parseFloat(document.getElementById("i2Rrate1First").value, 10) || 0,
        i2Rrate2First = parseFloat(document.getElementById("i2Rrate2First").value, 10) || 0,
        i2Rrate1UnitFirst = document.getElementById("i2Rrate1UnitFirst").value,
        i2Rrate2UnitFirst = document.getElementById("i2Rrate2UnitFirst").value,
        i2RinterestFirst = parseFloat(document.getElementById("i2RinterestFirst").value, 10) || 0,
        i2RtimeFirst = parseFloat(document.getElementById("i2RtimeFirst").value, 10) || 0,
        i2RtimeUnitFirst = document.getElementById("i2RtimeUnitFirst").value;
              
        if (i2Rrate1UnitFirst === "percent") {
            i2Rrate1First = i2Rrate1First / 100;
        }
       
       if (i2Rrate2UnitFirst === "percent") {
            i2Rrate2First = i2Rrate2First / 100;
        }

        if (i2RtimeUnitFirst === "months") {
            i2RtimeFirst = i2RtimeFirst / 12;
        }
        else if (i2RtimeUnitFirst === "weeks") {
        i2RtimeFirst = i2RtimeFirst / 52;
        }
        else if (i2RtimeUnitFirst === "days_O") {
        i2RtimeFirst = i2RtimeFirst / 360;
        }
        else if (i2RtimeUnitFirst === "days_E") {
        i2RtimeFirst = i2RtimeFirst / 365;
        }
       
        var i2Rprincipal1First = (i2RinterestFirst + (i2Rrate2First * i2RprincipalFirst * i2RtimeFirst)) / (i2RtimeFirst * (i2Rrate1First + i2Rrate2First)); 
        
        var i2Rprincipal2First = i2RprincipalFirst - i2Rprincipal1First; 

        var i2RamountFirst = i2RprincipalFirst + i2RinterestFirst;
        
        var i2RequationFirst = "Equation: rate1 * investment1 * time - rate2 * time * (investment - investment1) = interest";

        document.getElementById("i2Rprincipal1First").innerHTML = "The investment at " + (i2Rrate1First * 100) + "% gain is $" +  round(i2Rprincipal1First, 2).toFixed(2);
        
        document.getElementById("i2Rprincipal2First").innerHTML = "The investment at " + (i2Rrate2First * 100) + "% loss is $" +  round(i2Rprincipal2First, 2).toFixed(2);
        
        document.getElementById("i2RamountFirst").innerHTML = "The amount is $" + round(i2RamountFirst, 2).toFixed(2);
        
        document.getElementById("i2RequationFirst").innerHTML = i2RequationFirst;
}


// Given: Two Rates, Time, Interest
// Calculate Investment at each Rate, Amount
// The account with the lower rate received "some" times as much investment as the account with the higher rate
document.getElementById("investment2ratesSecond").addEventListener("submit", investment2ratesSecond);

function investment2ratesSecond(event) {
    event.preventDefault();

    var i2Rrate1Second = parseFloat(document.getElementById("i2Rrate1Second").value, 10) || 0,
        i2Rrate2Second = parseFloat(document.getElementById("i2Rrate2Second").value, 10) || 0,
        i2Rrate1UnitSecond = document.getElementById("i2Rrate1UnitSecond").value,
        i2Rrate2UnitSecond = document.getElementById("i2Rrate2UnitSecond").value,
        i2timesSecond = parseFloat(document.getElementById("i2timesSecond").value, 10) || 0,
        i2RinterestSecond = parseFloat(document.getElementById("i2RinterestSecond").value, 10) || 0,
        i2RtimeSecond = parseFloat(document.getElementById("i2RtimeSecond").value, 10) || 0,
        i2RtimeUnitSecond = document.getElementById("i2RtimeUnitSecond").value;
              
        if (i2Rrate1UnitSecond === "percent") {
            i2Rrate1Second = i2Rrate1Second / 100;
        }
       
       if (i2Rrate2UnitSecond === "percent") {
            i2Rrate2Second = i2Rrate2Second / 100;
        }

        if (i2RtimeUnitSecond === "months") {
            i2RtimeSecond = i2RtimeSecond / 12;
        }
        else if (i2RtimeUnitSecond === "weeks") {
        i2RtimeSecond = i2RtimeSecond / 52;
        }
        else if (i2RtimeUnitSecond === "days_O") {
        i2RtimeSecond = i2RtimeSecond / 360;
        }
        else if (i2RtimeUnitSecond === "days_E") {
        i2RtimeSecond = i2RtimeSecond / 365;
        }
       
        var i2Rprincipal2Second = i2RinterestSecond / (i2RtimeSecond * (i2timesSecond * i2Rrate1Second + i2Rrate2Second)); 
        
        var i2Rprincipal1Second = i2timesSecond * i2Rprincipal2Second; 
        
        var i2RprincipalSecond = i2Rprincipal1Second + i2Rprincipal2Second;

        var i2RamountSecond = i2RprincipalSecond + i2RinterestSecond;
        
        var i2RequationSecond = "Equation: 'how many times' * rate1 * investment1 * time + rate2 * investment1 * time = interest";

        document.getElementById("i2Rprincipal1Second").innerHTML = "The investment at " + (i2Rrate1Second * 100) + "% is $" +  round(i2Rprincipal1Second, 2).toFixed(2);
        
        document.getElementById("i2Rprincipal2Second").innerHTML = "The investment at " + (i2Rrate2Second * 100) + "% is $" +  round(i2Rprincipal2Second, 2).toFixed(2);
        
        document.getElementById("i2RprincipalSecond").innerHTML = "The total investment is $" + round(i2RprincipalSecond, 2).toFixed(2);
        
        document.getElementById("i2RamountSecond").innerHTML = "The amount is $" + round(i2RamountSecond, 2).toFixed(2);
        
        document.getElementById("i2RequationSecond").innerHTML = i2RequationSecond;
}


// Given: Two Rates, Time, Interest
// Calculate Investment at each Rate, Amount
// The account with the higher rate received "some" times as much investment as the account with the lower rate
document.getElementById("investment2ratesThird").addEventListener("submit", investment2ratesThird);

function investment2ratesThird(event) {
    event.preventDefault();

    var i2Rrate1Third = parseFloat(document.getElementById("i2Rrate1Third").value, 10) || 0,
        i2Rrate2Third = parseFloat(document.getElementById("i2Rrate2Third").value, 10) || 0,
        i2Rrate1UnitThird = document.getElementById("i2Rrate1UnitThird").value,
        i2Rrate2UnitThird = document.getElementById("i2Rrate2UnitThird").value,
        i2timesThird = parseFloat(document.getElementById("i2timesThird").value, 10) || 0,
        i2RinterestThird = parseFloat(document.getElementById("i2RinterestThird").value, 10) || 0,
        i2RtimeThird = parseFloat(document.getElementById("i2RtimeThird").value, 10) || 0,
        i2RtimeUnitThird = document.getElementById("i2RtimeUnitThird").value;
              
        if (i2Rrate1UnitThird === "percent") {
            i2Rrate1Third = i2Rrate1Third / 100;
        }
       
       if (i2Rrate2UnitThird === "percent") {
            i2Rrate2Third = i2Rrate2Third / 100;
        }

        if (i2RtimeUnitThird === "months") {
            i2RtimeThird = i2RtimeThird / 12;
        }
        else if (i2RtimeUnitThird === "weeks") {
        i2RtimeThird = i2RtimeThird / 52;
        }
        else if (i2RtimeUnitThird === "days_O") {
        i2RtimeThird = i2RtimeThird / 360;
        }
        else if (i2RtimeUnitThird === "days_E") {
        i2RtimeThird = i2RtimeThird / 365;
        }
       
        var i2Rprincipal2Third = i2RinterestThird / (i2RtimeThird * (i2timesThird * i2Rrate1Third + i2Rrate2Third)); 
        
        var i2Rprincipal1Third = i2timesThird * i2Rprincipal2Third; 
        
        var i2RprincipalThird = i2Rprincipal1Third + i2Rprincipal2Third;

        var i2RamountThird = i2RprincipalThird + i2RinterestThird;
        
        var i2RequationThird = "Equation: rate1 * investment1 * time + 'how many times' * rate2 * investment1 * time = interest";

        document.getElementById("i2Rprincipal1Third").innerHTML = "The investment at " + (i2Rrate1Third * 100) + "% is $" +  round(i2Rprincipal1Third, 2).toFixed(2);
        
        document.getElementById("i2Rprincipal2Third").innerHTML = "The investment at " + (i2Rrate2Third * 100) + "% is $" +  round(i2Rprincipal2Third, 2).toFixed(2);
        
        document.getElementById("i2RprincipalThird").innerHTML = "The total investment is $" + round(i2RprincipalThird, 2).toFixed(2);
        
        document.getElementById("i2RamountThird").innerHTML = "The amount is $" + round(i2RamountThird, 2).toFixed(2);
        
        document.getElementById("i2RequationThird").innerHTML = i2RequationThird;
}