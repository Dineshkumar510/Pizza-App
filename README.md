# Pizza-App

![port](https://user-images.githubusercontent.com/43378477/128639198-ed890e45-b489-43e5-a891-82c99cbfa8e0.png)

Pizza-App is a simple dynamic web app, built with ejs for Frontend node & express js for Backend and Databse is mongodb to see the  website goto:  [https://vast-basin-58151.herokuapp.com/]

_**Customer Dummy credentials:**_  Email: RecruiterPizzaApp@gmail.com, password: PizzaApp123

_**Admin Dummy credentials:**_  Email: RecruiterPizzaAppAdmin@gmail.com, password: PizzaAppAdmin123

## **Payment**

***Payment with COD***

 - It doesn't require to do any thing but make shore you have to fill Phone & address block completely

***Payment with card:***

 - use  "4242 4242 4242 4242" as card number 
 - And for date/month use "Any future date"
 - And for cvv use "Any random 3 numbers"


## Project Tools-Used-In:

-   **Node.js**

is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser.

-   **NPM**

It is a package manager for the JavaScript programming language. npm, Inc. is a subsidiary of GitHub, that provides hosting for software development and version control with the usage of Git. npm is the default package manager for the JavaScript runtime environment Node.js.

-   **Express.js**

simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the factor standard server framework for Node.js.

-   **EJS**

It is a simple templating language that lets you generate HTML markup with plain JavaScript.

-   **Mongoose**

is an object data modeling (ODM) library that provides a rigorous modeling environment for your data, enforcing structure as needed while still maintaining the flexibility that makes MongoDB powerful.

-   **MongoDB**

It is a document-oriented database which stores data in JSON-like documents with dynamic schema. It means you can store your records without worrying about the data structure such as the number of fields or types of fields to store values.

-   **Passport**

It is  [Express.js](http://expressjs.com/)-compatible authentication middleware for  [Node.js](http://nodejs.org/). Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as  _strategies_. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.

_For making this Website I used the Express framework as Server side rendering and also used EJS which is simple templating language, and some NPM packages from nodejs. And also used Mongoose library(ODM), to interact directly with MongoDB database which the website is less interactive but works effectively!._

## Project Architecture:

1.  **REpresentational State Transfer:**

REST is web standards based architecture and uses HTTP Protocol. It revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP standard methods.

A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol. Here each resource is identified by URIs/ global IDs. REST uses various representation to represent a resource like text, JSON, XML.

Following four HTTP methods are commonly used in REST based architecture.

-   **GET**  − This is used to provide a read only access to a resource.
    
-   **PUT**  − This is used to create a new resource.
    
-   **DELETE**  − This is used to remove a resource.
    
-   **POST**  − This is used to update a existing resource or create a new resource.
    

Web services based on REST Architecture are known as RESTful web services. These webservices uses HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource Identifier a service, which provides resource representation such as JSON and set of HTTP Methods.

2.  **Model-View-Controller(MVC) architecture:**

MVC is an acronym for Model-View-Controller. It is a design pattern for software projects. It is used majorly by Node developers and by C#, Ruby, PHP framework users too. In MVC pattern, application and its development are divided into three interconnected parts. The advantage of this is it helps in focusing on a specific part of the application name, the ways information is presented to and accepted from, the user. It helps in allowing for efficient code reuse and the parallel development of the application. Even if the project structure might look a little different than an ideal MVC structure, the basic program flow in and out the application remains the same.

-   **Model**:

Model represents the structure of data, the format and the constraints with which it is stored. It maintains the data of the application. Essentially, it is the database part of the application.

-   **View**:

View is what is presented to the user. Views utilize the Model and present data in a form in which the user wants. A user can also be allowed to make changes to the data presented to the user. They consist of static and dynamic pages which are rendered or sent to the user when the user requests them.

-   **Controller**:

It controls the requests of the user and then generates appropriate response which is fed to the viewer. Typically, the user interacts with the View, which in turn generates the appropriate request, this request will be handled by a controller. The controller renders the appropriate view with the model data as a response.  
So, to sum it up:

-   Model is data part.
-   View is User Interface part.
-   Controller is request-response handler.

[![mvc architecture](https://camo.githubusercontent.com/206659e7f09a9a4ea1f0f758a7fce8732e837964fe2a5b8e1434988aa79b6736/68747470733a2f2f6d656469612e6765656b73666f726765656b732e6f72672f77702d636f6e74656e742f75706c6f6164732f6d76632d626c6f636b2d6469616772616d2e706e67)](https://camo.githubusercontent.com/206659e7f09a9a4ea1f0f758a7fce8732e837964fe2a5b8e1434988aa79b6736/68747470733a2f2f6d656469612e6765656b73666f726765656b732e6f72672f77702d636f6e74656e742f75706c6f6164732f6d76632d626c6f636b2d6469616772616d2e706e67)

```
					MVC architecture
```
## Project Features:

-   **Authentication**: User login with Email and password.
    
-   **Authorization**  : The User cannot order pizza unless they are categorize into Customer or Admin. The Categorization is done on database side. 
    
-   **Manage Pizza orders with basic functionalities:**
    
	Depends upon categorization the user gets menu individually
 
    Can add multiple  items to cart
    
    Particular page for cart items
    
    Initially gets two types of payment method.
    
    After payment, user redirects to orders page where you can see all your 		   order history.
    
    Each order id acts as ink to particular order tracking page.
    
    The Id of particular order, where you can see the tracking status with realtime activity.
    
    If order status is completed the tracking page goes to unactive mode.
    
    For Admin User you get an access to change the status of User order status with realtime activity. 

## Dependencies used for this Project:

    "dependencies":
    
    "@babel/plugin-proposal-class-properties": "^7.14.5",
    
    "@mapbox/node-pre-gyp": "^1.0.5",
    
    "@stripe/stripe-js": "^1.16.0",
    
    "axios": "^0.21.1",
    
    "bcryptjs": "^2.4.3",
    
    "connect-mongo": "^4.4.1",
    
    "dotenv": "^10.0.0",
    
    "ejs": "^3.1.6",
    
    "express": "^4.17.1",
    
    "express-ejs-layouts": "^2.5.1",
    
    "express-flash": "^0.0.2",
    
    "express-mongo-sanitize": "^2.1.0",
    
    "express-session": "^1.17.2",
    
    "helmet": "^4.6.0",
    
    "moment": "^2.29.1",
    
    "mongoose": "^5.13.3",
    
    "node-polyfill-webpack-plugin": "^1.1.4",
    
    "nodemon": "^2.0.12",
    
    "passport": "^0.4.1",
    
    "passport-local": "^1.0.0",
    
    "socket.io": "^4.1.3",
    
    "stripe": "^8.167.0",
    
    "toastify-js": "^1.11.1
    
    
    "devDependencies": 
    
    "cross-env": "^7.0.3",
    
    "laravel-mix": "^6.0.27",
    
    "resolve-url-loader": "^4.0.0",
    
    "sass": "^1.36.0",
    
    "sass-loader": "^12.1.0"

