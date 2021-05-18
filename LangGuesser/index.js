const franc = require('franc');
const langs = require('langs');
const input = process.argv[2];
const langcode = franc(input);
console.log(langs.where("3", langcode).name);