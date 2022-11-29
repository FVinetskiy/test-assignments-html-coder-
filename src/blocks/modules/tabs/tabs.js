
var tabs = document.getElementsByClassName("js-tab");

for (var i = 0, len = tabs.length; i < len; i++) {
    tabs [i].addEventListener("click", function(event) {
        let target = event.target;
        if(target.classList.contains('js-tab')) {
            for(let i = 0; i < tabs.length; i++) {
              tabs[i].classList.remove('active');
            }
            target.classList.add('active');
        }
    });
}