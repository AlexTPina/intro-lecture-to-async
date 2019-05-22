fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    let entryPoint = document.getElementById('app')
    let postsList = document.createElement('ul')
    posts.forEach(post => {
      let newPost = document.createElement('li')
      newPost.innerText = post.title
      postsList.appendChild(newPost)
    })
    entryPoint.appendChild(postsList)
  })
  .catch(err => console.log('err', err))
