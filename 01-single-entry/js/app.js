'use strict';

var hello = require('./hello');
require('../css/style.css');

document.write('<h1>' + hello.hi('RomaJS') + '</h1>');