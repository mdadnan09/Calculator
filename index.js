let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (key === "Escape") {
        screen.value = '';
    }

    if (key === "Enter" || key === "=") {
        calculate();
    }
});
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screen.value = '';
        }
        else if (buttonText == '=') {
            calculate();
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

calculate = () => {
    try {
        const answer = eval(screen.value);
        screen.value = answer;
    } catch (error) {
        screen.value = "Invalid Expression";
    }
};

