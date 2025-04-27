import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import FloatingCart from './components/FloatingCart';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const products = [
    { id: 1, title: 'Paneer Supreme Pizza', description: 'Creamy marinated paneer meets bold spices, fresh veggies, and a mint-cilantro drizzle for a vibrant fusion of flavors.', image: '../images/pizza.jpg' },
    { id: 2, title: 'Tandoori Paneer Club Sandwich', description: 'Spiced tandoori-paneer layers with crisp veggies and a zesty sauce, stacked between toasted bread.', image: '/images/indianclub-square.jpg' },
    { id: 3, title: 'Samosa Chole Chaat', description: 'Crispy samosas meet tangy chole, topped with yogurt, chutneys, and crunchy sev. A sweet, spicy, and savory explosion in every bite.', image: '/images/chaat-square.jpg' }
  ];

  const reviews = [
    {
      id: 1,
      title: 'A Flavorful Fusion Dream!',
      content: 'I’ve never tasted anything quite like this before—classic comfort dishes with a bold Indian twist! Every bite was bursting with spice, texture, and creativity.',
      author: 'Anjali R.',
      image: '/images/about-hero.jpg'
    },
    {
      id: 2,
      title: 'A Must-Try for Foodies',
      content: 'If you love trying new things, this is your spot. Friendly staff, chill vibes, and food that’s full of flavor—what more could you ask for?',
      author: 'Chris M.',
      image: '/images/about-hero.jpg'
    }
  ];

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductList products={products} handleAddToCart={handleAddToCart} />
      <ReviewsSection reviews={reviews} />
      <Footer />
      <FloatingCart cartCount={cartCount} />
    </div>
  );
}

export default App;
