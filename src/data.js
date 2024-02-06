async function getData() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

async function getFromCategory(category) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await response.json();
  return data;
}

async function getCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();
  return data;
}

export {
  getData,
  getFromCategory,
  getCategories,
};