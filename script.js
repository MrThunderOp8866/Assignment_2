document.getElementById("sendButton").addEventListener("click", userForm);

function userForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var membership = document.querySelector('input[name="membership"]:checked').value;

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <p>Full Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <p>${city}, ${province}</p>
        <p>Membership: ${membership}</p>
    `;
}


document.getElementById("calculateButton").addEventListener("click", myExcelFuns);

function myExcelFuns() {
    var numberStr = document.getElementById("numbers").value.trim();

    if (numberStr === '') {
        alert("Please enter numbers with spaces between each number.");
    } else {
        var numberArr = numberStr.split(' ');
        var finalNumericArray = [];

        for (var i = 0; i < numberArr.length; i++) {
            var currentNumber = parseFloat(numberArr[i]);
            if (!isNaN(currentNumber)) {
                finalNumericArray.push(currentNumber);
            }
        }

        var result;
        if (document.getElementById("sum").checked) {
            result = finalNumericArray.reduce((a, b) => a + b, 0);
        } else if (document.getElementById("avg").checked) {
            var total = finalNumericArray.reduce((a, b) => a + b, 0);
            result = total / finalNumericArray.length;
        } else if (document.getElementById("max").checked) {
            result = Math.max(...finalNumericArray);
        } else if (document.getElementById("min").checked) {
            result = Math.min(...finalNumericArray);
        }

        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `<p>Result: ${result}</p>`;
    }
}