// Add your functions and code here
function destructivelyAppendKitten(array, element){
  var kitten = ["Milo", "Otis", "Garfield"];
  array.push(kitten)
  return array
}
function destructivelyPrependKitten(array){
  array.shift()
  return array
}
function destructivelyRemoveLastKitten (array){
  array.pop();
  return array
}
