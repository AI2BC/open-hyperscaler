document.addEventListener("DOMContentLoaded", (event) => {

    ///// Animate when in view
    let defaultObserverOptions = {
        rootMargin: '0px',
        threshold: 0.3 
    };
    
    let noThresholdObserverOptions = {
        rootMargin: '0px',
        threshold: 0 
    };
    
    let defaultObserver = new IntersectionObserver(observerCallback, defaultObserverOptions);
    let noThresholdObserver = new IntersectionObserver(observerCallback, noThresholdObserverOptions);
    
    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }
    
    let target = '.animation';
    document.querySelectorAll(target).forEach((element) => {
        if (element) {
            if (element.classList.contains('no-threshold')) {
                noThresholdObserver.observe(element);
            } else {
                defaultObserver.observe(element);
            }
        }
    });
    
})
