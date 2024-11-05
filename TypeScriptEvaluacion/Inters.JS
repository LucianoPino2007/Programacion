var Points = {
    handball: { A: 0, B: 0 },
    futbol: { A: 0, B: 0 },
    ajedrez: { A: 0, B: 0 }
};
function AgregarPuntos(team) {
    var disciplines = ['handball', 'futbol', 'ajedrez'];
    disciplines.forEach(function (discipline) {
        var input = document.getElementById("".concat(discipline).concat(team));
        var pointsInput = parseInt(input.value, 10);
        if (!isNaN(pointsInput) && pointsInput >= 0) {
            Points[discipline][team] += pointsInput;
            input.value = '0'; // Resetear el input después de agregar puntos
        }
    });
}
function MostrarResultados() {
    var totalA = 0;
    var totalB = 0;
    var highestPoints = 0;
    var highestDiscipline = '';
    for (var discipline in Points) {
        totalA += Points[discipline].A;
        totalB += Points[discipline].B;
        if (Points[discipline].A > highestPoints) {
            highestPoints = Points[discipline].A;
            highestDiscipline = "Equipo A en ".concat(discipline);
        }
        if (Points[discipline].B > highestPoints) {
            highestPoints = Points[discipline].B;
            highestDiscipline = "Equipo B en ".concat(discipline);
        }
    }
    // Mostrar resultados en el HTML
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = "\n        Total puntos Tribu Negra: ".concat(totalA, "\n        Total puntos Tribu Roja: ").concat(totalB, "\n        Mayor puntuaci\u00F3n: ").concat(highestPoints, "\n    ");
}
