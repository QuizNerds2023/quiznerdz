document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById("quiz-form"); // get the quiz form element
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent the default form submission behavior
  
      // get the user's selections for each question
      const q1Answer = form.querySelector('input[name="q1"]:checked').value;
      const q2Answer = form.querySelector('input[name="q2"]:checked').value;
      const q3Answer = form.querySelector('input[name="q3"]:checked').value;
      const q4Answer = form.querySelector('input[name="q4"]:checked').value;
      const q5Answer = form.querySelector('input[name="q5"]:checked').value;
      const q6Answer = form.querySelector('input[name="q6"]:checked').value;
      // store the user's selections in an array
      const answers = [q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer];
  
      // calculate the most frequently occurring selection
      let mostCommonAnswer = null;
      let highestCount = 0;
  
      for (let i = 0; i < answers.length; i++) {
        let count = 0;
        for (let j = 0; j < answers.length; j++) {
          if (answers[j] === answers[i]) {
            count++;
          }
        }
        if (count > highestCount) {
          highestCount = count;
          mostCommonAnswer = answers[i];
        } else if (count === highestCount) { // check for ties
          // randomly choose which answer to use as tie-breaker
          if (Math.random() < 0.5) {
            mostCommonAnswer = answers[i];
          }
        }
        
      }
  
      // log the most frequently occurring selection to the console
      let paragraph = document.createElement('h1')
      document.body.appendChild(paragraph);
      let result = `You are a ${mostCommonAnswer}`;
      paragraph.append(result)
    });
  });
  