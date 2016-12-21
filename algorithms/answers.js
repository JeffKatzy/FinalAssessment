//Question 2
//from the inside out
function reverse_string(str){
  let old_arr = str.split('')
  let new_arr = []
  start_marker = old_arr.length / 2
  old_arr.length % 2 === 0 ? start_marker -= .5 : new_arr = [old_arr.splice((start_marker - .5), 0)]
  for(i = start_marker - .5, j = start_marker + .5; i > -1; i--, j++){
    new_arr.unshift(old_arr[j])
    new_arr.push(old_arr[i])
  }
  return new_arr.join('')
};

//from the outside in
function reverse_string(str){
arr = str.split('')
  for(idx = 0, end = arr.length - 1; idx < arr.length / 2; idx++, end--){
    let place_holder = arr[idx]
    arr[idx] = arr[end]
    arr[end] = place_holder
  }
  return arr.join('')
}

//Number 3
function check_palindrom(str){
  return str === reverse_string(str)
}



//split them into an array of characters
//check to see if the array is odd or even
//split them into two subarrays
//optional(add back in the omitted odd number character)
//optional(try setting the middle element if odd and pushing an shifting from the middle out?)

// function reverse_string(str){
// arr = str.split('')
// for(idx = 0, end = arr.length - 1; idx < arr.length / 2; idx++, end--){
//   let place_holder = arr[idx]
//   arr[idx] = arr[end]
//   arr[end] = place_holder
// }
// return arr
// }
