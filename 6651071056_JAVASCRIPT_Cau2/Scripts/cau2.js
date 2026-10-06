$(document).ready(function () {
    $("#form1").on("submit", function (event) {
        event.preventDefault();

        var fname = $(this).find('[name="fname"]').val().trim();
        var lname = $(this).find('[name="lname"]').val().trim();

        alert("Họ và tên: " + fname + " " + lname);
    });
});
