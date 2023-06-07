let counter = 1

setInterval(() => {
  document.getElementById('radio' + counter).checked = true
  //console.log(counter)
  if (counter === 7) {
    counter = 0 
  }
  counter++
}, 5000)