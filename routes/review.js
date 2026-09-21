const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const{validateReview, isLoggedIn, isAuthor} = require("../middleware.js");
const reviewControllers = require("../controllers/reviews.js");


//  post review route
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewControllers.createReview));

// delete review route
router.delete("/:reviewId",isLoggedIn,isAuthor, wrapAsync(reviewControllers.destroyReview));

module.exports = router;