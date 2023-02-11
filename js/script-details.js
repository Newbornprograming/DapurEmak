const contentEl = document.getElementById('content');

async function main() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const meal = await getMealById(id);

  if (!meal) {
    const infoEl = document.createElement('h1');
    infoEl.innerText = 'Meal not found';
    contentEl.appendChild(infoEl);
  } else {
    const titleEl = document.createElement('h1');
    titleEl.classList.add('underline');
    titleEl.innerText = meal.strMeal + ' Recipe';
    contentEl.appendChild(titleEl);

    const menuImgDiv = document.createElement('div');
    menuImgDiv.classList.add('dt-img');
    const menuImg = document.createElement('img');
    menuImg.src = meal.strMealThumb;
    menuImg.alt = meal.strMeal;
    menuImgDiv.appendChild(menuImg);
    contentEl.appendChild(menuImgDiv);

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(`${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`);
      } else {
        break;
      }
    }

    const ingredientsEl = document.createElement('h2');
    ingredientsEl.innerText = 'Ingredients :';
    contentEl.appendChild(ingredientsEl);

    const ingredientsListEl = document.createElement('ul');
    ingredients.forEach(ingredient => {
      const ingredientEl = document.createElement('li');
      ingredientEl.innerText = ingredient;
      ingredientsListEl.appendChild(ingredientEl);
    });
    contentEl.appendChild(ingredientsListEl);

    const instructionsEl = document.createElement('h2');
    instructionsEl.innerText = 'Instructions :';
    contentEl.appendChild(instructionsEl);

    const instructions = meal.strInstructions.trim().split('\r\n');
    instructions
      .map(e => e.trim())
      .filter(e => !!e)
      .forEach(e => {
        const instructionEl = document.createElement('ol');
        instructionEl.innerText = e;
        contentEl.appendChild(instructionEl);
      });
  }
}

main();