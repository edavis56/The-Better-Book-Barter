const cancelButtonHandler = (event) => {
  event.preventDefault();
  window.location.href = "./inventory?inStock=true&noStock=true";
};

const checkoutButtonHandler = async (event) => {
  event.preventDefault();

  const formEl = document.querySelector("form");
  console.log(formEl);
  console.log(formEl.id);

  if (formEl.checkValidity()) {
    const response = await fetch("./api/books/checkout", {
      method: "PUT",
      body: JSON.stringify({
        id: formEl.id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("You have successfully checked out the book!");
      window.location.href = "./inventory?inStock=true&noStock=true";
      return;
    }

    console.log(response);
    console.log(response?.err);
    alert("A problem occurred, please try again.");
  } else {
    alert("Problem occurred, please try again.");
  }
};

document
  .getElementById("checkout-btn")
  .addEventListener("click", checkoutButtonHandler);

document
  .getElementById("cancel-btn")
  .addEventListener("click", cancelButtonHandler);
