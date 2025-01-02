
// app/api/page.js
// This example assumes you're fetching from a public API, like fakestoreapi.
export async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/electronics');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data; // Ensure you return the product data.
    } catch (error) {
      console.error(error);
      return []; // Return an empty array if the API call fails
    }
  }
  
  
  export default async function Api() {
    const products = await fetchProducts();
    return (
      <div className="flex flex-col min-h-screen">
        {/* You can log the fetched data here to check */}
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    );
  }
  
