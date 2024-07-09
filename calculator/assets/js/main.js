document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".form-control");
    const button = document.querySelectorAll('button');
    var cadena = [];
    var string = "";
    var result = null;

    button.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.id === "=") {
                string = cadena.join(""); // "1+1"
                result = eval(string);
                input.value = result;

                console.log(cadena)
                cadena = [];
                cadena.push(result.toString());
                console.log(result);
            } else if (e.target.id === "ac") {
                cadena = [];
                input.value = "";
            } else {
                input.value = input.value + e.target.id;
                cadena.push(e.target.id);
            }
        })
    })
})