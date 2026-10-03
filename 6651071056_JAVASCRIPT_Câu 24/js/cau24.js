function findWeekday() {
    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);
    const date = new Date(year, month - 1, day);

    if (date.getFullYear() !== year || date.getMonth() !== month - 1 ||
        date.getDate() !== day) {
        document.getElementById("result").textContent = "Ngày tháng năm không hợp lệ.";
        return;
    }

    const weekdays = ["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư",
        "Thứ Năm","Thứ Sáu","Thứ Bảy"];

    document.getElementById("result").textContent =
        weekdays[date.getDay()] + " - " + day + "/" + month + "/" + year;
}