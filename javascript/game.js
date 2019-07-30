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

  // create a start game function
  function startGame() {
    // insert game stuff
  }

  // when the submit button is clicked then the game is started
  $(".btn").on("click", function() {
    $(this).button("hide");
  });
});
