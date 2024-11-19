interface Points {
    [discipline: string]: {
        A: number;
        B: number;
    };
}

const points: Points = {
    handball: { A: 0, B: 0 },
    futbol: { A: 0, B: 0 },  
    ajedrez: { A: 0, B: 0 }
};

function AgregarPuntos(team: 'A' | 'B') {
    const disciplines = ['handball', 'futbol', 'ajedrez'];
    
    disciplines.forEach(discipline => {
        const input = document.getElementById(`${discipline}${team}`) as HTMLInputElement | null;
        
        if (input) {
            const pointsInput = parseInt(input.value, 10);
            
            if (!isNaN(pointsInput)) {
                points[discipline][team] += pointsInput;
                input.value = '0'; // Resetear el input después de agregar puntos
            }
        }
    });
}

function MostrarResultados() {
    let totalA = 0;
    let totalB = 0;
    let highestPoints = 0;
    let highestDiscipline = '';

    for (const discipline in points) {
        totalA += points[discipline].A;
        totalB += points[discipline].B;

        if (points[discipline].A > highestPoints) {
            highestPoints = points[discipline].A;
            highestDiscipline = `Equipo A en ${discipline}`;
        }
        if (points[discipline].B > highestPoints) {
            highestPoints = points[discipline].B;
            highestDiscipline = `Equipo B en ${discipline}`;
        }
    }

    // Mostrar resultados en el HTML
    const resultadoElement = document.getElementById('resultado') as HTMLElement;
    if (resultadoElement) {
        resultadoElement.innerText = `
            Total puntos Tribu Negra (Equipo A): ${totalA}
            Total puntos Tribu Roja (Equipo B): ${totalB}
            Mayor puntuación: ${highestPoints} (${highestDiscipline})
        `;
    }
}
