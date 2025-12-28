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
    document.getElementById("quiz").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const pregunta = preguntas[categoriaActual][preguntaActual];
    document.getElementById("question").textContent = pregunta.pregunta;
    
    const respuestasDiv = document.getElementById("answers");
    respuestasDiv.innerHTML = '';
    
    pregunta.respuestas.forEach((respuesta, index) => {
        const btn = document.createElement("button");
        btn.textContent = respuesta;
        btn.classList.add("bg-gray-200", "w-full", "p-2", "rounded-lg", "hover:bg-gray-300");
        btn.onclick = () => checkAnswer(index);
        respuestasDiv.appendChild(btn);
    });
}

function checkAnswer(index) {
    const pregunta = preguntas[categoriaActual][preguntaActual];
    if (index === pregunta.correcta) {
        puntaje += 10;
    }
    preguntaActual++;
    if (preguntaActual < preguntas[categoriaActual].length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question").textContent = `Tu puntaje es: ${puntaje}`;
    document.getElementById("answers").innerHTML = '';
    document.getElementById("next-btn").classList.add("hidden");
}

