
import React, { useEffect, useState } from 'react';
import Card from '../components/Card'
import { FormattedMessage} from "react-intl";



export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`/api/products?q=${searchKey}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [searchKey])

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage 
                  id="gallery"
                />

        </h1>
        <div className='home-card'>
          {products.map(producto => <Card props={producto} key={producto._id} />)}
        </div>
      </div>
    </section>
  );
};
