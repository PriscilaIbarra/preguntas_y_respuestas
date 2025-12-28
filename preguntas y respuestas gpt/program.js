let puntaje = 0;

function mostrarPregunta() {
  const categoria = document.getElementById("categoria").value;
  const preguntaActual = preguntas[categoria][0];

  document.getElementById("pregunta").textContent = preguntaActual.pregunta;
  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";

  preguntaActual.opciones.forEach((opcion, index) => {
    const boton = document.createElement("button");
    boton.textContent = opcion;
    boton.className =
      "w-full bg-gray-100 border rounded-lg py-2 hover:bg-blue-500 hover:text-white transition";
    boton.onclick = () => verificarRespuesta(index, preguntaActual.correcta);
    opcionesDiv.appendChild(boton);
  });
}


function verificarRespuesta(seleccion, correcta) {
  if (seleccion === correcta) {
    puntaje += 10;
    alert("¡Correcto! +10 puntos");
  } else {
    alert("Incorrecto 😢");
  }
  document.getElementById("puntaje").textContent = puntaje;
}

