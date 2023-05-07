/* eslint-disable import/extensions */
import { fetchLoggedInUser, handleFetch, setNav } from "./global.js";

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);

  const [secret, _err] = await handleFetch("/api/logged-in-secret");
  console.log("secret, _err:", secret, _err);
  if (secret) {
    document.querySelector("#secret-message").textContent = secret.msg;
  }
};

main();


document.addEventListener('DOMContentLoaded', function() {
  const resultElement = document.getElementById('result');
  const questions = document.querySelectorAll('.question');
  const form = document.getElementById('quiz-form');
  const nextButtons = document.querySelectorAll('.question button[type="submit"]');

  function showQuestion(questionNumber) {
    for (let i = 0; i < questions.length; i++) {
      if (i === questionNumber) {
        questions[i].style.display = 'block';
      } else {
        questions[i].style.display = 'none';
      }
    }
  }
  showQuestion(0);

  for (let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener('click', function(e) {
      e.preventDefault();
      const currentQuestion = e.target.parentNode;
      const nextQuestion = currentQuestion.nextElementSibling;
      showQuestion(Array.prototype.indexOf.call(questions, nextQuestion));
    });
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const answers = [];
      
    for (let i = 1; i <= questions.length; i++) {
      const question = document.querySelector(`#question-${i}`);
      const answerInput = question.querySelector('input[value="${answer}"]:checked');
      //  let answer = null;
       console.log(answerInput)
      if (answerInput) {
        console.log(answerInput.value)
        answers.push(answerInput.value);
      }
    }
    
    const counts = {};
    for (let i = 0; i < answers.length; i++) {
      answerInput = answers[i]; 
      counts[answerInput] = counts[answerInput] ? counts[answerInput] + 1 : 1;
    }
  
    console.log(answers)
    let mostCommonAnswer = null;
    let highestCount = 0;
    for (const answer in counts) {
      if (counts.hasOwnProperty(answer)) {
        if (counts[answer] > highestCount) {
          highestCount = counts[answer];
          mostCommonAnswer = answer;
        } else if (counts[answer] === highestCount) {
          if (Math.random() < 0.5) {
            mostCommonAnswer = answer;
          }
        }
      }
    }
    console.log(mostCommonAnswer)
    let resultMessage = null;
switch (mostCommonAnswer) {
  case 'ben':
    resultMessage = `Congratulations on receiving the BEN, which signifies that you possess a unique combination of qualities that are highly valued in various fields. As an adventurous person, you are likely to seek out new experiences and embrace challenges with enthusiasm. Your insightful nature means that you have a keen ability to understand complex issues and see things from multiple perspectives. Finally, your GOAT (Greatest of All Time) lecture style suggests that you have a natural talent for delivering compelling and memorable presentations that inspire and engage your audience.`;
    break;
  case 'motun':
    resultMessage = `Congratulations on being given the title of "Motun," which signifies that you possess a unique set of qualities that are highly valued. As someone who is empathetic, you have a remarkable ability to understand and relate to others, and are able to offer support and guidance when needed. Your kindhearted nature means that you approach every situation with compassion and caring, and are always willing to lend a helping hand. Finally, your ingenuity suggests that you have a talent for finding innovative solutions to problems and challenges, and are able to think creatively in any situation.`;
    break;
  case 'carmen':
    resultMessage = `Congratulations on being recognized as "Carmen," a title that reflects your bubbly, chill, and helpful nature. You bring joy and positivity to every situation, stay calm in the face of challenges, and always lend a hand to those in need. Your kindhearted nature means that you are able to connect with people from all walks of life, and your ability to see the good in others is truly inspiring.`;
    break;
  default:
    resultMessage = `Congratulations on being recognized for your unique set of qualities and talents! While we may not have a specific title for you, please know that your contributions and abilities are truly valued and appreciated. Keep being awesome!`;
    break;
   
}
   
console.log(resultMessage);
resultElement.innerText = resultMessage;
 resultElement.textContent = resultMessage;
  })
})
