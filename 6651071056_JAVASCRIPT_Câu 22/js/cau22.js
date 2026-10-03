function getNumbers() {
    return {
        a: Number(document.getElementById("num1").value),
        b: Number(document.getElementById("num2").value)
    };
}

function multiply() {
    const { a, b } = getNumbers();
    document.getElementById("result").textContent = "Kết quả = " + (a * b);
}

function divide() {
    const { a, b } = getNumbers();
    document.getElementById("result").textContent =
        b === 0 ? "Không thể chia cho 0." : "Kết quả = " + (a / b);
}