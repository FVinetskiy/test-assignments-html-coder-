window.onload = function() {
    var boxes = document.getElementsByClassName('js-height');
    var height = 0;

    for( var i = 0; i < boxes.length; i++ ){
        var current_height = boxes[i].offsetHeight;
        if(current_height > height) {
            height = current_height;
        }        
    }

    for( var i = 0; i < boxes.length; i++ ){
        boxes[i].style.height = height + 'px';       
    }
};