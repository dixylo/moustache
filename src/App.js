import React, { Component } from 'react';
import classicTee from './tee.jpg';
import cart from './cart.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      showCart: false,
      selectedSize: ''
    }
  }

  selectSize(value) {
    this.setState({
      selectedSize: value === this.state.selectedSize ? '' : value
    });
  }

  addToCart() {
    const { selectedSize, cartItems } = this.state;
    if (selectedSize) {
      const item = {
        img: classicTee,
        name: 'Classic Tee',
        count: 1,
        size: selectedSize,
        price: '$75.00'
      };

      const found = cartItems.findIndex(item => item.name === 'Classic Tee' && item.size === selectedSize);
      if (found !== -1) {
        cartItems[found].count += 1;
      } else {
        cartItems.push(item);
      }

      this.setState({
        cartItems
      });
    } else {
      alert("Please select size.");
    }
  }

  render() {
    const { cartItems, selectedSize } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <div className="cart">
              <span>
                <span className='cart-text'>My Cart ({ cartItems.length })</span>
                <span className='cart-icon'><img alt='cart' src={cart} />({ cartItems.length })</span>
              </span>
              <div className="cart-popup">
                {
                  this.state.cartItems.length === 0
                  && <div>You cart is empty.</div>
                }
                {
                  this.state.cartItems.map(item => (
                    <div className="cart-item">
                      <div className="cart-item-img">
                        < img style={{maxWidth: 80}} src={classicTee} alt=""/>
                      </div>
                      <div className="cart-item-text">
                        <div>{item.name}</div>
                        <div>{item.count}x<b>{item.price}</b></div>
                        <div>Size: {item.size}</div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="content">
            <div className="product-image-container">
              <img className="product-image" alt='tee' src={classicTee}></img>
            </div>
            <div className="product-desc">
              <h3>Classic Tee</h3>
              <h4 className='product-price'>$75.00</h4>
              <span>Witheid meestal noemden met zee aandeel gezocht valorem heb. Holen moest steek zoo mei zit. Slechts zee dag bronnen gemengd weg behoeft doelang der. Al blijft midden op om na daarin. Dien werk van eind vaak zal per doel iets gif. Tembun wat groote een enkele. </span>
              <h5>SIZE<span className='product-asterisk'>*</span> {selectedSize}</h5>
              <div className="button-group">
                <button className={selectedSize === "S" ? "btn-active" : "btn-default"} onClick={this.selectSize.bind(this, 'S')}>S</button>
                <button className={selectedSize === "M" ? "btn-active" : "btn-default"} onClick={this.selectSize.bind(this, 'M')}>M</button>
                <button className={selectedSize === "L" ? "btn-active" : "btn-default"} onClick={this.selectSize.bind(this, 'L')}>L</button>
              </div>
              <div className="desc-section">
                <button className="btn-bold" onClick={this.addToCart.bind(this)}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
