export default (value = '') => {
  return `
  <div class="edit-post-title-container">
    <p class="font-bold text-base text-white">News</p>
    <div class="flex">
      <textarea
        rows="3"
        class="appearance-none border border-cardBorder rounded w-full py-2 px-4 leading-tight focus:outline-none font-sans font-bold text-postTitle mt-12 text-white bg-background"
        id="post-title-editor"
        value="${value}"></textarea>
      <div>
        <button id="post-title-cancel" class="btn font-sans leading-none text-white text-3 uppercase underline mt-16 pl-8">Cancel</button>
      </div>
    </div>
    <button id="savePostTitle" class="btn bg-white rounded-md font-bold text-base text-black py-3 px-5 font-sans leading-none mt-8">
      Save Changes
    </button>
  </div>
  `
}