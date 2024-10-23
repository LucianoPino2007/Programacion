var Points = {
    handball: { A: 0, B: 0 },
    resistencia: { A: 0, B: 0 },
    ajedrez: { A: 0, B: 0 }
};
document.getElementById('register').addEventListener('click', function () {
    var discipline = document.getElementById('discipline').value;
    var team = document.getElementById('team').value;
    var pointsInput = parseInt(document.getElementById('points').value, 10);
    if (!isNaN(pointsInput) && pointsInput >= 0) {
        Points[discipline][team] += pointsInput;
        document.getElementById("".concat(discipline).concat(team)).innerText = Points[discipline][team].toString();
        subiresultados();
    }
    else {
        alert("Por favor, introduce un número de puntos válido.");
    }
});
function subiresultados() {
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
    console.log("Total puntos Equipo A: ".concat(totalA));
    console.log("Total puntos Equipo B: ".concat(totalB));
}
