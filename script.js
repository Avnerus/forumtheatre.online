function openPuppetDialog() {
    document.querySelector('dialog').show();
}

function openPuppet() {

}

const puppet = document.querySelector('.puppet');
if (!puppet.classList.contains('disabled')) {
    puppet.addEventListener('click', () => {
        openPuppetDialog();
    });
}

document.querySelector('#cancel').addEventListener('click', () => {
    document.querySelector('dialog').close();
})
document.querySelector('#go').addEventListener('click', () => {
    window.open('https://puppetvoice.aalto.fi/bibi/','__blank');
})