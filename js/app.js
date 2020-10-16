function openChat() {
    document.getElementById("myChat").style.display = "block";
    document.getElementById("logo").style.animation = "none";
    document.getElementById("content").style.animation = "none";
    document.getElementById("myChat").style.animation = "fadeInUpLeft .5s ease-in-out";
    document.getElementById("myMessage").style.display = "none";
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
    document.getElementById("myChat").style.animation = "none";
    document.getElementById("logo").style.animation = "fadeIn .3s ease-in";
    document.getElementById("content").style.animation = "fadeInUp .3s ease-in";
    document.getElementById("myMessage").style.display = "none";
}

onkeydown = function (e) {
    if (e.keyCode == e.DOM_VK_ESCAPE) {
        document.getElementById("myChat").style.display = "none";
        document.getElementById("myMessage").style.display = "none";
        document.getElementById("openChat").style.display = "block";
    }
};