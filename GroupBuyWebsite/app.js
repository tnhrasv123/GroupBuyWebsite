var scrollableElement = document.body; //document.getElementById('scrollableElement');

var section = document.body.scrollHeight;

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        section -= 50;
        window.scrollBy(0, -100);
    } else {
        section += 50;
        window.scrollBy(0, 100);
    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}