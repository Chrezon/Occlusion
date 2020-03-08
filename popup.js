//popup.js

document.addEventListener('DOMContentLoaded', function () {
    var unblockButton = document.getElementById("unblock");
    var blockText = document.getElementById("block");
    blockText.style.visibility = "hidden";
    unblockButton.addEventListener('click', function () {
        blockText.style.visibility = "visible";
    })
})