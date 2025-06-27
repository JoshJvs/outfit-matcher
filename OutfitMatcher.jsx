
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { UploadCloud, Search, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OutfitMatcher() {
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
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Find Outfits From Any Image</h1>
        <p className="text-gray-600 mb-6">Upload a photo of your style icon and discover matching or inspired clothing at any budget.</p>
        <div className="flex flex-col items-center gap-4">
          <Input type="file" accept="image/*" onChange={handleImageUpload} className="w-full" />
          {image && <img src={image} alt="Uploaded" className="rounded-xl shadow w-full max-w-md" />}
          <Button onClick={handleSearch} className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            Find Matches
          </Button>
        </div>
        {loading && <p className="mt-6 text-blue-500">Scanning the internet for similar styles...</p>}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-2xl shadow-md">
                <CardContent className="p-4">
                  <img src={item.image} alt={item.name} className="rounded mb-2" />
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-700 mb-2">{item.price}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                    <ShoppingBag className="w-4 h-4" /> Buy Now
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
