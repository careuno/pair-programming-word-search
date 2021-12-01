/* Pair Programming
 * @author Karen Ngo @careuno  <github.com/careuno>
 * @author Ashley <github.com/tripleboba>
 */

//Check to find the word horizontally and vertically
//Return true if the word is found, and return false if the word is not found
const wordSearch = (letters, word) => {
    if (!letters.length) {
      return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    // const verticalJoin = letters[0].map();
    let verticalJoin = verticalWordSearch(letters, word);
    //console.log(verticalJoin);
    let horizontalCheck = false
    let verticalCheck = false
  
    // horizonal check
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            horizontalCheck = true;
        }
    };
  
   // backward horizontal check pt 2.
   for (let l of horizontalJoin) {
      if (l.includes(word.split("").reverse().join(""))){
          horizontalCheck = true;
    }
  };
    
    // vertical check
    for (let l of verticalJoin) {
      if (l.includes(word)) {
          verticalCheck = true;
        }
      }
  
    if (verticalCheck || horizontalCheck) {
        return true;
    }
    return false;
  };
  
  // transpose for vertical check
  const verticalWordSearch = (result, word) => {
    let arr = [];
    for (let c = 0; c < result[0].length; c++) {
        let row = [];
        for (let r = 0; r < result.length; r++) {
            let veriticalWordSearch = result[r][c];
            row.push(veriticalWordSearch);
        }
        arr.push(row);
    }
    let verticalJoin = arr.map(ls => ls.join(''));
    return verticalJoin;
  };
  
  module.exports = wordSearch;
  
// Testing
const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'CICJCRTCK')
console.log(result);

//
// horizontalJoin: [
//     'AWCFQUAL', 'SEINFELD',
//     'YFCFQUAL', 'HMJTEVRG',
//     'WHCSYERL', 'BFRENEYB',
//     'UBTWAPAI', 'ODCAKUAS',
//     'EZKFQUAL'
//   ]

// 'l' 
// l:AWCFQUAL
// l: SEINFELD
// l: YFCFQUAL
// l: HMJTEVRG
// l: WHCSYERL
// l: BFRENEYB
// l: UBTWAPAI
// l: ODCAKUAS
// l: EZKFQUAL
// l: AWCFQUAL
// l: SEINFELD