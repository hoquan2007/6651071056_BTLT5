$(document).ready(function () {
    function calculate(operator) {
        var a = parseFloat($("#number1").val());
        var b = parseFloat($("#number2").val());

        if (Number.isNaN(a) || Number.isNaN(b)) {
            $("#result").val("");
            $("#message").text("Vui lòng nhập đủ hai số.");
            return;
        }

        var result;

        switch (operator) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                if (b === 0) {
                    $("#result").val("");
                    $("#message").text("Không thể chia cho 0.");
                    return;
                }
                result = a / b;
                break;
            case "^":
                result = Math.pow(a, b);
                break;
            default:
                return;
        }

        $("#result").val(result);
        $("#message").text("");
    }

    $(".operator").on("click", function () {
        $(".operator").removeClass("selected");
        $(this).addClass("selected");

        calculate($(this).data("op"));
    });
});
