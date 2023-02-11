const menuContainerEl = document.querySelector('.menu-container');

async function main() {
  const meals = await getHomepageMeal();
  for (const meal of meals) {
    const card = createCard(meal);
    menuContainerEl.appendChild(card);
  }
}

main();
