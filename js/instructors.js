document.addEventListener('DOMContentLoaded', function() {
    const instructorsData = {
        "instructors": [
            {
                "nombre": "Mauricio Gómez",
                "cargo": "Propietario del gimnasio/entrenador jefe de artes marciales",
                "detalles": [
                    "Entrenador en todas las artes marciales",
                    "4º Dan Cinturón Negro judo",
                    "3º Dan Cinturón Negro jiujitsu",
                    "1º Dan Cinturón Negro karate",
                    "Entrenador acreditado de Muay Thai"
                ]
            },
            {
                "nombre": "Sarah Nova",
                "cargo": "Ayudante entrenador de artes marciales",
                "detalles": [
                    "5º Dan de kárate"
                ]
            },
            {
                "nombre": "Guy Victory",
                "cargo": "Entrenador asistente de artes marciales",
                "detalles": [
                    "2º Dan Cinturón Negro jiujitsu",
                    "1º Dan Cinturón Negro judo"
                ]
            },
            {
                "nombre": "Morris Davis",
                "cargo": "Asistente entrenador de artes marciales",
                "detalles": [
                    "Entrenador acreditado de Muay Thai",
                    "3er Dan Cinturón Negro karate"
                ]
            },
            {
                "nombre": "Traci Santiago",
                "cargo": "Preparadora física",
                "detalles": [
                    "Licenciatura en Ciencias del Deporte",
                    "Diplomado en salud y nutrición",
                    "Especializado en diseñar programas de fuerza y acondicionamiento para atletas de combate"
                ]
            },
            {
                "nombre": "Harpreet Kaur",
                "cargo": "Preparador físico",
                "detalles": [
                    "Licenciatura en Fisioterapia",
                    "Máster en Ciencias del Deporte"
                ]
            }
        ]
    };

    const table = document.getElementById('instructores-tabla');
    table.innerHTML = ''; // Limpiar contenido existente
    
    // Crear encabezado
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Cargo</th>
            <th>Detalles</th>
        </tr>
    `;
    table.appendChild(thead);
    
    // Crear cuerpo de la tabla
    const tbody = document.createElement('tbody');
    instructorsData.instructors.forEach(instructor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${instructor.nombre}</td>
            <td>${instructor.cargo}</td>
            <td>
                <ul>
                    ${instructor.detalles.map(detalle => `<li>${detalle}</li>`).join('')}
                </ul>
            </td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
});