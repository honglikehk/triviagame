// the function does not run until the HTML is done loading
$(document).ready(function() {
  let rightGif = "https://media.giphy.com/media/fs68M1NGzYwv0aQmhO/giphy.gif";
  let wrongGif = "https://media.giphy.com/media/8BNNGw8WcMivS/giphy.gif";
  // create an array object of questions, answers
  const avocadoSlides = [
    {
      question: "What is the world record for the largest avocado?",
      answer: "5 pounds and 3.6 ounces",
      answerBank: [
        "4 pounds and 2 ounces",
        "2 pounds",
        "3.5 pounds",
        "5 pounds and 3.6 ounces"
      ]
    },
    {
      question: "What is an Avocado,exactly?",
      answer: "Fruit",
      answerBank: ["Fruit", "Vegetable", "Legume", "Meat"]
    },
    {
      question:
        "What was the name that was coined by Irishman Sir Hans Sloane in 1696?",
      answer: "Alligator Pear",
      answerBank: [
        "Tennis Ball",
        "Alligator Pear",
        "Avonana",
        "No name was coined"
      ]
    },
    {
      question: "Which animals are avocados toxic too?",
      answer: "Dogs & Cats",
      answerBank: ["Dogs", "Cats", "Dogs & Cats", "Birds"]
    },
    {
      question: "Avocados are a great source of?",
      answer: "All of the answers",
      answerBank: ["Antioxidants", "Potassium", "Fibre", "All of the answers"]
    },
    {
      rightAnswer: function() {
        // alert("yay!");
        $(".dynamicGame").html(
          `<h1>Yay!! Correct!! Good job!!</h1><br> <img src="${rightGif}"/>`
        );
        stop();
        startGame();
        avocadoIndex++;
      }
    },
    {
      wrongAnswer: function() {
        // alert("no!!");
        $(".dynamicGame").html(
          `<h1>Awww, you got the answer wrong :(</h1><br> <img src="${wrongGif}"/>`
        );
        stop();
        startGame();
        avocadoIndex++;
      }
    }
  ];

  // define variables for scoreboard:
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let avocadoIndex = 0;

  //reset function
  let reset = function() {
    correctAnswers = 0;
    wrongAnswers = 0;
    avocadoIndex = 0;
    stop();
    startGame();
  };

  // create a start game function
  function startGame() {
    // timer for slide
    let number = 25;

    let intervalId;

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      number--;

      let answerButton1 = avocadoSlides[avocadoIndex].answerBank[0];
      let answerButton2 = avocadoSlides[avocadoIndex].answerBank[1];
      let answerButton3 = avocadoSlides[avocadoIndex].answerBank[2];
      let answerButton4 = avocadoSlides[avocadoIndex].answerBank[3];

      // while the time is still on, the slide is still active

      $(".dynamicGame").html(`<h2>Time left: ${number} </h2>
      <h1>${avocadoSlides[avocadoIndex].question}</h1>
      <ul class="selection">
      <button class="answer" id="answer1">${answerButton1}</button><br>
      <button class="answer" id="answer2">${answerButton2}</button><br>
      <button class="answer" id="answer3">${answerButton3}</button><br>
      <button class="answer" id="answer4">${answerButton4}</button>
      </ul>`);

      $(".answer").on(
        "click",
        function(e) {
          let chosenAnswer = e.target.id;

          let userCorrect = function() {
            return avocadoSlides[5].rightAnswer();
          };
          let userIncorrect = function() {
            return avocadoSlides[6].wrongAnswer();
          };
          if (chosenAnswer == "answer1") {
            if (answerButton1 == avocadoSlides[avocadoIndex].answer) {
              userCorrect();
              correctAnswers++;
            } else {
              userIncorrect();
              wrongAnswers++;
            }
          } else if (chosenAnswer == "answer2") {
            if (answerButton2 == avocadoSlides[avocadoIndex].answer) {
              userCorrect();
              correctAnswers++;
            } else {
              userIncorrect();
              wrongAnswers++;
            }
          } else if (chosenAnswer == "answer3") {
            if (answerButton3 == avocadoSlides[avocadoIndex].answer) {
              userCorrect();
              correctAnswers++;
            } else {
              userIncorrect();
              wrongAnswers++;
            }
          } else if (chosenAnswer == "answer4") {
            if (answerButton4 == avocadoSlides[avocadoIndex].answer) {
              userCorrect();
              correctAnswers++;
            } else {
              userIncorrect();
              wrongAnswers++;
            }
          }
        }

        // $(".dynamicGame").html(`<h1>${"Yay!! Correct!! Good job!!"}</h1>
        // <img src=${rightAnswer}/>`);
        // how do i compare the clicked answer with the answer
      );

      if (number === 0) {
        stop();
        startGame();
        avocadoIndex++;
        wrongAnswers++;
      }

      if (avocadoIndex == 4) {
        $(".dynamicGame").html(`<p>Wins:${correctAnswers}/5</p><br>
        <p>Loses:${wrongAnswers}/5</p><br>
        <button type="button" id="btn" class="btn btn-success">TRY AGAIN!</BUTTON>`);
        // WHY WONT MY TRY AGAIN BUTTON WORK??!??!!?
        $("#btn").on("click", function() {
          reset();
        });
      }
    }
    function stop() {
      clearInterval(intervalId);
    }

    run();
  }

  // when the submit button is clicked then the game is started
  $(".btn").on("click", function() {
    startGame();
  });
});
