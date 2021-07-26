require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 3800;
const Router = require('./routes/web');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo');
const { Console } = require('console');
const dbUrl = 'mongodb://localhost:27017/Pizza';


//DataBase Connection
mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//session store:
//The sessions are stored in mongodb in 
//session config you can see on "store" option 


//Session Config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: MongoDbStore.create({mongoUrl: dbUrl}),
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hours
}));

//Global middleware 
app.use((req, res, next)=>{
    res.locals.session = req.session
    next();
   });


//cookie id generate
app.use(flash());

//Assets
app.use(express.static('public'));
app.use(express.json());

//set Template engine
app.use(expressLayout);
app.set('views',path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

//routes
app.use(Router);


//db connection
const Database = mongoose.connection;
Database.on("error", console.error.bind(console, "connection error:😕"));
Database.once("open", () => {
console.log("Database connected😎");
});

//Server Starting
app.listen(PORT, () => {
 console.log(`Server is running at port : ${PORT}`);
});


