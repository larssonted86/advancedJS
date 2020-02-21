


const scrollToTop = (length)  => {
    const element = document.documentElement;
    const duration = 2000;
    let start = null;
    function step(timestamp) {
     if (!start) { start = timestamp; }
     const progress = timestamp - start;
     element.scrollTop = length - length * (progress / duration);
     if (progress < duration) {
     window.requestAnimationFrame(step);
     }
    }
    window.requestAnimationFrame(step);
}


const button = document.querySelector('#button')
button.addEventListener('click', (e) =>{
    const length = document.scrollingElement.scrollTop;

    scrollToTop(length);
    //console.log(length);
    //window.requestAnimationFrame(scrollToTop(length));
});