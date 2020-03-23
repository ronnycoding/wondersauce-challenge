export default (title, description, date) => {
  return `
    <!-- card -->
    <div class="newsmedia-card h-card border-cardBorder hover:border-white border focus:border-8 hover:border-3 rounded-md p-8">
      <p class="font-bold text-base text-white">News</p>
      <h3 class="text-white font-bold text-titleCard leading-tight mt-4 focus:underline hover:underline hover:cursor-pointer focus:cursor-pointer">${title}</h3>
      <p class="text-cardDescription leading-tight font-sm mt-4">${description}</p>
      <p class="font-sm text-white mt-4">${date}</p>
      <div class="btn btn-close bg-background cursor-pointer rounded-full border border-white hover:bg-white">
        <svg>
          <use xlink:href="#CloseIcon"/>
        </svg>
      </div>
    </div>
  `
}