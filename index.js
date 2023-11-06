const scriptWritingCard = document.getElementById("script-writing-card");
const webDevCard = document.getElementById("webdev-card");
const graphicDesignCard = document.getElementById("graphicdesign-card");

scriptWritingCard.addEventListener("click", function() {
    window.location.href = "scriptwriting.html";
});

webDevCard.addEventListener("click", function() {
    window.location.href = "webdev.html"; 
});

graphicDesignCard.addEventListener("click", function() {
    window.location.href = "graphicdesign.html"; 
});
