// the function does not run until the HTML is done loading
$(document).ready(function() {
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
      ],
      rightAnswer: "https://media.giphy.com/media/fs68M1NGzYwv0aQmhO/giphy.gif",
      wrongAnswer: "https://media.giphy.com/media/8BNNGw8WcMivS/giphy.gif"
    },
    {
      question: "What is an Avocado,exactly?",
      answer: "Fruit",
      answerBank: ["Fruit", "Vegetable", "Legume", "Meat"],
      rightAnswer: "https://media.giphy.com/media/eLYM4VsSRtqCuJuiD4/giphy.gif",
      wrongAnswer: "https://media.giphy.com/media/VILJHh5AodVIs/giphy.gif"
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
      ],
      rightAnswer: "https://media.giphy.com/media/xT9IgiIVWWt2S5fXNu/giphy.gif",
      wrongAnswer: "https://media.giphy.com/media/3oz8xDzuVDbKoU4shi/giphy.gif"
    },
    {
      question: "Which animals are avocados toxic too?",
      answer: "Dogs & Cats",
      answerBank: ["Dogs", "Cats", "Dogs & Cats", "Birds"],
      rightAnswer: "https://media.giphy.com/media/d1FL4zXfIQZMWFQQ/giphy.gif",
      wrongAnswer: "https://media.giphy.com/media/Wte08TYWDjzKU/giphy.gif"
    },
    {
      question: "Avocados are a great source of?",
      answer: "All of the answers",
      answerBank: ["Antioxidants", "Potassium", "Fibre", "All of the answers"],
      rightAnswer: "https://media.giphy.com/media/OgfejiBYdTHXO/giphy.gif",
      wrongAnswer: "https://media.giphy.com/media/jR3DmiapGtmY8/giphy.gif"
    }
  ];

  // define variables for scoreboard:
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let avocadoIndex = 0;
  let startButton; //true or false

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

      // while the time is still on, the slide is still active

      $(".dynamicGame").html(`<h2>${"Time left: "}${number} </h2>
      <h1>${avocadoSlides[avocadoIndex].question}</h1>
      <ul class=${"selection"}><button>${avocadoSlides[avocadoIndex].answerBank[0]}</button><br>
      <button>${avocadoSlides[avocadoIndex].answerBank[1]}</button><br>
      <button>${avocadoSlides[avocadoIndex].answerBank[2]}</button><br>
      <button>${avocadoSlides[avocadoIndex].answerBank[3]}</button>
      </ul>`);

      if (number === 0) {
        stop();

        alert("Time Up!");
      }
    }
    function stop() {
      clearInterval(intervalId);
    }
    run();

    // create question on slide

    // let mainQuestion = $("<h1>");
    // mainQuestion.attr("data-letter", avocadoIndex);
    // mainQuestion.text(avocadoSlides[avocadoIndex].question);
    // $(".dynamicGame").append(mainQuestion);
  }

  // startGame();

  // avocadoSlides.forEach(function(obj) {
  //   console.log(obj);
  // });

  /*
  // 1. Create a for-loop to iterate through the letters array.
  letters.forEach(function(letter) {
    // Inside the loop...

    // 2. Create a variable named "letterBtn" equal to $("<button>");
    let letterBtn = $("<button>");
    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    letterBtn.addClass("letter-button letter letter-button-color");
    // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"
    letterBtn.attr("data-letter", letter);
    // 5. Then give each "letterBtn" a text equal to "letters[i]".
    letterBtn.text(letter);
    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    $("#buttons").append(letterBtn);
  });

  */

  // when the submit button is clicked then the game is started
  $(".btn").on("click", function() {
    startGame();
  });
});
