var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
/*^return clone of object. non destructive. explicit with returns. this merges from left to right and returns a new object that is a result of the merge*/
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newRecipe = object
  delete newRecipe.key
  return newRecipe

}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
