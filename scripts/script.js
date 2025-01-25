document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu_bar');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const black_cover = document.querySelector('.black')

    menuBar.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        black_cover.classList.add('cover')
    });

    black_cover.addEventListener("click", () => {
        mobileMenu.classList.remove('active');
        black_cover.classList.remove('cover')
    })

    const downloadBtn = document.getElementById('download-btn')

    downloadBtn.addEventListener("click", () => {

        // let a = document.createElement('a');
        // a.href = './file/HSRP_features.pdf';
        // a.target = "blank"
        // a.click();

        window.open('./file/HSRP_features.pdf', '_blank');
    })
});