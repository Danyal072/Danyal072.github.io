function onClickMenu() {
    document.getElementById('menu').classList.toggle('icons');
    document.getElementById('nav').classList.toggle('change');
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('menu').classList.remove('icons');
        document.getElementById('nav').classList.remove('change');
    });
}
onClickMenu();