export default () => {
  // const btnAddNewArticle = document.getElementById('addNewArticle');
  document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('#addNewArticle')) return;
  
    // Don't follow the link
    event.preventDefault();
  
    // Log the clicked element in the console
    alert('hello')
  
  }, false);
}