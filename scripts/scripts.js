const buttons = document.querySelectorAll('.options-picker li');
const image = document.querySelector('#product-image');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e);

        // buttons.forEach((btn) => btn.querySelector('.color').classList.remove('.selected'));
      
        const btn = e.target;

        const idValue = btn.getAttribute('id');

        // btn.querySelector('.color').classList.add('.selected');

        image.classList.toggle('.changing');
        image.setAttribute('src', `../../assets/imgs/iphone_${idValue}.jpg`);

        // setTimeout(() => {
        //     image.classList.toggle('.changing')
        // }, 200);
    });
});
