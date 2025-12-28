// Definir las preguntas por categoría
const preguntas = {
    ciencia: [
        { pregunta: "¿Cuál es el planeta más grande del sistema solar?", respuestas: ["Júpiter", "Saturno", "Marte"], correcta: 0 },
        { pregunta: "¿Quién propuso la teoría de la relatividad?", respuestas: ["Newton", "Einstein", "Galileo"], correcta: 1 },
        { pregunta: "¿Cuál es el elemento químico más abundante en la Tierra?", respuestas: ["Oxígeno", "Carbono", "Hidrógeno"], correcta: 0 }
    ],
    tecnologia: [
        { pregunta: "¿Qué significa HTML?", respuestas: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tool Markup Language"], correcta: 0 },
        { pregunta: "¿Cuál es el creador de la teoría de la programación orientada a objetos?", respuestas: ["Alan Turing", "Bjarne Stroustrup", "James Gosling"], correcta: 1 },
        { pregunta: "¿Qué es un SSD?", respuestas: ["Un tipo de memoria RAM", "Un disco duro de estado sólido", "Una tarjeta gráfica"], correcta: 1 }
    ],
    literatura: [
        { pregunta: "¿Quién escribió 'Cien años de soledad'?", respuestas: ["Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges"], correcta: 0 },
        { pregunta: "¿En qué siglo se escribió 'Don Quijote de la Mancha'?", respuestas: ["Siglo XVI", "Siglo XVII", "Siglo XVIII"], correcta: 1 },
        { pregunta: "¿Quién es el autor de '1984'?", respuestas: ["Aldous Huxley", "George Orwell", "Ray Bradbury"], correcta: 1 }
    ]
};

let categoriaActual = '';
let preguntaActual = 0;
let puntaje = 0;

function startQuiz(categoria) {
    categoriaActual = categoria;
    preguntaActual = 0;
    puntaje = 0;
    document.getElementById('quizSection').style.display = 'block';
    mostrarPregunta();
}

function mostrarPregunta() {
    const pregunta = preguntas[categoriaActual][preguntaActual];
    document.getElementById('questionText').innerText = pregunta.pregunta;
    document.getElementById('answers').innerHTML = '';
    
    // Crear botones para las respuestas
    pregunta.respuestas.forEach((respuesta, index) => {
        const btn = document.createElement('button');
        btn.classList.add('btn', 'waves-effect', 'waves-light', 'blue');
        btn.style.margin = '10px';
        btn.innerText = respuesta;
        btn.onclick = () => verificarRespuesta(index);
        document.getElementById('answers').appendChild(btn);
    });
}

function verificarRespuesta(index) {
    const pregunta = preguntas[categoriaActual][preguntaActual];
    if (index === pregunta.correcta) {
        puntaje += 10;
        M.toast({html: '¡Respuesta Correcta!', classes: 'green'});
    } else {
        M.toast({html: '¡Respuesta Incorrecta!', classes: 'red'});
    }
    
    // Actualizar puntaje
    document.getElementById('scoreValue').innerText = puntaje;

    // Avanzar a la siguiente pregunta o terminar el quiz
    if (preguntaActual + 1 < preguntas[categoriaActual].length) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        M.toast({html: `Quiz Terminado! Puntaje Final: ${puntaje}`, classes: 'blue'});
        document.getElementById('quizSection').style.display = 'none';
    }
}

// Manejar los botones de las categorías
document.getElementById('cienciaBtn').addEventListener('click', () => startQuiz('ciencia'));
document.getElementById('tecnologiaBtn').addEventListener('click', () => startQuiz('tecnologia'));
document.getElementById('literaturaBtn').addEventListener('click', () => startQuiz('literatura'));

