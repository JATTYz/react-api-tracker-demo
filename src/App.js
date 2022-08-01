import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
    console.log(e);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container >
    <div className='text-center'>
      <div className=''>
        <h1 className='mt-4 coin-text'>Search a currency</h1>
        <form className='m-3'>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
        
      </div>
      
      <Row className='mt-4 d-none d-sm-none d-md-flex'>
        <Col></Col>
        <Col className='text-secondary hidden-sm'>Name</Col>
        <Col className='text-secondary'>Symbol</Col>
        <Col className='text-secondary'>Price</Col>
        <Col className='text-secondary'>24h Change</Col>
        <Col className='text-secondary'>Volumn</Col>
        </Row> 
       

      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
    <Row className='fixed-bottom'>
      <Col className='col-12 text-center mt-5 footer-text'>Created by <br/>Jaturon Tepjuk</Col>
      <Col className='col-12 text-center'> <a href="https://github.com/JATTYz" target="blank"><i class="bi bi-github"></i></a>  &nbsp; <a href="https://www.linkedin.com/in/jaturon-tepjuk-310b94205/" target="blank"><i class="bi bi-linkedin"></i></a></Col>
    </Row>
    </Container> 
  );
}

export default App;