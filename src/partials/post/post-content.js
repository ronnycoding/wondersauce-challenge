export default (value = '') => {
  return `
    <div class="edit-post-content-container">
      <div class="flex">
        <textarea
          rows="20"
          class="appearance-none border border-cardBorder rounded w-full py-10 px-8 leading-normal focus:outline-none font-sans text-sm mt-12 text-cardDescription bg-background"
          id="post-content-editor"
          value="${value}"></textarea>
        <div>
          <button id="post-content-cancel" class="btn font-sans leading-none text-white text-3 uppercase underline mt-16 pl-8">Cancel</button>
        </div>
      </div>
      <button id="savePostContent" class="btn bg-white rounded-md font-bold text-base text-black py-3 px-5 font-sans leading-none mt-8">
        Save Changes
      </button>
    </div>
  `
}