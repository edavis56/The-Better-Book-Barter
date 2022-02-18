const router = require("express").Router();
const { User, Book } = require("../../models");
const withAuth = require("../../utils/auth");

// /api/books

// get functions
// render all books to inventory page
// router.get("/", withAuth, async (req, res) => {
//   try {
//     const bookData = await Book.findAll();

//     const books = bookData.map((book) => book.get({ plain: true }));

//     res.render("book-inventory", {
//       books,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // when selecting a specific book
// router.get("/book/:id", withAuth, async (req, res) => {
//   try {
//     const bookData = await Book.findByPk(req.params.id);
//     // May want to include user data here?

//     if (!bookData) {
//       res.status(404).json({
//         message: "Book not found!",
//       });
//       return;
//     }

//     const book = bookData.get({ plain: true });
//     console.log(book);

//     res.render("book", {
//       ...book,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// create, update, and delete entries
// book submission
router.post("/", withAuth, async (req, res) => {
  try {
    const newBook = await Book.create({
      ...req.body,
      donor_id: req.session.user_id,
    });

    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update book data
// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const bookData = await Book.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!bookData) {
//       res.status(404).json({ message: "No book found with this id!" });
//       return;
//     }

//     res.status(200).json(bookData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//checkout a book
router.put("/checkout", withAuth, async (req, res) => {
  let rec_dt = new Date();

  console.log("====================================================");
  console.log(req.session.user_id);
  console.log(req.body.id);
  console.log(rec_dt);
  // try {
  const bookData = await Book.update(
    { rec_id: req.session.user_id, rec_dt },
    {
      where: {
        id: req.body.id,
      },
    }
  );

  if (!bookData) {
    res
      .status(404)
      .json({ message: "No book found with this id: " + req.body.id });
    return;
  }

  res.status(200).json(bookData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});


// delete book data, probably don't need
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const bookData = await Book.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bookData) {
      res.status(404).json({ message: "No book found with this id!" });
      return;
    }

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
