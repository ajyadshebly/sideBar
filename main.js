document.getElementById('toggleButton').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
    document.getElementById('overlay').style.display = 'block';
});
document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
    this.style.display = 'none';
});
