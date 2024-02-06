const quoteText = document.querySelector('.text');
const btn = document.querySelector('.btn');
const bookName = document.querySelector('.book');
const chapter = document.querySelector('.chapter');
const verse = document.querySelector('.verse');
const topText = document.querySelector('.top-text');

function topTextChange() {
  topText.innerHTML = '';
}

function votd() {
  fetch('https://labs.bible.org/api/?passage=votd&type=json')
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerHTML = `"${result[0].text}"`;
      bookName.innerHTML = result[0].bookname + '&nbsp;';
      chapter.innerHTML = result[0].chapter + ':';
      verse.innerHTML = result[0].verse;
    });
}

document.addEventListener('DOMContentLoaded', votd);

function randomText() {
  fetch('https://labs.bible.org/api/?passage=random&type=json')
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerHTML = `"${result[0].text}"`;
      bookName.innerHTML = result[0].bookname + '&nbsp;';
      chapter.innerHTML = result[0].chapter + ':';
      verse.innerHTML = result[0].verse;
    });
}

btn.addEventListener('click', randomText);
btn.addEventListener('click', topTextChange);
