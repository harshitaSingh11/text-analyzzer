let textareaEl = document.querySelector("#text");
let text = null;
let data = {
  WORDS: 0,
  SENTENCES: 0,
  UPPERCASES: 0,
  LOWERCASES: 0,
  SPACES: 0,
  DIGITS: 0,
  VOWELS: 0,
  CONSONANTS: 0,
};

const findLength = (item) => (item == null ? 0 : item.length);

const setText = () => {
  text = textareaEl.value;
  //  number of new Sentences   text.match(/\056/g)
  //  number of uppercaes       text.match(/[A-Z]/g)
  //  number of lowercase       text.match(/[a-z]/g)
  //  number of spaces          text.match(/\s/g)
  //  number of digits          text.match(/\d/g)
  //  number of words           text.match(/[a-zA-Z]+/g)
  //  number of vowels          text.match(/[aeiou]/gi)
  // numbers of consonant      text.match(/[bcdfghjklmnpqrstvwxyz]/gi)
  if (text != null) {
    data.SENTENCES = findLength(text.match(/\056/g));
    data.WORDS = findLength(text.match(/[a-zA-Z]+/g));
    data.SPACES = findLength(text.match(/\s/g));
    data.UPPERCASES = findLength(text.match(/[A-Z]/g));
    data.LOWERCASES = findLength(text.match(/[a-z]/g));
    data.DIGITS = findLength(text.match(/\d/g));
    data.VOWELS = findLength(text.match(/[aeiou]/gi));
    data.CONSONANTS = findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
  }
  localStorage.setItem("data", JSON.stringify(data));

  window.location = "info.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data = getData();
  let htmlContent = "";
  for (item in data) {
    htmlContent += `<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
      </div>`;
  }
  document.querySelector(".info-wrapper").innerHTML = htmlContent;
};
