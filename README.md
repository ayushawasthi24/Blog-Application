# Blog-Application

## Installation and Running

1. First of all clone this Repository

`git clone https://github.com/ayushawasthi24/Blog-Application` 

2. Change the directory to this folder

`cd Blog-Application` 

3. Install the packages and dependencies

`npm i` 

4. Run the start script

`npm start`

*You should have node js installed in your system to run this project*

## Project Overview

This is a simple blog application built with 
1. **Node JS**
2. **Express JS (for the backend)**
3. **MongoDB (for database)**
4. **EJS (frontend).**

On starting the server by running the start script loads the homepage of the application where a **viewer** can read all the blogs published by different users.
On the top right corner there is *Login* and *Register* button which helps you to register yourself as an author so that you can publish your blogs in the application.

- For login authentication, I have used **Passport Authentication (Local Strategy)** 
- For connecting to database, I have used **Mongoose** *(which is a mongodb object modelling for nodejs).*

When you register yourself and login for the first time, your dashboard is displayed with a form to submit your first blog. Subsequently all the blogs you published will be displayed on the dashboad.
