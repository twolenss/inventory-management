// Test script to check API response
async function testAPI() {
  try {
    const response = await fetch('http://localhost:5000/products');
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      console.error('Response not OK:', response.statusText);
      return;
    }
    
    const data = await response.json();
    console.log('Response data:', data);
    console.log('Type of data:', typeof data);
    console.log('Is array?', Array.isArray(data));
    
    if (data && typeof data === 'object') {
      console.log('Data keys:', Object.keys(data));
      if (data.products) {
        console.log('products array length:', data.products.length);
        console.log('First product:', data.products[0]);
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

testAPI();