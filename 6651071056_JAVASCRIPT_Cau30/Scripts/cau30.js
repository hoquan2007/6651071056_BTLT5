function insert_Row() {
    var table = document.getElementById("sampleTable");

    var newRow = table.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = "New cell1";
    cell2.innerHTML = "New cell2";
}
