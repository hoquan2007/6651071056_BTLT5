function getFormvalue() {
    var form = document.getElementById("form1");

    var fname = form.elements["fname"].value;
    var lname = form.elements["lname"].value;

    alert("Họ và tên: " + fname + " " + lname);

    return false;
}
