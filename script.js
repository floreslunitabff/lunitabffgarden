document.addEventListener('DOMContentLoaded', () => {
    let flowersCount = 0;
    const areas = document.querySelectorAll('.click-area');
    const flowers = document.querySelectorAll('.flower');
    const messages = document.querySelectorAll('.message');
    const garden= document.getElementById('garden');
    const navidadButton = document.getElementById('navidad-button');
    const card = document.getElementById('card');
    const card2 = document.getElementById('card2');
    const abrirTarjetaButton = document.getElementById('abrir-tarjeta');
    const abrirTarjetaButton2 = document.getElementById('abrir-tarjeta2');
    const arbolNavidad = document.getElementById('arbol-navidad');

    // Manejar clicks en áreas del jardín
    areas.forEach((area, index) => {
        area.addEventListener('click', () => {
            const flower = document.getElementById(`flower${index + 1}`);
            const message = document.getElementById(`message${index + 1}`);
            
            flower.style.display = 'block';

            // Calcular posición de la flor en unidades responsivas
            const flowerTop = (area.offsetTop / window.innerHeight) * 100;
            const flowerLeft = (area.offsetLeft / window.innerWidth) * 100;

            // Aplicar las posiciones en 'vh' y 'vw'
            flower.style.top = `${flowerTop}vh`;
            flower.style.left = `${flowerLeft}vw`;

            // Agregar el mensaje al hacer clic en la flor
            flower.addEventListener('click', () => {
                if (!flower.classList.contains('clicked')) {
                    // Posicionar mensaje justo encima de la flor
                    message.style.top = `${flowerTop - 5}vh`;  // Mensaje 10vh encima de la flor
                    message.style.left = `${flowerLeft}vw`;
                    message.style.display = 'block';  // Mostrar mensaje
                    flower.classList.add('clicked');
                    flowersCount++;
                }

                if (flowersCount == 6) {
                    const bigFlower= document.getElementById('big-flower')
                    bigFlower.style.top= '40vh'
                    bigFlower.style.left= '50vw'
                    bigFlower.classList.add('active');
                }
            });

            // Desactivar el área una vez que se ha hecho clic
            area.style.pointerEvents = 'none';

        });
    });

    const bigFlower = document.getElementById('big-flower');
    bigFlower.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/watch?v=UNlveNAEu_E&t=2s'; 
    });

    // Manejar el botón de Navidad
    navidadButton.addEventListener('click', () => {
        card.style.display = 'block';
        garden.style.display = 'none';
    });

    // Manejar el botón "Abrir tarjeta"
    abrirTarjetaButton.addEventListener('click', () => {
        card.style.animation = 'openCard 1s forwards';
        setTimeout(() => {
            card.style.display = 'none';
            card2.style.display = 'block';
        }, 1000);
    });

    // Manejar el botón "Abrir tarjeta"
    abrirTarjetaButton2.addEventListener('click', () => {
        card.style.animation = 'openCard 1s forwards';
        setTimeout(() => {
            card2.style.display = 'none';
            arbolNavidad.style.display = 'block';
        }, 1000);
    });

    const botonesSiguiente = document.querySelectorAll('.boton-siguiente');

    botonesSiguiente.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const actual = event.target.closest('.momento');
            const siguienteId = event.target.dataset.next;
            const siguiente = document.getElementById(siguienteId);

            if (siguiente) {
                actual.style.display = 'none';
                siguiente.style.display = 'block';
            }
        });
    });
});
