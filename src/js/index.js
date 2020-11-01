const income = (data) => {
  // initialise earnings to 0
  let total = 0;
  let overtime = 0;
  let earnings = 0;

  console.log(data);
  // earnings when hours worked is less than or equal to 4
  if (data.hours <= 4) {
    earnings = data.hours * 1000;
    total = earnings;
    document.getElementById("warning-msg").style.display = "none";
  }

  // earnings when hours worked is greater than four
  if (data.hours > 4 && data.hours <= 24) {
    earnings = data.hours * 1000;
    overtime = (data.hours - 4) * 200;
    total = earnings + overtime;
    document.getElementById("warning-msg").style.display = "none";
  }

  // throw error when hours worked is more than 24hours
  if (data.hours > 24) {
    document.getElementById("warning-msg").style.display = "block";
  }

  return { earnings, overtime, total };
};

// get input data
function getData(e) {
  e.preventDefault();

  var hours = parseFloat(document.getElementById("hours").value);
  // var extraHours = parseFloat(document.getElementById("extra-hours").value);

  let data = {
    hours: hours,
    //  extraHours:extraHours,
  };

  // assign result of income calculation to result variable
  var result = income(data);

  console.log(result);
  document.getElementById("earnings").innerHTML = result.earnings.toFixed(2);
  document.getElementById("overtime").innerHTML = result.overtime.toFixed(2);
  document.getElementById("total-earnings").innerHTML = result.total.toFixed(2);
}

// onsubmit of the form call the getData function
document
  .getElementById("income-calculator")
  .addEventListener("submit", getData);
