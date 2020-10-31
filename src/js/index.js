const income = (data) => {
  // initialise earnings to 0
  let total = 0;
  let overtime = 0;
  let earnings = 0;

  console.log(data);
  if (data.hours <= 4) {
    earnings = data.hours * 1000;
    total = earnings;
  }
  if (data.hours > 4) {
    earnings = 4 * 1000;
    overtime = (data.hours-4) * 200;
    total = (4 * 1000) + overtime;
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
