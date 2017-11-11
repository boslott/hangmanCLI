
function Letter(char) {

  this.char = char;
  this.placeholder = '__';
  this.isHidden = true;

}


Letter.prototype.changeVis = () => {
  let newVis = (this.isHidden ? false : true);
  return newVis;
};









// Letter.prototype.isLetter = (key) => {
//
//
// };
//
// Letter.prototype.usedBefore = (item) => {
//   let used = Letter.char == item ?  true :  false;
//   console.log('item = ' + item);
//   console.log('Letter.char = ' + Letter.char);
//   return used;
// };

module.exports = Letter;


//
//  Testing
//


  // creation
    // var bo = new Letter('b');
    // console.log(bo.char);

  // Change Visisbiliy Function
    // console.log("isHidden = " + bo.isHidden);
    // bo.isHidden = bo.changeVis();
    // console.log("isHidden = " + bo.isHidden);
