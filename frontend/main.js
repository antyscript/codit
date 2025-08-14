
let main = document.querySelector('main');
let articles = [];
main.innerHTML = '<span class="msg">fetching content ...</span>';

// fetch('http://localhost:3000/postes').then(res => res.json())
// .then(data => { 
//   let newData = JSON.parse(data)
   
//   if (data.msg){
//     main.innerHTML = `<p>${data.msg}</p>`
//   } else {
//   main.innerHTML = JSON.stringify(data)}
// }
//   )
fetch('http://localhost:3000/postes')
  .then(res => res.json())
  .then(posts => {
    posts.map( post =>{
      
const formatted = post.time? new Date(post.time).toISOString().slice(0, 10).replace(/-/g, '/') : 'undefined';
      
      let lik = {
        id: post._id,
        liked : localStorage.getItem('liked') || false
      }
      
      let article = `<article class="post">
                      <div class="heed">
                        <div class="details">
                        By <span class="authour">${post.authour}</span>
                        - <span class="time">${formatted}</span>
                        </div>
                      <div class="stats">
       <i class="fas fa-heart" onclick="like(${lik})"></i>
                       <span class="likes">${post.likes}</span>
                      </div>
                    </div>
                      <hr>
                      <div class="post-main">${post.description}</div>
                    <div class="post-meta">
          ${post.tags.map(tag => `<p class="tags">${tag}</p>`).join('')}
                    </div>
                  </article>`;
          articles.push(article)
    });
      main.innerHTML = articles.join('')
  }).catch(err => {
    main.innerHTML = '<span class="msg">Server data fetch error or connection problem</span>';
    console.log(err)
    })
    
    
    
    // function like({id, liked}){
    //   if (!liked){
    //   fetch(`http://localhost:3000/postes/${id}`, {
    //     method: 'PATCH'
    //   }).then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //       liked = true;
    //       localStorage.setItem('liked', liked)
    //       })
    //   }
    // }
    
    // function deletePost(id){
    //   fetch(`http://localhost:3000/delete/${id}`, {
    //     method: 'DELETE',
    //   })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    // }