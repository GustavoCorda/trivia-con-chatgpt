function centerButton(buttonId) {
    // obtener los elementos de botón
    var buttons = document.getElementsByClassName("trivia-button");
  
    // determinar el botón seleccionado
    var selectedButton = document.getElementById(buttonId);
  
    // mover el botón seleccionado al centro
    selectedButton.style.position = "absolute";
    selectedButton.style.left = "50%";
    selectedButton.style.transform = "translate(-50%, 0)";
  
    // ocultar los otros botones
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].id != buttonId) {
        buttons[i].style.display = "none";
      }
    }
  
    // mostrar el div de la pregunta y las posibles respuestas
    var questionDiv = document.getElementById("question-div");
    questionDiv.style.display = "block";
}
  
var trivia1Questions = [  {    question: "¿Cuál es la capital de Francia?",    answers: ["Madrid", "París", "Londres", "Roma"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    answers: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"],
    correctAnswer: 0
  },
  { question: "¿Cuál es el río más pequeño de América del Sur?",
   answers: ["Paraná","Orinoco","Magdalena","Roezán"],
   correctAnswer: 3
  }
  ,
{ question: "¿Cuál es el país con la mayor superficie forestal del mundo?",
 answers: [" Brasil"," Canadá","Rusia","Australia"],
 correctAnswer: 0
}
,
{ question: "¿Cuál es el ave más grande del mundo?",
 answers: ["Cóndor andino","Águila real"," Avestruz","Cisne"],
 correctAnswer: 2
}
,
{ question: "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
 answers: ["Oxígeno","Silicio"," Hierro","Calcio"],
 correctAnswer: 1
}
,
{ question: "¿Cuál es el país más grande de Sudamérica?",
 answers: ["Argentina","Colombia","Perú","Brasil"],
 correctAnswer: 3
}
,
{ question: "¿Cuál es el animal más inteligente del reino animal?",
 answers: [" Chimpancé"," Elefante","Cuervo","Delfín"],
 correctAnswer: 3
}
,
{ question: "¿Cuál es el símbolo químico del hidrógeno?",
 answers: ["H ","O","C","Hr"],
 correctAnswer: 0
}
,
{ question: "¿Cuál es el país más poblado de Europa?",
 answers: ["Alemania","Reino Unido","Francia","Rusia"],
 correctAnswer: 3
}
  // y así sucesivamente para las 10 preguntas de la trivia 1
];

var trivia2Questions = [ 
   {    question: "¿En qué año se estrenó la primera película de Star Wars?",   
    answers: ["1975", "1976", "1977", "1978"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el animal más rápido del mundo?",
    answers: ["Leopardo", "Guepardo", "León", "Tigre"],
    correctAnswer: 0
  },
  {
    question:"¿Cuál es el instrumento musical más antiguo del mundo?" ,
    answers: ["Flauta"," Tambor","Lira","Guitarra"],
    correctAnswer: 0
  },
  {
    question:"¿Cuál es el océano más grande del mundo?" ,
    answers: ["Océano Atlántico","Océano Pacífico","Océano Índico","Océano Ártico"],
    correctAnswer: 1
  }
  ,
  {
    question: "¿Cuál es el elemento químico utilizado para medir el tiempo en los relojes atómicos?",
    answers: [" Hierro"," Oro","Cesio","Plutonio"],
    correctAnswer: 2
  }
  ,
  {
    question:"¿Cuál es el país con la mayor población del mundo?" ,
    answers: ["China","India","Estados Unidos"," Indonesia"],
    correctAnswer: 0
  }
  ,
  {
    question: "¿Cuál es el mamífero marino más grande del mundo?",
    answers: ["Orca","Tiburón blanco","Delfín","Ballena azul"],
    correctAnswer: 3
  }
  ,
  {
    question: "¿Cuál es el elemento químico utilizado como combustible en reactores nucleares?",
    answers: ["Cesio","Uranio","Plutonio","Titanio"],
    correctAnswer: 1
  }
  ,
   { question: "¿Cuál es la capital de Rusia?",
    answers: ["Moscú","Kiev","Bruselas","Quito"],
    correctAnswer: 0
},
   { question: "¿Cuál es el océano más pequeño del mundo?",
    answers: ["Índico","Ártico","Pacífico","Atlántico"],
    correctAnswer: 1
}

  // y así sucesivamente para las 10 preguntas de la trivia 2
];

var trivia3Questions = [  {    question: "¿Cuál es el símbolo químico del oro?",    answers: ["Ag", "Fe", "Au", "Cu"],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el país más grande del mundo?",
    answers: ["China", "Rusia", "Canadá", "Estados Unidos"],
    correctAnswer: 0
  }
  ,
{ question: "¿Cuál es el océano más pequeño del mundo?",
 answers: ["Ártico","Índico","Atlántico","Pacífico"],
 correctAnswer: 0
}
,
{ question: "¿Cuál es la capital de Rusia?",
 answers: ["Varsovia"," San Petersburgo","Moscú","Kiev"],
 correctAnswer: 2
}
,
{ question: "¿Cuál es el planeta más grande del sistema solar?",
 answers: ["Mercurio"," Júpiter"," Venus","Saturno"],
 correctAnswer: 1
}
,
{ question: "¿Cuál es la capital de Italia?",
 answers: ["Madrid","París","Londres","Roma"],
 correctAnswer: 3
}
,
{ question: "¿Cuál es el animal más grande del mundo?",
 answers: ["Elefante"," Jirafa"," Ballena azul"," Rinoceronte"],
 correctAnswer: 2
}
,
{ question: "¿Cuál es la capital de España?",
 answers: ["Madrid","París","Londres","Barcelona"],
 correctAnswer: 0
}
,
{ question: "¿Cuál es el símbolo químico del cobre?",
 answers: ["Ag","Fe","Cu","Au"],
 correctAnswer: 2
}
,
{ question: "¿Cómo se llama el hijo de Homero Simpson?",
 answers: ["Moe","Bart","Nelson","Milhouse"],
 correctAnswer: 1
}
  // y así sucesivamente para las 10 preguntas de la trivia 3
];

function selectTrivia(triviaNumber) {
  // Verificar si el número de trivia es válido
  if (triviaNumber < 1 || triviaNumber > 3) {
    console.error("Número de trivia inválido");
    return;
  }

  // Asignar el array de preguntas correspondiente a la trivia seleccionada
  if (triviaNumber === 1) {
    trivia = trivia1Questions;
  } else if (triviaNumber === 2) {
    trivia = trivia2Questions;
  } else if (triviaNumber === 3) {
    trivia = trivia3Questions;
  } else {
    console.error("Número de trivia no reconocido");
    return;
  }

  // Mostrar la primera pregunta del array de preguntas
  var currentQuestionIndex = 0;
  var currentQuestion = trivia[currentQuestionIndex];
  showQuestion(currentQuestionIndex);
}

  

var trivia; // variable para almacenar la trivia seleccionada
var currentQuestion = 0; // variable para almacenar el índice de la pregunta actual
var correctAnswers = 0; // variable para almacenar la cantidad de respuestas correctas

function showQuestion(questionIndex) {
    var question = trivia[questionIndex]; // obtener la pregunta actual
    var questionElement = document.getElementById("question");
    var answersElement = document.getElementById("answers");
    
    questionElement.innerText = question.question; // mostrar la pregunta
    
    // generar los botones de respuesta
    answersElement.innerHTML = "";
    question.answers.forEach(function(answer, index) {
      var button = document.createElement("button");
      button.innerText = answer;
      button.onclick = function() {
        checkAnswer(index === question.correctAnswer);
        currentQuestion++;
        if (currentQuestion < trivia.length) {
          showQuestion(currentQuestion);
        } else {
          showResult();
        }
        button.onclick = function() {
  checkAnswer(index === question.correctAnswer);
  currentQuestion++;
  if (currentQuestion < trivia.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
};

      };
      answersElement.appendChild(button);
    });
    answersElement.innerHTML = "";
    question.answers.forEach(function(answer, index) {
      var button = document.createElement("button");
      button.innerText = answer;
      button.onclick = function() {
        checkAnswer(index === question.correctAnswer);
        currentQuestion++;
        if (currentQuestion < trivia.length) {
          showQuestion(currentQuestion);
        } else {
          showResult();
        }
      };
      answersElement.appendChild(button);
    });
  }

  
  var triviaButtons = document.getElementsByClassName("trivia-button");
  for (var i = 0; i < triviaButtons.length; i++) {
    triviaButtons[i].addEventListener("click", function() {
      selectTrivia(parseInt(this.id.slice(-1)));
    });
  }

  function checkAnswer(isCorrect) {
    if (isCorrect) {
      // La respuesta es correcta, realiza las acciones correspondientes
      console.log("Respuesta correcta");
      correctAnswers++; // Incrementar el contador de respuestas correctas
    } else {
      // La respuesta es incorrecta, realiza las acciones correspondientes
      console.log("Respuesta incorrecta");
      // Aquí puedes realizar cualquier acción adicional para manejar las respuestas incorrectas
    }
  }
  
  function showResult() {
    // Calcular el promedio de respuestas correctas
    var average = (correctAnswers / trivia.length) * 100;
    var roundedAverage = average.toFixed(2); // Limitar a dos decimales
  
    // Mostrar el resultado
    var resultElement = document.getElementById("result");
    resultElement.innerText = "Tu resultado: " + roundedAverage + "% de respuestas correctas";
  
    // Ocultar el div de la pregunta y las posibles respuestas si existe
    var questionDiv = document.getElementById("question-div");
    if (questionDiv) {
      questionDiv.style.display = "none";
    }
  
    // Mostrar el div del resultado si existe
    var resultDiv = document.getElementById("result");
    if (resultDiv) {
      resultDiv.style.display = "block";
    }
  
    // Reiniciar las variables
    currentQuestion = 0;
    correctAnswers = 0;

    // Botón volver a inicio
    inicio = document.getElementById("reiniciar");
    inicio.style.display = "block";
    // function regresarInicio(){

      
    // }
  }
  
  