
let main = document.querySelector('main');
articles = [];
main.innerHTML = '<span class="msg">fetching content ...</span>';


 fetch('https://coditbackend.onrender.com/postes').then(res => res.json())
 .then(data => main.innerHTML = JSON.stringify(data))
// fetch('https://localhost:3000/postes')
//   .then(res => res.json())
//   .then(posts => {
//     posts.map( post =>{
//       let article = `<article class="post">
//                       <div class="heed">
//                         <div class="details">
//                         By <span class="authour">${post.authour}</span>
//                         - <span class="time">${post.time}</span>
//                         </div>
//                       <div class="stats">
//                         <i class="fas fa-heart"></i>
//                         <span class="likes">${post.likes}</span>
//                       </div>
//                     </div>
//                       <hr>
//                       <div class="post-main">${post.description}</div>
//                     <div class="post-meta">
//           ${post.tags.map(tag => `<p class="tags">${tag}</p>`).join('')}
//                     </div>
//                   </article>`;
//           articles.push(article)
//     });
//       main.innerHTML = articles.join('')
//   }).catch(err => {
//     main.innerHTML = '<span class="msg">Server data fetch error or connection problem</span>';
//     console.log(err)
//     })