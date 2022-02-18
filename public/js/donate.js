const submitEl = document.getElementById("donate-btn");
const formEl = document.getElementById("donate-book-form");
const isbnEl = document.getElementById("donate-isbn");
const titleEl = document.getElementById("donate-title");
const authorEl = document.getElementById("donate-author");
const genreEl = document.getElementById("donate-genre");
const ratingEl = document.getElementById("donate-rating");
const conditionEl = document.getElementById("donate-condition");

// const testIsbn = 0618153985;

let isbn;

async function populateForm() {
  if (isbn && isbn === isbnEl.value) {
    return;
  } // no changes made

  isbn = isbnEl?.value;

  if (!isbn || isbn < 100000000) {
    return alert("Please enter a valid ISBN");
  }

  const response = await fetch(
    new Request(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`
    )
  );

  if (!response.ok) {
    return newIsbn();
  }

  const data = await response.json();

  if (!data[Object.keys(data)[0]]?.title) {
    return newIsbn();
  }

  titleEl.value = data[Object.keys(data)[0]]?.title;
  authorEl.value = data[Object.keys(data)[0]]?.authors[0]?.name;

  titleEl.disabled = true;
  authorEl.disabled = true;

  return isbnFound();
}

function newIsbn() {
  alert("ISBN not found, please enter new book or fix your ISBN");

  titleEl.disabled = false;
  authorEl.disabled = false;

  return isbnFound();
}

function isbnFound() {
  genreEl.disabled = false;
  ratingEl.disabled = false;
  conditionEl.disabled = false;
}

const donateBook = async (event) => {
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

  if (formEl.checkValidity()) {
    const response = await fetch("./api/books/", {
      method: "POST",
      body: JSON.stringify({
        isbn,
        title,
        author,
        genre,
        rating,
        book_condition: condition,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Thank you, your book has been donated");
      window.location.href = "./bookshelf";
      return;
    }

    alert("An error has occurred, please try again.");
  }
};
submitEl.addEventListener("click", donateBook);

document.onreadystatechange = function () {
  if (document.readyState == "complete" && isbnEl.value) {
    populateForm();
  }
};
