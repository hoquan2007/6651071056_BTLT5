function calculateCanChi() {
    const value = document.getElementById("year").value.trim();
    const year = Number(value);

    if (value === "" || !Number.isInteger(year) || year <= 0) {
        document.getElementById("result").textContent =
            "Năm không hợp lệ. Vui lòng nhập một số nguyên dương.";
        return;
    }

    const can = ["Canh","Tân","Nhâm","Quý","Giáp","Ất","Bính","Đinh","Mậu","Kỷ"];
    const chi = ["Thân","Dậu","Tuất","Hợi","Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi"];

    document.getElementById("result").textContent =
        "Năm " + year + " là năm " + can[year % 10] + " " + chi[year % 12] + ".";
}