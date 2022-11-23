const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controller/userController");

const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

// Required Routes

router.route("/").post(registerUser); 
// router.route("/").post(registerUser).get(protect, allUsers); //router.route('/').get(alluser);
router.route("/").get(protect, allUsers); 
router.post("/login", authUser); //router.route('/').post("/login", authUser);

module.exports = router;
