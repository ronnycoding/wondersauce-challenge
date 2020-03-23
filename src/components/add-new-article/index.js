import axios from 'axios'

import addNewPost from '../../partials/post'
import { apiUrl } from '../../constants'

export default () => {
  let newPost = {}

  const savePostTitleListener = () => {
    document.addEventListener('click', function (event) {
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.matches('#savePostTitle')) return;
      // Don't follow the link
      event.preventDefault();

      const postTitle = document.getElementById('post-title-editor').value
      axios.post(`${apiUrl}/posts`, {
        title: postTitle,
        date: new Date().toISOString(),
        userId: 1
      }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).then(({data}) => {
        newPost = {...data}
      }).catch(err => console.error(err))
    }, false);
  }

  const savePostBodyListener = () => {
    document.addEventListener('click', function (event) {
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.matches('#savePostContent')) return;
      // Don't follow the link
      event.preventDefault();

      const postContent = document.getElementById('post-content-editor').value
      console.log(newPost)
      axios.put(`${apiUrl}/posts/${newPost.id}`, {
        ...newPost,
        body: postContent,
      }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).then(({data}) => {
        newPost = {...data}
      })
    }, false);
  }

  
  document.addEventListener('click', function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('#addNewArticle')) return;
    // Don't follow the link
    event.preventDefault();

    const appRoot = document.getElementById('appRoot')

    // clean up of children
    while (appRoot.firstChild) {
      appRoot.removeChild(appRoot.firstChild);
    }

    document.getElementById('addNewArticle').remove()

    const post = addNewPost()

    appRoot.insertAdjacentHTML('beforeend', post)

    // init listeners
    savePostTitleListener()
    savePostBodyListener()
  }, false);
}