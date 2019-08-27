const posts = [
  { title: 'post_1', body: 'This is post 1' },
  { title: 'post_2', body: 'This is post 2' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Without using callback

/* function createPost(post) {
    setTimeout(() => {
      posts.push(post);
    }, 2000);
  }
  
  createPost({ title: 'Post_3', body: 'This is post 3' });
  
  getPosts(); 
*/

// Using callback function

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: 'post_3', body: 'This is post 3' }, getPosts);
