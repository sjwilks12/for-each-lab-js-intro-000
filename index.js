function iterativeLog(array) {
  Debug;
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
};

function iterate(callback) {
  var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  array.forEach(callback);
  return array;
};

function doToArray(array, callback) {
  array.forEach(callback);
};
