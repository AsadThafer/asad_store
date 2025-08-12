let products = [];

async function loadProducts() {
  try {
    const res = await fetch("https://sheetdb.io/api/v1/gglns4rd14oli");
    const data = await res.json();

    // Map spreadsheet data to ensure it matches the expected structure
    products = data.map(item => ({
      id: item.id,
      name: item.name,
      description: item.description,
      note: item.note,
      oldprice: item.oldprice,
      newprice: item.newprice,
      rating: item.rating,
      onsale: item.onsale,
      image: item.image,
      category: item.category,
      platform: item.platform,
      relatedProducts: item.relatedProducts
    }));

    console.log("Products loaded:", products);
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// Start loading immediately when file is imported
loadProducts();

export default products;