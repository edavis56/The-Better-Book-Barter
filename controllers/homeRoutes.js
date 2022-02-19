const { User, Book, Condition, Genre } = require("./../models");
const { withAuth, applyOrdinalSuffix, format_date } = require("./../utils");

const router = require("express").Router();

//login dont know if this will work
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login", { loggedIn: false });
});

router.get("/", (req, res) =>
  res.render("homepage", { loggedIn: req.session.loggedIn })
);

router.get("/admin", withAuth, async (req, res) => {
  let genreData = await Genre.findAll({ order: [["name", "ASC"]] });
  let genres = genreData.map((genre) => genre.get({ plain: true }));
  res.render("admin", { genres, loggedIn: req.session.loggedIn });
});

// MyBookshelf Page
router.get("/bookshelf", withAuth, async (req, res) => {
  let user_id = req.session.user_id;
  let userData = await User.findByPk(user_id);
  let userInfo = userData.get({ plain: true });
  let username = userInfo.username;

  let bookData = await Book.findAll({ where: { donor_id: user_id } });
  let donatedBooks = bookData.map((book) => book.get({ plain: true }));

  bookData = await Book.findAll({ where: { rec_id: user_id } });
  let receivedBooks = bookData.map((book) => book.get({ plain: true }));

  let donatedCount = donatedBooks.length;
  let receivedCount = receivedBooks.length;
  let availableCount = donatedCount - receivedCount;

  let donorPlace = donatedCount
    ? applyOrdinalSuffix(await Book.getDonorPlace(donatedCount))
    : 0;
  let avgDonatedRatings = donatedCount
    ? await Book.getAvgDonatedRatings(user_id)
    : 0;
  let avgDonatedPlace = donatedCount
    ? applyOrdinalSuffix(await Book.getAvgDonatedPlace(avgDonatedRatings))
    : 0;

  let recPlace = receivedCount
    ? applyOrdinalSuffix(await Book.getRecPlace(receivedCount))
    : 0;

  let donorTotal = await Book.getDonorTotal();
  let recTotal = await Book.getRecTotal();

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
    loggedIn: req.session.loggedIn,
  });
});

// Receive a book
router.get("/checkout", withAuth, async (req, res) => {
  if (!req?.query?.id) {
    console.log("CHECKOUT MUST BE CALLED WITH '?id=n");
    res.render("homepage", { loggedIn: req.session.loggedIn });
    return;
  }

  let bookData = await Book.findByPk(req.query.id);
  book = bookData?.get({ plain: true });

  if (!book) {
    console.log("CANNOT CHECKOUT BOOKS THAT WE DONT HAVE IN DB: " + book.id);
    res.render("homepage", { loggedIn: req.session.loggedIn });
    return;
  }

  book.stockCount = await Book.getStockCount(book.isbn);

  if (book.stockCount < 1) {
    console.log("CANNOT CHECKOUT BOOKS THAT WE DONT HAVE IN STOCK: " + book.id);
    res.render("homepage", { loggedIn: req.session.loggedIn });
    return;
  }

  res.render("checkout", { book, loggedIn: req.session.loggedIn });
});

// Submit/Donate a book
router.get("/donate", withAuth, async (req, res) => {
  let genreData = await Genre.findAll({ order: [["name", "ASC"]] });
  let genres = genreData.map((genre) => genre.get({ plain: true }));

  let conditionData = await Condition.findAll({ order: [["sequence", "ASC"]] });
  let conditions = conditionData.map((condition) =>
    condition.get({ plain: true })
  );

  let book;

  if (req?.query?.id) {
    let bookData = await Book.findByPk(req.query.id);
    book = bookData?.get({ plain: true });

    book.stockCount = await Book.getStockCount(book.isbn);
  }

  res.render("donateBook", {
    book,
    genres,
    conditions,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/genre", (req, res) =>
  res.render("genre", { loggedIn: req.session.loggedIn })
);

router.get("/condition", (req, res) =>
  res.render("condition", { loggedIn: req.session.loggedIn })
);

router.get("/inventory", withAuth, async (req, res) => {
  try {
    let genreData = await Genre.findAll({ order: [["name", "ASC"]] });
    let genres = genreData.map((genre) => genre.get({ plain: true }));

    let whereClause = {};

    // if(req.query?.rating) {
    //   whereClause.rating = req.query.rating;
    // } else if (req.query?.genre) {
    //   whereClause.genre = req.query.genre;
    // }
    // if (req.query?.rating && req.query?.genre) {
    //   whereClause.query = (req.query.rating && req.query.genre);
    // }
    if (req.query.genre) {
      whereClause.genre = req.query.genre;
    }

    if (req.query.rating) {
      whereClause.rating = req.query.rating;
    }

    console.log(whereClause);
    console.log(req.query.rating);
    console.log(req.query.genre);
    console.log(req.query.inStock);
    console.log(req.query.noStock);

    let books = [];

    if (req.query.inStock === "true" || req.query.noStock === "true") {
      const bookData = await Book.findAll({
        where: whereClause,
        group: ["isbn"],
      });

      books = bookData.map((book) => book.get({ plain: true }));
      // books.forEach((book) => {
      //   book.stockCount = await Book.getStockCount(book.isbn);
      // });

      for (book of books) {
        book.stockCount = await Book.getStockCount(book.isbn);
      }
      if (req.query.inStock === "false") {
        books = books.filter((book) => !book.stockCount);
      }
      if (req.query.noStock === "false") {
        books = books.filter((book) => book.stockCount);
      }
    }

    res.render("book-inventory", {
      isInStock: req.query.inStock === "true",
      isNoStock: req.query.noStock === "true",
      books,
      genres,
      loggedIn: req.session.loggedIn,
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
    book.stockCount = await Book.getStockCount(book.isbn);
    console.log(book);

    res.render("book-details", {
      ...book,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
