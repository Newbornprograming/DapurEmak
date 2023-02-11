const fetchApi = 'https://www.themealdb.com/api/json/v1/1/';

async function getHomepageMeal() {
  try {
    const res = await fetch(fetchApi + 'filter.php?a=American').then((res) => res.json());
    return res.meals.slice(0, 7);
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getSearchResult(query) {
  try {
    const res = await fetch(fetchApi + `search.php?s=${encodeURIComponent(query)}`).then((res) => res.json());
    return res.meals;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getMealById(id) {
  try {
    const res = await fetch(fetchApi + `lookup.php?i=${id}`).then((res) => res.json());
    return res.meals[0];
  } catch (err) {
    console.error(err);
    return null;
  }
}
