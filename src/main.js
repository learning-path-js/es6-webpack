'use strict';


import {
    getAccTransactions,
    getContent
} from './api/model'


const MAIN_CONTENT_SITE = 'https://dou.ua/';

document.querySelector('.js-container').innerHTML = "Hello from ES6: " + getAccTransactions();

getContent(MAIN_CONTENT_SITE)
    .then(response => {
        document.querySelector('.js-content').innerHTML = response.data;
    })
    .catch(error => {
        console.log(error);
        document.querySelector('.js-content').innerHTML = "Error getting site content";
    });








