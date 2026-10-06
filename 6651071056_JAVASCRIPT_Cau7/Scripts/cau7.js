$(document).ready(function () {
    $("#linkForm").on("submit", function (event) {
        event.preventDefault();

        var link = $("#linkInput").val().trim();

        if (link === "") {
            alert("Vui lòng nhập đường link.");
            return;
        }

        if (!/^https?:\/\//i.test(link)) {
            link = "https://" + link;
        }

        var agree = confirm("Bạn có muốn chuyển đến liên kết:\n" + link + " ?");

        if (agree) {
            window.location.href = link;
        }
    });
});
