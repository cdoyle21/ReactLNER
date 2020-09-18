require('dotenv').config()
const express = require('express')
const cheerio = require('cheerio')
const puppeteer = require('puppeteer')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config')

const url = 'https://football.mitoo.co.uk/TeamHistAll.cfm?CI=326&TblName=Matches&LeagueCode=MDX2019&DivisionID=344'
const app = express()

app.use(express.static('../client/public'));

puppeteer
    .launch()
    .then(browser => browser.newPage())
    .then(page => {
        return page.goto(url).then(function() {
            return page.content();
        });
    })
    .then(html => {
        const $ = cheerio.load(html);
        const newsHeadlines = [];
        $('table:nth-last-child(2) tr td span').each(function() {
            newsHeadlines.push({
                title: $(this).text().trim()
            });
        });

        app.get('/fixtures', (req, res) => res.send(newsHeadlines))
        //console.log(newsHeadlines);
    })
    //.catch(console.error);

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

app.use(cors({
    origin: CLIENT_ORIGIN
}))

app.use(formData.parse())

app.get('/wake-up', (req, res) => res.send('👌'))

app.post('/image-upload', (req, res) => {
    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))

    Promise
        .all(promises)
        .then(results => res.json(results))
        .catch((err) => res.status(400).json(err))
})

app.listen(process.env.PORT || 8082, () => console.log('Thumbs Up'))