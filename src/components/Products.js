import React, { Component } from 'react';
import Message from './Message.js';
import CartContainer from '../containers/CartContainer.js' ;

class Products extends Component {
    render() {
       
        return (
            <main id="mainContainer">
                <div className="container">
                    <section className="section">
                        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                        <div className="row">
                            {this.props.children}
                        </div>
                    </section>
                    
                    <CartContainer />
                </div>
            </main>
        );
    }

 
};

export default Products