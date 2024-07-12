document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".form-control");
    const button = document.querySelectorAll('button');
    var cadena = [];
    var string = "";
    var result = null;

    var regexPoint = /\d+./; // boolean regexp

    button.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const value = e.target.id;

            if (value === "=") {
                string = cadena.join(""); // "1+1"
                try {
                    result = eval(string); // Evaluate the expression
                    input.value = result;

                    cadena = [result.toString()]; // Reset the array with the result
                } catch (err) {
                    input.value = "Error";
                    cadena = [];
                }
            } else if (value === "ac") {
                cadena = [];
                input.value = "";
            } else if (value === "de") {
                if (input.value.length > 0) {
                    input.value = input.value.slice(0, -1);
                    cadena.pop();
                }
            } else if(value === ".") {
                const currentInput = input.value;
                const lastNumber = currentInput.split(/[\+\-\*\/]/).pop();

                if (!lastNumber.includes(".")) {
                    input.value = currentInput + ".";
                    cadena.push(".");
                }
            } else if (value === "%") {
                if (input.value.length <= 0) {
                    return;
                } else if (input.value) {
                    const currentInput = input.value; // 200*20
                    const lastNumber = currentInput.split(/[\+\-\*\/]/).pop(); // remove last number 20
                    const percentageValue = parseFloat(lastNumber / 100);

                   input.value = currentInput.slice(0, -lastNumber.length) + percentageValue;
                   cadena.splice(-lastNumber.length, lastNumber.length, + percentageValue.toString());
                }
            }   
            else {
                input.value = input.value + value;
                cadena.push(value);
            }
        })
    })


})