"use strict";
var app = angular.module('app', ['ngRoute','ngSanitize','ngAnimate','chart.js']);

app.constant('CONFIG',{
  api:{
    url:'http://api.openweathermap.org/data/2.5/',
    id:'3d8b309701a13f65b660fa2c64cdc517'
  }
});

app.constant('MEDIA',{
    icons:{
      "01d":"1d",
      "01n":"1n",
      "02d":"2d",
      "02n":"2n",
      "03d":"3",
      "03n":"3",
      "04d":"3",
      "04n":"3",
      "09d":"5d",
      "09n":"5n",
      "10d":"6d",
      "10n":"6n",
      "11d":"7d",
      "11n":"7n",
      "13d":"8d",
      "13n":"8n",
      "50d":"9",
      "50n":"9",
      "default":"default"
    },
    images:[
      "london","amsterdam","bordeaux","madrid","paris"
    ]
});
