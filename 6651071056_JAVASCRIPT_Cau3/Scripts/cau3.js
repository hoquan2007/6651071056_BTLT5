$(document).ready(function () {
    $("#insertRowBtn").on("click", function () {
        var newRow = $("<tr></tr>");

        $("<td></td>").text("New cell1").appendTo(newRow);
        $("<td></td>").text("New cell2").appendTo(newRow);

        $("#sampleTable").append(newRow);
    });
});
