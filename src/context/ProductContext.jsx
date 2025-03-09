import  { createContext, useState, useEffect } from 'react';
export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/data.json') 
      .then(response => response.json())
      .then(data => {
        // console.log( data); 
        setProducts(data.products);
      })
      .catch(error => console.error( error));
  }, []);
  
  

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === product.id)) {
        return prevFavorites.filter((fav) => fav.id !== product.id); 
      } else {
        return [...prevFavorites, product]; 
      }
    });
  };

  return (
    <ProductContext.Provider value={{ products, favorites, toggleFavorite }}>
      {children}
    </ProductContext.Provider>
  );
};
