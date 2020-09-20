"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAuthenticated;

function isAuthenticated() {
  return localStorage.getItem('id_token');
}