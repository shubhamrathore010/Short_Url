const express = require("express");
// const {restToLoggedUserOnly} = require('../controllers')
const { 
    handleGenerateNewShortURL,
    handleGetAnalytics,
    restToLoggedUserOnly
    } = require('../controllers/url')
 
const router = express.Router();

router.post('/', handleGenerateNewShortURL);
 
router.get('/analytics/:shortId', handleGetAnalytics);

// router.post("/url", restToLoggedUserOnly, async (req, res) => {
//   const shortUrl = await URL.create({
//     redirectUrl: req.body.longUrl,
//     createdBy: req.user._id,
//   });
//   res.redirect("/");
// });
router.post('/url',restToLoggedUserOnly)


module.exports = router;