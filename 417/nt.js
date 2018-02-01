/*    JavaScript GIT417

 *    Author: Nicholas Trunkey
 *    Date:   1/31/18'

 *    Filename: nt.js
 */
var totalCost = 160;

//add Adult and VIP tickets together.
function calcTickets() {
  var adu = document.getElementById("adult");
  var vips = document.getElementById("VIP");
  totalCost = (adu.value * 40) + (vips.value * 70);
  document.getElementById("totalPrice").innerHTML = "$" + totalCost;
}

//checks to reset the forms
function resetForm() {
  document.getElementById("adult").value = 1;
  document.getElementById("VIP").value = 0;
  calcTickets();
  eventListener();
}

//listeners for change in the form
function eventListener() {
  document.getElementById("adult").addEventListener("change", calcTickets, false);
  document.getElementById("VIP").addEventListener("change", calcTickets, false);
}

window.addEventListener("load", resetForm, false);
