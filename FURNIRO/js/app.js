document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-toggle').addEventListener('click', function () {
        document.querySelector('.menu').classList.add('open');
    });

    document.getElementById('menu-toggle-close').addEventListener('click', function () {
        document.querySelector('.menu').classList.remove('open');
    });
});