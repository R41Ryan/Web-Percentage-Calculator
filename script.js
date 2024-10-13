function calculatePercentage() 
{
    const inputNumber = document.getElementById("inputNumber").value;

    const inputPercentage = document.getElementById("inputPercentage").value;
    inputPercentage = inputPercentage / 100.0;

    const result = inputNumber + inputNumber * inputPercentage;

    document.getElementById("result").textContent = result;
}

document.getElementById("calculateButton").addEventListener("click", calculatePercentage);