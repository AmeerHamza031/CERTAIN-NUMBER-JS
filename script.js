calculate = () => {
    const number = document.getElementById("number").value;
    const output = document.getElementById("output");
    if (number == '' || isNaN(number)) {
        output.innerText = "please fill the field";
    } else {
        const next = (Math.floor(number) + 1);

        output.innerText = "Number Next To " +
            number + " " + "is" + " " + next + ".";
    }
}