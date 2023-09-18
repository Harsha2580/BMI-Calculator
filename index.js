const btn = document.getElementById("button");
const bmiInput = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");

function solve() {
  const heightVal = document.getElementById("height").value;
  const weightVal = document.getElementById("weight").value;
  const bmiVal = Math.round(((weightVal * 10000) / (heightVal * heightVal))*100)/100;

  if(weightVal > 700 && heightVal > 300) {
    weightCondition.innerText = "Invaild Height and Weight";
  }
  else if(heightVal > 300) {
    weightCondition.innerText = "Invaild Height";
  }
  else if(weightVal > 700) {
    weightCondition.innerText = "Invaild Weight";
  }
  else {
    bmiInput.value = bmiVal;
    if (bmiVal < 18.5) {
      weightCondition.innerText = "Weight Condition: Under weight";
    } 
    else if (bmiVal >= 18.5 && bmiVal < 25) {
      weightCondition.innerText = "Weight Condition: Normal weight";
    } 
    else if (bmiVal >= 25 && bmiVal < 30) {
      weightCondition.innerText = "Weight Condition: Overweight";
    } 
    else if (bmiVal >= 30) {
      weightCondition.innerText = "Weight Condition: Obesity";
    }
  }
}

btn.addEventListener("click", solve);