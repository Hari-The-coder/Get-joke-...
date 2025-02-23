let jockContainer = document.querySelector("#jock");
let btns = document.querySelector("#btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"; // Store URL as string
let p = document.querySelector("#id");

let getJoke = () => {
   // Use fetch to get the joke and return it as a promise
   fetch(url)
      .then(response => response.json()) // Parse response as JSON
      .then(json => {
         // Check if the joke is a single part or two-part joke
         // if (json.type === "single") {
         //    jockContainer.textContent = json.joke; // If it's a single joke
         // } else if (json.type === "twopart") {
         //    jockContainer.textContent = `${json.setup} - ${json.delivery}`; // If it's a two-part joke
         // }
         jockContainer.textContent =json.joke;
         jockContainer.classList.add("fade");


 

      })
      .catch(error => {
         jockContainer.textContent = "Sorry, something went wrong.";
         console.error("Error fetching joke:", error);
      });
};

btns.addEventListener("click", getJoke); // Attach click event to fetch joke

getJoke(); // Call the function once when the page loads
