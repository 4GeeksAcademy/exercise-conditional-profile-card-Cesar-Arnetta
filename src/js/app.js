import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */

//esto se encarga del fondo

function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let nameCondition =
    typeof variables.name === "string"
      ? `${variables.name}`
      : "Ingresa tu nombre";

  let lastNameCondition =
    typeof variables.lastName === "string" ? `${variables.lastName}` : "";

  let roleCondition =
    typeof variables.role === "string"
      ? `${variables.role}`
      : "A qué te dedicas";

  let countryCondition =
    typeof variables.country === "string" ? `${variables.country}` : "Country";

  let cityCondition =
    typeof variables.city === "string" ? `${variables.city}` : "City";

  let twitterCondition =
    typeof variables.twitter === "string" ? `${variables.twitter}` : "Twitter";

  let githubCondition =
    typeof variables.github === "string" ? `${variables.github}` : "Github";

  let linkedinCondition =
    typeof variables.linkedin === "string"
      ? `${variables.linkedin}`
      : "Linkedin";

  let instagramCondition =
    typeof variables.instagram === "string"
      ? `${variables.instagram}`
      : "Instagram";

  let socialMediaPositionCondition =
    variables.socialMediaPosition == "right"
      ? "position-left"
      : `${variables.socialMediaPosition}`;

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${nameCondition} ${lastNameCondition}</h1>
          <h2>${roleCondition}</h2>
          <h3>${countryCondition} ${cityCondition}</h3>
          <ul class="${socialMediaPositionCondition}">
            <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a>${twitterCondition}</li>
            <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a>${githubCondition}</li>
            <li><a href="https://linkedin.com/school/4geeksacademy"><i class="fab fa-linkedin"></i></a>${linkedinCondition}</li>
            <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a>${instagramCondition}</li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
