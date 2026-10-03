function calculateSalary() {
    const name = document.getElementById("name").value;
    const salary = Number(document.getElementById("salary").value);
    const coefficient = Number(document.getElementById("coefficient").value);
    const monthlySalary = salary * coefficient;

    document.getElementById("result").textContent =
        "Nhân viên: " + name + " - Lương tháng: " +
        monthlySalary.toLocaleString("vi-VN");
}