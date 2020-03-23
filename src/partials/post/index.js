import editPostTitle from './post-title'
import editPostContent from './post-content'

export default (title = '', content = '') => {
  
  const templateTitle = editPostTitle(title)
  const templateContent = editPostContent(content)
  return `
    ${templateTitle}
    ${templateContent}
  `
}