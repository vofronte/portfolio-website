function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
}

loadData()
  .then(() => {
    let preloaderEl = document.querySelector('.preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  });