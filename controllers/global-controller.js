/* date formatter */
global.__dateFormat = require('dateformat');

global.__accounting = require('accounting');

// function lastSunday(month, year) {
//   var d = new Date();
//   var lastDayOfMonth = new Date(Date.UTC(year || d.getFullYear(), month + 1, 0));
//   var day = lastDayOfMonth.getDay();
//   return new Date(Date.UTC(lastDayOfMonth.getFullYear(), lastDayOfMonth.getMonth(), lastDayOfMonth.getDate() - day));
// }
//
// function isBST(date) {
//   var d = date || new Date();
//   var starts = lastSunday(2, d.getFullYear());
//   starts.setHours(1);
//   var ends = lastSunday(9, d.getFullYear());
//   starts.setHours(1);
//   return d.getTime() >= starts.getTime() && d.getTime() < ends.getTime();
// }
//
// global.__isBST = isBST;
//
// //function to change input hour from BST
// function adjustForBST(hour) {
//   return (isBST(new Date()))
//     ? hour - 1
//     : hour;
// }
//
// global.__adjustForBST = adjustForBST;
