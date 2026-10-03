function calculateBill() {
    const selected = document.querySelectorAll('input[name="item"]:checked');
    let total = 0;
    let html = "<h3>Các món đã dùng:</h3><table><tr><th>Món</th><th>Giá</th></tr>";

    selected.forEach(item => {
        const price = Number(item.dataset.price);
        total += price;
        html += "<tr><td>" + item.value + "</td><td>" +
            price.toLocaleString("vi-VN") + "đ</td></tr>";
    });

    const surcharge = document.getElementById("night").checked ? total * 0.1 : 0;
    const finalTotal = total + surcharge;

    html += "<tr><td>Tổng tiền món</td><td>" +
        total.toLocaleString("vi-VN") + "đ</td></tr>";

    if (surcharge > 0) {
        html += "<tr><td>Phụ thu ban đêm 10%</td><td>" +
            surcharge.toLocaleString("vi-VN") + "đ</td></tr>";
    }

    html += "<tr><th>Thành tiền</th><th>" +
        finalTotal.toLocaleString("vi-VN") + "đ</th></tr></table>";

    document.getElementById("result").innerHTML = html;
}