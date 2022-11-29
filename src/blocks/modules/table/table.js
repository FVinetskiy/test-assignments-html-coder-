// star
var stars = document.getElementsByClassName("js-star");
for (var i = 0, len = stars.length; i < len; i++) {
    stars [i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}
// chexbox
const mainCheckbox = document.getElementById('js-checkAll')
mainCheckbox.addEventListener('click', (e) => {
    const inputs = document.querySelectorAll('.check__input');
    for (const input of inputs) {
        input.checked = e.target.checked
    }
});
// open show
const buttons = document.getElementsByClassName("table__but-toggle");
const firstshow = document.getElementsByClassName("js-show-block");
const secondshow = document.getElementsByClassName("table__show");


for (var i = 0, len = buttons.length; i < len; i++) {
    getIndex(i)
}

function getIndex (i) {
    buttons [i].addEventListener("click", function(e) {
        this.classList.toggle("active");
        secondshow[i].classList.toggle("active");
        firstshow[i].classList.toggle("active");
    });
}