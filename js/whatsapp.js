<script>
document.addEventListener("DOMContentLoaded", function() {
    var whatsappBubble = document.querySelector(".whatsapp-bubble");
    whatsappBubble.style.transition = "opacity 0.5s ease-in-out";
    whatsappBubble.style.opacity = "0";

    setTimeout(function() {
        whatsappBubble.style.opacity = "1";
    }, 500);
});
</script>