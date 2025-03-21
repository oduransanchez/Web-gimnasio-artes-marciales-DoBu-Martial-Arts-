// schedule.js
document.addEventListener('DOMContentLoaded', function() {
    const scheduleData = {
        "schedule": [
            {
                "hora": "06:00-07:30",
                "lunes": "Jiu-jitsu",
                "martes": "Karate",
                "miercoles": "Judo",
                "jueves": "Jiu-jitsu",
                "viernes": "Muay Tailandés",
                "sabado": "",
                "domingo": ""
            },
            {
                "hora": "08:00-10:00",
                "lunes": "Muay Tailandés",
                "martes": "Privado matrícula",
                "miercoles": "Privado matrícula",
                "jueves": "Privado matrícula",
                "viernes": "Jiu-jitsu",
                "sabado": "Privado matrícula",
                "domingo": "Privado matrícula"
            },
            {
                "hora": "10:30-12:00",
                "lunes": "Privado matrícula",
                "martes": "Privado matrícula",
                "miercoles": "Privado matrícula",
                "jueves": "Privado matrícula",
                "viernes": "Privado matrícula",
                "sabado": "Judo",
                "domingo": "Karate"
            },
            {
                "hora": "13:00-14:30",
                "lunes": "Estera abierta/práctica personal",
                "martes": "Estera abierta/práctica personal",
                "miercoles": "Estera abierta/práctica personal",
                "jueves": "Estera abierta/práctica personal",
                "viernes": "Estera abierta/práctica personal",
                "sabado": "Karate",
                "domingo": "Judo"
            },
            {
                "hora": "15:00-17:00",
                "lunes": "Niños jiujitsu",
                "martes": "Judo infantil",
                "miercoles": "Karate infantil",
                "jueves": "Niños jiujitsu",
                "viernes": "Niños Judo",
                "sabado": "Muay Tailandés",
                "domingo": "Jiu-jitsu"
            },
            {
                "hora": "17:30-19:00",
                "lunes": "Karate",
                "martes": "Muay Tailandés",
                "miercoles": "Judo",
                "jueves": "Jiu-jitsu",
                "viernes": "Muay Tailandés",
                "sabado": "",
                "domingo": ""
            },
            {
                "hora": "19:00-21:00",
                "lunes": "Jiu-jitsu",
                "martes": "Judo",
                "miercoles": "Jiu-jitsu",
                "jueves": "Karate",
                "viernes": "Privado matrícula",
                "sabado": "",
                "domingo": ""
            }
        ]
    };

    const tbody = document.querySelector('.schedule-table tbody');
    tbody.innerHTML = ''; // Limpiar contenido existente
    
    scheduleData.schedule.forEach(horario => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${horario.hora}</td>
            <td>${horario.lunes || '-'}</td>
            <td>${horario.martes || '-'}</td>
            <td>${horario.miercoles || '-'}</td>
            <td>${horario.jueves || '-'}</td>
            <td>${horario.viernes || '-'}</td>
            <td>${horario.sabado || '-'}</td>
            <td>${horario.domingo || '-'}</td>
        `;
        tbody.appendChild(row);
    });
});