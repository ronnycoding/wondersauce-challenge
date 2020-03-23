import axios from 'axios'

import { apiUrl } from '../../constants'
import postTemplate from '../../partials/post-card'
import { newArticleButtonTemplate } from '../../partials/buttons'



export default () => {
  const appRoot = document.getElementById('appRoot')

  const callPosts = () => {
    axios.get(`${apiUrl}/posts`).then(({data}) => {
      const posts = `
        <!-- cards container -->
        <div class="grid sm:grid-cols-1 xl:grid-cols-3 gap-8 pb-16">
          ${data.map(({userId, id, title, body}) => {
            return postTemplate(title, body.substr(0, 80), '18.08.18')
          }).join('')}
        </div>
      `
      appRoot.insertAdjacentHTML("beforeend", posts)
    })
  }

  const cleanScreen = () => {
    // clean up of children
    while (appRoot.firstChild) {
      appRoot.removeChild(appRoot.firstChild);
    }
  }

  const addNewArticleBtn = () => {
    const btn = newArticleButtonTemplate()

    document.getElementById('header').insertAdjacentHTML("beforeend",btn)
  }

  document.addEventListener("DOMContentLoaded", () => {
    callPosts()
  })

  document.addEventListener('click', (event) => {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('#logo-newsmedia') || document.querySelector('#addNewArticle')) return;
  
    // Don't follow the link
    event.preventDefault();

    cleanScreen()

    addNewArticleBtn()

    callPosts()
  
  }, false);
}