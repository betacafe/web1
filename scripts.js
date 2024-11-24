function openModal(product) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const grainDetails = document.getElementById('modal-grain');
    const roast = document.getElementById('modal-roast');
    const rating = document.getElementById('modal-rating');
    const image = document.getElementById('modal-image');

    if (product === 'product1') {
        title.innerText = 'Café Etiopía 250g';
        description.innerText = 'Café de tueste ligero con notas florales y cítricas.';
        grainDetails.innerText = 'Grano: Arábica';
        roast.innerText = 'Tueste: Claro';
        rating.innerText = 'Puntaje: ★★★★☆';
        image.src = 'cafe_prueba.svg';
    } else if (product === 'product2') {
        title.innerText = 'Café México 500g';
        description.innerText = 'Café suave con un sabor a chocolate y un toque de nuez.';
        grainDetails.innerText = 'Grano: Arábica';
        roast.innerText = 'Tueste: Medio';
        rating.innerText = 'Puntaje: ★★★★☆';
        image.src = 'cafe_prueba.svg';
    } else if (product === 'product3') {
        title.innerText = 'Café Sumatra 250g';
        description.innerText = 'Café de cuerpo completo con notas terrosas y especiadas.';
        grainDetails.innerText = 'Grano: Arábica';
        roast.innerText = 'Tueste: Oscuro';
        rating.innerText = 'Puntaje: ★★★★★';
        image.src = 'cafe_prueba.svg';
    } else if (product === 'product4') {
        title.innerText = 'Café Perú 500g';
        description.innerText = 'Café orgánico con un sabor suave y un final dulce.';
        grainDetails.innerText = 'Grano: Arábica';
        roast.innerText = 'Tueste: Medio';
        rating.innerText = 'Puntaje: ★★★★☆';
        image.src = 'cafe_prueba.svg';
    }

    modal.style.display = 'block'; // Muestra el modal
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Oculta el modal
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
