import React from 'react';
import './Coin.css';
import { Container } from 'react-bootstrap';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  image,
  priceChange
}) => {
  return (
    <Container fluid>
      <div className='coin-row'>

        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>

        <div className='coin-data'>
          <p className='coin-price'>${price.toLocaleString()}</p>
          
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Coin;
