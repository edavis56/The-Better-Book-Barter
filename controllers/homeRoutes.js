const router = require("express").Router();

router.get("/user/:id", (req, res) => {
  let username = "Rich Overholt";

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

router.get("/submit", (req, res) =>
  res.render("submitBook", { loggedIn: true })
);

router.get("*", (req, res) =>
  res.status(200).send("Routes are currently under development")
);
