(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  // Ćwiczenie 1
  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading..."
    setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(array => {
      let List = '<ul>'
      array.forEach(post => {
        List += `
        <li>
        <b>${post.title}</b>
        <p>${post.body}</p>
        </li> `
      })
      answer.innerHTML = List
    })}, 1000)
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
