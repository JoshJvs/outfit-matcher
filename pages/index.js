import React, { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSearch = async () => {
    setLoading(true);
    setTimeout(() => {
      setResults([
        {
          name: 'Vintage Blue Denim Jeans',
          price: '$42.99',
          image: '/example-jeans.jpg',
          link: '#'
        },
        {
          name: 'White Graphic T-Shirt',
          price: '$19.99',
          image: '/example-shirt.jpg',
          link: '#'
        },
        {
          name: 'Brown Wool Vest (Kurt-Inspired)',
          price: '$34.50',
          image: '/example-vest.jpg',
          link: '#'
        }
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Find Outfits From Any Image</h1>
      <p>Upload a photo of your style icon and discover matching or inspired clothing at any budget.</p>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '1rem' }} />}
      <br />
      <button onClick={handleSearch} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Find Matches</button>
      {loading && <p>Scanning the internet for similar styles...</p>}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        {results.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <img src={item.image} alt={item.name} style={{ maxWidth: '150px' }} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Buy Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}