interface Points {
    [discipline: string]: {
        A: number;
        B: number;
    };
}

const Points: Points = {
    handball: { A: 0, B: 0 },
    futbol: { A: 0, B: 0 },  
    ajedrez: { A: 0, B: 0 }
};

function AgregarPuntos(team: 'A' | 'B') {
    const disciplines = ['handball', 'futbol', 'ajedrez'];
    
    disciplines.forEach(discipline => {
        const input = document.getElementById(`${discipline}${team}`) as HTMLInputElement;
        const pointsInput = parseInt(input.value, 10);
        
        if (!isNaN(pointsInput) && pointsInput >= 0) {
            Points[discipline][team] += pointsInput;
            input.value = '0'; // Resetear el input después de agregar puntos
        }
    });
}

function MostrarResultados() {
    let totalA = 0;
    let totalB = 0;
    let highestPoints = 0;
    let highestDiscipline = '';

    for (const discipline in Points) {
        totalA += Points[discipline].A;
        totalB += Points[discipline].B;

        if (Points[discipline].A > highestPoints) {
            highestPoints = Points[discipline].A;
            highestDiscipline = `Equipo A en ${discipline}`;
        }
        if (Points[discipline].B > highestPoints) {
            highestPoints = Points[discipline].B;
            highestDiscipline = `Equipo B en ${discipline}`;
        }
    }

    // Mostrar resultados en el HTML
    const resultadoElement = document.getElementById('resultado') as HTMLElement;
    resultadoElement.innerText = `
        Total puntos Tribu Negra: ${totalA}
        Total puntos Tribu Roja: ${totalB}
        Mayor puntuación: ${highestPoints}
    `;
}
