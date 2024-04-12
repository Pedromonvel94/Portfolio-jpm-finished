const cardsTech = document.querySelectorAll('.technologies');

cardsTech.forEach(cardTech => {
    const height = cardTech.clientHeight;
    const width = cardTech.clientWidth;

    cardTech.addEventListener('mousemove', (evt) => {
        const {layerX, layerY} = evt

        const yRotation = (
            (layerX - width / 2) / width
        ) * 5

        const xRotation = (
            (layerY - height / 2) / height
        ) * 5

        const string = `
        perspective(500px)
        scale(1.008)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`

        cardTech.style.transform = string

    })

    cardTech.addEventListener('mouseout', () => {
        cardTech.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`
    })
});