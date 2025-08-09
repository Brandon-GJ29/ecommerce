import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Tittle from './Tittle';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const context = useContext(ShopContext);
  const products = context?.products ?? [];
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    console.log('[BestSeller] products:', products);

    if (!Array.isArray(products) || products.length === 0) {
      setBestSeller([]);
      return;
    }

    const best = products.filter(item => {
      if (!item) return false;

      // Si es booleano
      if (typeof item.bestSeller === 'boolean') return item.bestSeller;

      // Si viene como string ("true", "1", "yes")
      if (typeof item.bestSeller === 'string') {
        const v = item.bestSeller.toLowerCase();
        return v === 'true' || v === '1' || v === 'yes';
      }

      // Fallback: comprueba otras posibles claves
      return Boolean(item.isBestSeller || item.bestseller || item.best_seller);
    });

    console.log('[BestSeller] filtered:', best);
    setBestSeller(best.slice(0, 5));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Tittle text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Charali laralu larala
        </p>
      </div>

      {bestSeller.length === 0 ? (
        <p className='text-center text-sm text-gray-500'>No hay best sellers disponibles.</p>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {bestSeller.map((item, idx) => (
            <ProductItem
              key={item._id ?? item.id ?? item.name ?? idx}
              id={item._id ?? item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BestSeller;
