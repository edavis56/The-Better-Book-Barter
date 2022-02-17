const submitEl = document.getElementById("donate-btn");
const formEl = document.getElementById("donate-book-form");
const isbnEl = document.getElementById("donate-isbn");
const titleEl = document.getElementById("donate-title");
const authorEl = document.getElementById("donate-author");
const genreEl = document.getElementById("donate-genre");
const ratingEl = document.getElementById("donate-rating");
const conditionEl = document.getElementById("donate-condition");

let isbn;

async function populateForm() {
  //   if (isbn && isbn === isbnEl.value) {
  //     return;
  //   } // no changes made

  isbn = isbnEl?.value;

  if (!isbn || isbn < 100000000) {
    return alert("Please enter a valid ISBN");
  }

  //   const response = await fetch(
  //     new Request(
  //       "https://openlibrary.org/api/books?bibkeys=ISBN:0618153985&jscmd=data&format=json"
  //     )
  //   );

  //   if (!response.ok) {
  //     return newIsbn();
  //   }

  //   const data = await response.json();

  //   if (!response.ok) {
  //     return newIsbn();
  //   }

  //   titleEl.value = data[Object.keys(data)[0]].title;
  //   authorEl.value = data[Object.keys(data)[0]].authors[0].name;

  titleEl.value = "Fake title";
  authorEl.value = "Fake Author";

  titleEl.disabled = true;
  authorEl.disabled = true;

  return isbnFound();
}

function newIsbn() {
  alert("ISBN not found, please enter new book or fix your isbn");

  titleEl.disabled = false;
  authorEl.disabled = false;

  return isbnFound();
}

function isbnFound() {
  genreEl.disabled = false;
  ratingEl.disabled = false;
  conditionEl.disabled = false;
}

const donateBook = (event) => {
  event.preventDefault();

  formEl.reportValidity();

  if (!isbn) {
    return alert("ISBN must be entered");
  }
  let title = titleEl.value,
    author = authorEl.value,
    genre = genreEl.value,
    rating = ratingEl.value,
    condition = conditionEl.value;

  console.log(
    "isbn: " +
      isbn +
      " title: " +
      title +
      " author: " +
      author +
      " genre: " +
      genre +
      " rating: " +
      rating +
      " condition: " +
      condition
  );
  console.log(
    "Donate doesn't actually work yet, but all the validation should (except the API which I've turned off so I don't issue too many queries!"
  );

  if (formEl.checkValidity()) {
    alert(
      "Donate doesn't actually work yet, but all the validation should (except the API which I've turned off so I don't issue too many queries!"
    );
  }
};

submitEl.addEventListener("click", donateBook);
