const { Book, Condition, Genre } = require("./../models");
const applyOrdinalSuffix = require("./../utils/aos");

const router = require("express").Router();

router.get("/", (req, res) => res.render("homepage", { loggedIn: true }));

router.get("/admin", (req, res) => res.render("admin", {loggedIn: true}));


router.get("/bookshelf", async (req, res) => {
  // MyBookshelf Page
  let username = "Rich"; // get from req.session
  let user_id = 4; // get from req.session

  let bookData = await Book.findAll({ where: { donor_id: user_id } });
  let donatedBooks = bookData.map((book) => book.get({ plain: true }));

  bookData = await Book.findAll({ where: { rec_id: user_id } });
  let receivedBooks = bookData.map((book) => book.get({ plain: true }));

  let donatedCount = donatedBooks.length;
  let receivedCount = receivedBooks.length;
  let availableCount = donatedCount - receivedCount;

  let donorPlace = await Book.getDonorPlace(donatedCount);
  donorPlace = applyOrdinalSuffix(donorPlace);

  let donorTotal = await Book.getDonorTotal();

  let recPlace = await Book.getRecPlace(receivedCount);
  recPlace = applyOrdinalSuffix(recPlace);

  let recTotal = await Book.getRecTotal();

  let avgDonatedRatings = await Book.getAvgDonatedRatings(user_id);
  let avgDonatedPlace = await Book.getAvgDonatedPlace(avgDonatedRatings);
  avgDonatedPlace = applyOrdinalSuffix(avgDonatedPlace);

  let ranking = {
    donated: {
      place: donorPlace,
      totalDonors: donorTotal,
    },
    received: {
      place: recPlace,
      totalReceivers: recTotal,
    },
    averages: {
      donatedRatings: avgDonatedRatings,
      donatedPlace: avgDonatedPlace,
    },
  };

  res.render("myBookshelf", {
    username,
    donatedBooks,
    receivedBooks,
    donatedCount,
    receivedCount,
    availableCount,
    ranking,
    loggedIn: true,
  });
});

// Submit/Donate a book
router.get("/donate", async (req, res) => {
  let genreData = await Genre.findAll({ order: [["name", "ASC"]] });
  let genres = genreData.map((genre) => genre.get({ plain: true }));

  let conditionData = await Condition.findAll({ order: [["sequence", "ASC"]] });
  let conditions = conditionData.map((condition) =>
    condition.get({ plain: true })
  );

  res.render("donateBook", { genres, conditions, loggedIn: true });
});

router.get("/genre", (req, res) => res.render("genre", { loggedIn: true }));

router.get("/condition", (req, res) =>
  res.render("condition", { loggedIn: true })
);

router.get("/inventory", async (req, res) => {
  try {
    const bookData = await Book.findAll({
      group: ["isbn"],
    });

    const books = bookData.map((book) => book.get({ plain: true }));

    res.render("book-inventory", {
      ...books,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/book/:id", async (req, res) => {
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

module.exports = router;
