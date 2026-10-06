$(document).ready(function () {
    function isValidEmail(email) {
        var parts = email.split("@");

        // Phải có đúng 1 dấu @
        if (parts.length !== 2) {
            return false;
        }

        var account = parts[0];
        var domain = parts[1];

        if (account === "" || domain === "") {
            return false;
        }

        // Phần account có nhiều nhất 1 dấu chấm
        var accountDots = (account.match(/\./g) || []).length;
        if (accountDots > 1 || account.startsWith(".") || account.endsWith(".")) {
            return false;
        }

        // Không nhận khoảng trắng/ký tự bất hợp lệ cơ bản
        if (!/^[A-Za-z0-9._%+-]+$/.test(account)) {
            return false;
        }

        // Domain phải có ít nhất 1 dấu chấm
        if (domain.indexOf(".") === -1) {
            return false;
        }

        var domainParts = domain.split(".");
        if (domainParts.some(function (part) { return part === ""; })) {
            return false;
        }

        return domainParts.every(function (part) {
            return /^[A-Za-z0-9-]+$/.test(part) &&
                   !part.startsWith("-") &&
                   !part.endsWith("-");
        });
    }

    function isValidBirthday(value) {
        // Hỗ trợ mm/dd/yyyy hoặc mm-dd-yyyy
        var match = value.match(/^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/);

        if (!match) {
            return false;
        }

        var month = parseInt(match[1], 10);
        var day = parseInt(match[3], 10);
        var year = parseInt(match[4], 10);
        var currentYear = new Date().getFullYear();

        if (month < 1 || month > 12 || year >= currentYear || year < 1) {
            return false;
        }

        var daysInMonth = new Date(year, month, 0).getDate();

        return day >= 1 && day <= daysInMonth;
    }

    $("#clearBtn").on("click", function () {
        $("#registerForm")[0].reset();
        $("#errors").empty();
    });

    $("#registerForm").on("submit", function (event) {
        event.preventDefault();

        var errors = [];

        var name = $("#name").val().trim();
        var sex = $('input[name="sex"]:checked').val();
        var email = $("#email").val().trim();
        var birthday = $("#birthday").val().trim();
        var address = $("#address").val().trim();
        var city = $("#city").val().trim();
        var region = $("#region").val();
        var zip = $("#zip").val().trim();

        if (name === "") {
            errors.push("Họ tên không được để trống.");
        }

        if (!sex) {
            errors.push("Vui lòng chọn giới tính.");
        }

        if (email === "") {
            errors.push("Email không được để trống.");
        } else if (!isValidEmail(email)) {
            errors.push("Email không đúng yêu cầu của đề.");
        }

        if (birthday === "") {
            errors.push("Ngày sinh không được để trống.");
        } else if (!isValidBirthday(birthday)) {
            errors.push("Ngày sinh phải ở dạng mm/dd/yyyy hoặc mm-dd-yyyy, là ngày hợp lệ và năm phải nhỏ hơn năm hiện tại.");
        }

        if (address === "") {
            errors.push("Địa chỉ không được để trống.");
        }

        if (city === "") {
            errors.push("Thành phố không được để trống.");
        }

        if (region === "") {
            errors.push("Vui lòng chọn khu vực.");
        }

        if (!/^\d{5}$/.test(zip)) {
            errors.push("ZIP code phải có đúng 5 chữ số.");
        }

        if (errors.length > 0) {
            var list = $("<ul></ul>");

            errors.forEach(function (error) {
                $("<li></li>").text(error).appendTo(list);
            });

            $("#errors")
                .empty()
                .append($("<strong></strong>").text("Dữ liệu chưa hợp lệ:"))
                .append(list);

            return;
        }

        $("#errors").empty();
        alert("Thông tin hợp lệ. Hoàn tất đăng ký!");
    });
});
