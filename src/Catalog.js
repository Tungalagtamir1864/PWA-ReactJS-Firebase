import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'



export default class Catalog extends Component {
    constructor(){
        super()
        this.state = {
            lenght: 0,
            products: []
        }
        
    }


    componentDidMount(){
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
        .then(res => this.setState({
            lenght: res.lenght,
            products: res
        }))
    }


    render() {
        const { products } = this.state
        const productItem = products.map((product) =>
        <div key={product.id}> 
            <b>Title:</b>{product.title}<br/> <b>Harga:</b> Rp. {product.price*14000}
            <hr/>
        </div>
        )
        return (
            <div style={{ textAlign: 'left'}}>
                {productItem}
            </div>
        )
    }

    // render() {
    //     const { products } = this.state
    //     const productItem = products.map((product) =>
    //     <div key={product.id}> 
    //         {product.title} - $ {product.price}
    //         <hr/>
    //     </div>
    //     )
    //     return (
    //         <div style={{ textAlign: 'left'}}>
    //             {productItem}
    //         </div>
    //     )
    // }






}