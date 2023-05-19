/*function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./imgs/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "./imgs/close_white_36dp.svg";
    }
}*/

const { json } = require('express');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });