$(document).ready(function () {
    $("#countBtn").on("click", function () {
        var items = [];

        $("#mySelect option").each(function () {
            items.push($(this).text());
        });

        alert(
            "Số lượng mục: " + items.length +
            "\nCác mục: " + items.join(", ")
        );
    });
});
