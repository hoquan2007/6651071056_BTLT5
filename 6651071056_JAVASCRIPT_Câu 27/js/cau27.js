function deleteRow(button) {
    button.closest("tr").remove();
    updateSTT();
}

function updateSTT() {
    document.querySelectorAll("#studentTable tbody tr").forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });
}