/**
 * Created by chaika on 02.02.16.
 */
var fs = require('fs');
var ejs = require('ejs');


exports.NoodlesMenu_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/NoodlesMenu_OneItem.ejs', "utf8"));

exports.NoodlesCart_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/NoodlesCart_OneItem.ejs', "utf8"));
