// const { shortid } = require("shortid");
const shortid = require('shortid');
const URL = require("../models/url")

async function handleGenerateNewShortURL(req, res) {
   const body = req.body;
   if(!body.url) return res.status(400).json({ error: 'url is required' })
    const shortID = shortid.generate(6);
  //  const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });
    return res.render('home', {
      id: shortID, 
    });
}

async function handleGetAnalytics(req, res){
  if(!result) {
    return res.status(404).json({ message: "URL not found"});
  }
  
  const  shortId = req.params.shortId;
  const result =  await URL.findOne( { shortId });
  return res.json({ 
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
});
}

async function restToLoggedUserOnly(req, res){

  const shortUrl = await URL.create({
    redirectUrl: req.body.longUrl,
    createdBy: req.user._id,
  });
  res.redirect("/");
}


module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    restToLoggedUserOnly,
}   