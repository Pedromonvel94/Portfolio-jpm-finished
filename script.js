const cardsTech = document.querySelectorAll('.technologies');
const menu = document.querySelector('#menu');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

open.addEventListener("click", () => {
    menu.classList.remove("ssm:max-lg:invisible");
    menu.classList.remove("ssm:max-lg:opacity-0");
    open.classList.add("ssm:max-lg:opacity-0");
    open.classList.add("ssm:max-lg:invisible");
})

close.addEventListener("click", () => {
    menu.classList.add("ssm:max-lg:opacity-0");
    menu.classList.add("ssm:max-lg:invisible");
    open.classList.remove("ssm:max-lg:invisible");
    open.classList.remove("ssm:max-lg:opacity-0");
})

let ventanaGrande = window.innerWidth > 1024;

function activarEfecto3D() {
    const cardsTech = document.querySelectorAll('.technologies');

    cardsTech.forEach(cardTech => {
        const { top, left, height, width } = cardTech.getBoundingClientRect();

        cardTech.addEventListener('mousemove', (evt) => {
            const { clientX, clientY } = evt;
            const offsetX = clientX - left;
            const offsetY = clientY - top;

            const yRotation = ((offsetX - width / 2) / width) * 5;
            const xRotation = ((offsetY - height / 2) / height) * 5;

            const transformString = `
                perspective(500px)
                scale(1.008)
                rotateX(${xRotation}deg)
                rotateY(${yRotation}deg)
            `;

            cardTech.style.transform = transformString;
        });

        cardTech.addEventListener('mouseout', () => {
            cardTech.style.transform = `
                perspective(500px)
                scale(1)
                rotateX(0)
                rotateY(0)
            `;
        });
    });
}

function ajustarEfecto3DSegunTamañoVentana() {
    if (window.innerWidth > 1024) {
        ventanaGrande = true;
        activarEfecto3D();
    } else {
        ventanaGrande = false;
    }
}

window.addEventListener('load', () => {
    ajustarEfecto3DSegunTamañoVentana();
});

window.addEventListener('resize', () => {
    ajustarEfecto3DSegunTamañoVentana();
});
