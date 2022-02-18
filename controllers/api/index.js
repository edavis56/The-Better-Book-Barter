const router = require("express").Router();

const bookRoutes = require("./bookRoutes");
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");

router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
