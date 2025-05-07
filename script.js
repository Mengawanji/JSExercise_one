function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  
console.log(isEmpty({}));              // true
console.log(isEmpty({ name: "John" })); // false




// -------for loop-----------------

function isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  