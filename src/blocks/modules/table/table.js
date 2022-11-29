var stars = document.getElementsByClassName("js-star");

for (var i = 0, len = stars.length; i < len; i++) {
    stars [i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}