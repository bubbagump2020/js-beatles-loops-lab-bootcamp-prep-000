// add solution here
function theBeatlesPlay(array1, array2){
  var array3 = []
  for(let i = 0; i < array1.length; i++){
    var beatleList = `${i} plays ${array2[i]}`
    array3.push(beatleList)
  }
}