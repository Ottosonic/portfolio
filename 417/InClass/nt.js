/*    JavaScript GIT417

 *    Author: Nicholas Trunkey
 *    Date:   2/1/2018

 *    Filename: nt.js
*/
function paySalary(name, hours) {
  var overtime = hours - 40;
  var totalPay = 0;

  if (hours < 40) {
    totalPay = hours * 8;
  } else {
    totalPay = ((hours - overtime) * 8) + (overtime * 12);
  }
  console.log(name + " has earned $" + totalPay);
}

paySalary("Xavier", 56);
