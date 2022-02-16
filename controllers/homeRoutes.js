const { route } = require(".");

const router = require("express").Router();

router.get("/user", (req, res) => {
  // MyBookshelf Page
  let username = "Rich Overholt"; // get from req.session

  let donatedBooks = [
    {
      date: "02/10/2022",
      title: "This is the title of my most recent book",
      author: "LastName, FirstName",
    },
    {
      date: "02/05/2022",
      title: "This is the title of my penultimate book",
      author: "LastName, FirstName",
    },
    {
      date: "02/01/2022",
      title: "This is the title of my first book",
      author: "LastName, FirstName",
    },
  ];

  let receivedBooks = [
    {
      date: "02/10/2022",
      title: "This is the only book I've checked out",
      author: "LastName, FirstName",
    },
  ];

  let donatedCount = donatedBooks.length;
  let receivedCount = receivedBooks.length;
  let availableCount = donatedCount - receivedCount;

  let rankings = [
    {
      info: `# of books donated: ${donatedCount} (5th / 17 users)`,
    },
    {
      info: `# of books received: ${receivedCount} (16th / 17 users)`,
    },
    {
      info: `Average rating of books donated: 3.26 (5th / 17 users)`,
    },
  ];

  res.render("myBookshelf", {
    username,
    donatedBooks,
    receivedBooks,
    donatedCount,
    receivedCount,
    availableCount,
    rankings,
    loggedIn: true,
  });
});

router.get(
  "/submit",
  (
    req,
    res // Submit/Donate a book
  ) => res.render("submitBook", { loggedIn: true })
);

router.get("/genre", (req, res) => res.render("genre", { loggedIn: true }));

router.get("/condition", (req, res) =>
  res.render("condition", { loggedIn: true })
);

router.get('/inventory', async (req, res) => {
  try {
    const bookData = await Book.findAll({});

    const books = bookData.map((book) => book.get({ plain: true }));

    res.render("book-inventory", {
      books,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/book/:id", withAuth, async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id);
    // May want to include user data here?

    if (!bookData) {
      res.status(404).json({
        message: "Book not found!",
      });
      return;
    }

    const book = bookData.get({ plain: true });
    console.log(book);

    res.render("book-details", {
      ...book,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("*", (req, res) =>
  res.status(200).send("Routes are currently under development")
);

module.exports = router;
