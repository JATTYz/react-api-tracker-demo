import React from 'react';
import './Coin.css';
import { Row, Col } from 'react-bootstrap';


const style = {
  width: 60
}

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  image,
  priceChange
}) => {
  return (
       <Row className="mt-4" > 
         <Col className="col-lg col-md col-sm-12 col-12">
          <img className='' src={image} alt='crypto' style={style} />
         </Col>
         <Col className='col-lg col-md col-sm-12 col-12 align-self-center '><h1 className='text-name'>{name}</h1></Col>
         <Col className='col-lg col-md col-sm-12 col-12 align-self-center'><p>{symbol}</p></Col> 
         <Col className='col-lg col-md col-sm-12 col-12 align-self-center'><p className=''>${price.toLocaleString()}</p></Col>    
         <Col className='col-lg col-md col-sm-12 col-12 align-self-center'>
          {priceChange < 0 ? (
            <p className='red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='green'>{priceChange.toFixed(2)}%</p>
          )}
         </Col>    
         <Col className='col-lg col-md col-sm-12 col-12 align-self-center'>
          <p className=''>
            ${marketcap.toLocaleString()}
          </p>
         </Col>  
          </Row>
  );
};

export default Coin;
