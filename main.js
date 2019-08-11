
// Create two arrays
var ARRAY_ONE = ['dog', 'cat', 'lizard', 'rabbit', 'giraffe'];
var ARRAY_TWO = ['cat', 'lion', 'leopard', 'ocelot', 'tiger'];

//  IfUniqueAddItemToArray
//    Checks if an item is already in an array.  If not, add item to that array
//
function IfUniqueAddItemToArray(item, arrayToCheck) {
  var count = arrayToCheck.length;
  var foundItem = false;

  // Look through the entire array and see if the item already exists
  for (var i = 0; i < count; i++) {

    // Check if the item is in the array (case insensitive)
    // This means that 'DogG' is the same as 'dogg'
      if (arrayToCheck[i].toLowerCase() == item.toLowerCase()) {
          foundItem = true;
      }
  }

  // If we did not find the item, add it to the array
  // arrayToCheck is an array
  // push the item onto the end of the array using arrayToCheck.push(item)
  if (!foundItem) {
      arrayToCheck.push(item);
  }
}

//  UnionTwoArrays
//    Combines array1 and array2 into a unique list of both larger arrays
//
function UnionTwoArrays(array1, array2) {
  var unionOfBothArrays = array1;

  for (var i = 0; i < array2.length; i++) {
    IfUniqueAddItemToArray(array2[i], unionOfBothArrays);
  }
  return unionOfBothArrays;
}

// Get the resuult union of both arrays
var result = UnionTwoArrays(ARRAY_ONE, ARRAY_TWO);

// LOG the result
console.log(result);
