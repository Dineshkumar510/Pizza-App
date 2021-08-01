require('dotenv').config()
const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);
const path = require('path');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 3800;
const Router = require('./routes/web');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo');
const passport = require('passport');
const { Console } = require('console');
const Emitter = require('events'); 
const dbUrl = 'mongodb://localhost:27017/Pizza';


//DataBase Connection
mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Event emitter
const eventEmitter = new Emitter()
app.set('eventEmitter', eventEmitter);

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

//passport config
const passportInit = require('./app/config/passport');
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())


//Global middleware 
app.use((req, res, next)=>{
    res.locals.session = req.session
    res.locals.user = req.user
    next();
   });


//cookie id generate
app.use(flash());

//Assets
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//set Template engine
app.use(expressLayout);
app.set('views',path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');


//routes
app.use(Router);


//socket connection
io.on('connect', (socket)=> {
    //join
    socket.on('join', (roomName)=> {
        console.log(roomName)
        socket.join(roomName)
    })
})

eventEmitter.on('orderUpdated', (data)=> {
    io.to(`order_${data.id}`).emit('orderUpdated', data)
})

eventEmitter.on('orderPlaced', (data)=> {
    io.to('adminRoom').emit('orderPlaced', data)
})


//db connection
const Database = mongoose.connection;
Database.on("error", console.error.bind(console, "connection error:😕"));
Database.once("open", () => {
console.log("Database connected😎");
});

//Server Starting
server.listen(PORT, () => {
 console.log(`Server is running at port : ${PORT}`);
});


