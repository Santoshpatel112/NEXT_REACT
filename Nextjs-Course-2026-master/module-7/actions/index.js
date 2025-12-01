"use server";

export async function createUser(formData) {
  const name = formData.get("name");

  console.log("the name", name);
}


export async function getProductData(searchQuery, searchType = 'both') {

  const response = await fetch(
    "https://68a80736bb882f2aa6dd2a10.mockapi.io/api/users/Products"
  );
  const products = await response.json();

  
  if (!searchQuery || searchQuery.trim() === '') {
    return products;
  }

  const query = searchQuery.toLowerCase().trim();


  const filteredProducts = products.filter(product => {
    const titleMatch = product.title.toLowerCase().includes(query);
    const descMatch = product.desc.toLowerCase().includes(query);

    switch (searchType) {
      case 'title':
        return titleMatch;
      case 'description':
        return descMatch;
      case 'both':
      default:
        return titleMatch || descMatch;
    }
  });

  return filteredProducts;
}