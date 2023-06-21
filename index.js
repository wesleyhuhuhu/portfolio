/*
 * Event listener to start functions once DOM is loaded
 */
window.addEventListener('DOMContentLoaded', startFunction);


function startFunction() {
    const likeButton = document.getElementById('button3');
    const subscribeButton = document.getElementById('button2');
    likeButton.addEventListener('click', changeStyle) {
        subscribeButton.style.backgroundColor = "blue";
    }
}
