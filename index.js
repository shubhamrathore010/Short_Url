require('dotenv').config();
const express  = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const { connectToMongoDB } = require('./connect');
const { restToLoggedUserOnly, checkAuth } = require('./middlewares/auth')
const URL = require('./models/url')

const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')

const app = express();
app.use(express.static(path.join(__dirname,'public')))

const port  =  process.env.PORT || 5000;

connectToMongoDB()

.then(() => console.log('MongoDb connected'))
.catch((err) => console.log(err))

app.set("view engine", "ejs");
app.set('views', path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());



app.use("/url", restToLoggedUserOnly, urlRoute);
app.use('/user',  userRoute);
app.use('/',checkAuth, staticRoute);

app.get("/url/:shortId",async (req, res) => {
const shortId = req.params.shortId;
const entry = await URL.findOneAndUpdate(
{
    shortId,
},
 { $push: {
    visitHistory: { 
        timestamp: Date.now(),
    }
  },
}, { new: true });

if (!entry) {
  return res.status(404).send('Short URL not found');
}
res.redirect(entry.redirectURL);
})

app.listen(port, () => console.log(`Server running ${port}`));