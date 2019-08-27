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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      //   console.info('new post inserted');
      const error = true;

      if (!error) {
        resolve();
      } else {
        reject('Error something went wrong !!');
      }
    }, 2000);
  });
}

async function init() {
  await createPost({ title: 'post_3', body: 'This is post 3' });

  getPosts();
}

init().catch(err => console.error(err));
