// src/App.js
import React from 'react';
import './App.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBars';

const businesses = [
  {
    id: 1,
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Restaurant A',
    address: '123 Main St',
    city: 'Cityville',
    state: 'CA',
    zipCode: '12345',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    id: 2,
    // imageSrc: 'https://www.restolacuisine.com/restaurants/restaurant-la-cuisine/website/images/Lacuisine_resto.jpg',
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Restaurant B',
    address: '456 Elm St',
    city: 'Townsville',
    state: 'TX',
    zipCode: '67890',
    category: 'Mexican',
    rating: 4.0,
    reviewCount: 75,
  },
  {
    id: 3,
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Restaurant A',
    address: '123 Main St',
    city: 'Cityville',
    state: 'CA',
    zipCode: '12345',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    id: 4,
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Restaurant A',
    address: '123 Main St',
    city: 'Cityville',
    state: 'CA',
    zipCode: '12345',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    id: 5,
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Restaurant A',
    address: '123 Main St',
    city: 'Cityville',
    state: 'CA',
    zipCode: '12345',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  {
    id: 6,
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Restaurant A',
    address: '123 Main St',
    city: 'Cityville',
    state: 'CA',
    zipCode: '12345',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  }
  // Add more business objects as needed
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Feeling...Ravenous?</h1>
        <h4>Your Next Meal Awaits</h4>
        <SearchBar />
      </header>
      
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
