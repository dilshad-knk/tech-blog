// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Show the modal when the page loads
    showModal();
});

function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
