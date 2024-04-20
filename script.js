function exportToPDF() {
    const doc = new jsPDF();
    const characterName = document.getElementById('characterName').value;
    // Agrega más campos según sea necesario y añádelos al PDF

    doc.text(20, 20, `Ficha de Personaje - ${characterName}`);
    // Agrega más texto al PDF según sea necesario

    doc.save('ficha_de_personaje.pdf');
}

document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para guardar la ficha de personaje en la base de datos o en localStorage
    alert('Ficha de personaje guardada correctamente.');
});
