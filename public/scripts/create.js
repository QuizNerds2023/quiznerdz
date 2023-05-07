/* eslint-disable import/extensions */
import { fetchLoggedInUser, signupAndLoginHandler, setNav } from "./global.js";

const main = async () => {
  const user = await fetchLoggedInUser();
  if (user) return window.location.assign("/user.html");

  setNav();
  document
    .querySelector("#create-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      signupAndLoginHandler("/api/users", event.target);
    });
};

main();

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>{
    container.classList.add('right-panel-active')
})
    
signInButton.addEventListener('click', () =>{
    container.classList.remove('right-panel-active')
});