const ciclosDeSueño = [];

const agregarCicloDeSueño = (ciclo, duracion, horaDespertar) => {
    ciclosDeSueño.push({ id: ciclo, duracion, horaDespertar });
};

const mostrarCiclosDeSueño = () => {
    let mensajeInformativo = "";


    if (ciclosDeSueño.length === 0) {
        mensajeInformativo = "No hay ciclos calculados.";
    } else {
        for (let ciclo of ciclosDeSueño) {
            mensajeInformativo += `
                Ciclo : ${ciclo.id}<br>
                Duración : ${ciclo.duracion}<br>
                Hora de Despertar : ${ciclo.horaDespertar}<br><br>
            `;
        }
    }

    
    document.getElementById("output").innerHTML = mensajeInformativo;
};

const calcularHorasDespertar = (horaDormir) => {
    const duracionCiclo = 90;

    
    ciclosDeSueño.length = 0;

    
    for (let i = 1; i <= 6; i++) {
        let minutosTotales = duracionCiclo * i;
        let horaDespertar = sumarMinutos(horaDormir, minutosTotales);
        agregarCicloDeSueño(i, `${i * 90} minutos`, horaDespertar);
    }


    mostrarCiclosDeSueño();
};


function sumarMinutos(hora, minutos) {
    let [horas, minutosActuales] = hora.split(':').map(Number);
    minutosActuales += minutos;

    while (minutosActuales >= 60) {
        horas += 1;
        minutosActuales -= 60;
    }

    if (horas >= 24) horas -= 24;

    return (horas < 10 ? '0' + horas : horas) + ':' + (minutosActuales < 10 ? '0' + minutosActuales : minutosActuales);
}


const solicitarHoraDeDormir = () => {
    let horaDormir = prompt("Ingresa la hora en la que te vas a dormir (formato HH:MM)");

    if (horaDormir && /^\d{2}:\d{2}$/.test(horaDormir)) {
        calcularHorasDespertar(horaDormir);
    } else {
        alert("Por favor, ingresa una hora válida en formato HH:MM.");
    }
};

