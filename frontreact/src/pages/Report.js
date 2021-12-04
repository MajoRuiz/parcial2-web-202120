import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Chart } from '../components/Chart';

export const Report = () => {
  const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch(`/api/products?q=${""}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

  return (
    <section id='report'>
      <div className='report-container'>
        <h1><FormattedMessage id="units"/></h1>
       <Chart
       data={products}
       />
      </div>
    </section>
  );
};
