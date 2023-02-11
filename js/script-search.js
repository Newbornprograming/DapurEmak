const menuContainerEl = document.querySelector('.menu-container');
const searchInputEl = document.querySelector('#q');
const resultEl = document.querySelector('#result');

async function main() {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');
  if (!query) {
    resultEl.innerText = 'masukan menu makanan';
  } else {
    searchInputEl.value = query;
    resultEl.innerText = `Hasil Pencarian "${query}"`;
  
    const meals = await getSearchResult(query);
    if (!meals || meals.length === 0) {
      const infoEl = document.createElement('h2');
      infoEl.innerText = 'Hasil pencarian tidak ditemukan';
      menuContainerEl.appendChild(infoEl);
    } else {
      for (const meal of meals) {
        const card = createCard(meal);
        menuContainerEl.appendChild(card);
      }
    }
  }
}

main();
