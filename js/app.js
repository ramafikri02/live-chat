function openChat() {
    document.getElementById("myChat").style.display = "none";
    document.getElementById("myMessage").style.display = "block";
    document.getElementById("openChat").style.display = "none";
}

function openMessage() {
    document.getElementById("myMessage").style.display = "block";
    document.getElementById("myChat").style.display = "none";
}

function closeForm() {
    document.getElementById("myChat").style.display = "none";
    document.getElementById("myMessage").style.display = "none";
    document.getElementById("openChat").style.display = "block";
}

function backMessage() {
    document.getElementById("myChat").style.display = "block";
    document.getElementById("myMessage").style.display = "none";
}