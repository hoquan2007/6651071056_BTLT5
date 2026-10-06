$(document).ready(function () {
    $("#removeColorBtn").on("click", function () {
        $("#colorSelect option:selected").remove();
    });
});
