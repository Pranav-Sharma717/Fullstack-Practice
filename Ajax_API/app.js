// NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!
// axios is loaded via CDN in HTML
// const req = new XMLHttpRequest();

// req.onload = function () {
//   console.log("IT LOADED!!");
//   const data = JSON.parse(this.responseText);
//   console.log(data.name, data.height);
// };

// req.onerror = function () {
//   console.log("ERROR!!!!");
//   console.log(this);
// };

// // req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

fetch("https://v2.jokeapi.dev/")
  .then(res => {
    console.log("Resolved!", res);
    // res.json().then((data) => console.log("JSON DONE", data));
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("https://v2.jokeapi.dev/")
  })
  .then((res) => {
    console.log("SECOND REQUEST RESOLVED");
    return res.json();
  })
  .catch(e => {
    console.log("ERR", e);
  })
//////////////////////////////////////////////////////////////
//AXIOS
axios.get("https://v2.jokeapi.dev/")