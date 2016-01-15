// main.js
'use strict'

var angular = require('angular')
var component = require('./component.js')

angular.module('app', [])

document.body.appendChild(component())
