function removecolor() {
    var colorSelect = document.getElementById("colorSelect");
    var index = colorSelect.selectedIndex;

    if (index >= 0) {
        colorSelect.remove(index);
    }
}
