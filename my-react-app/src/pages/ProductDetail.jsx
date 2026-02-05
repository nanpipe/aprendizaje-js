import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  // useParams() gets the dynamic part of the URL
  const { id } = useParams();
  
  // In a real app, you'd fetch this from an API
  const products = [
    { id: 1, name: 'Laptop', price: 1000, description: 'Powerful laptop for work' },
    { id: 2, name: 'Mouse', price: 25, description: 'Ergonomic wireless mouse' },
    { id: 3, name: 'Keyboard', price: 75, description: 'Mechanical keyboard' },
  ];
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return <div>Product not found!</div>;
  }
  
  return (
    <div style={{ padding: '20px' }}>
      <Link to="/products">← Back to Products</Link>
      <h1>{product.name}</h1>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
}

export default ProductDetail;