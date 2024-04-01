window.addEventListener('load', () => {
    AOS.init();
})

const progressBar = document.querySelector('.progress');
let currentProgress = 10;
document.onreadystatechange = function() {
    setInterval(() => {
        progressBar.style.width = `${currentProgress}%`;
        if (currentProgress > 80) {
            currentProgress += 0.1;
        } else {
            currentProgress += 3;
        }
    }, 500)
    if (document.readyState == 'complete') {
        document.querySelector('.general--container').style.display = 'block';
        document.querySelector('.loader').style.display = 'none';
    }
}