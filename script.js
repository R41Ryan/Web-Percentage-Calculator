document.addEventListener("DOMContentLoaded", function () {
  function calculatePercentage() {
    const inputNumber = Number(document.getElementById("inputNumber").value);

    const inputPercentage = Number(document.getElementById("inputPercentage").value / 100.0);

    const result = inputNumber + inputNumber * inputPercentage;

    document.getElementById("result").textContent = result;
  }

  document
    .getElementById("calculateButton")
    .addEventListener("click", calculatePercentage);
});
