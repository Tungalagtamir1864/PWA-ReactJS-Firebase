import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'



export default class CatalogA extends Component {
    constructor(){
        super()
        this.state = {
            length: 0,
            products: []
        }
        this.handleAdd = this.handleAdd.bind(this)
    }



    componentDidMount(){
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
        .then(res => this.setState({
            length: res.length,
            products: res
        }))
    }

    handleAdd() {
        const newProducts = this.state.products.concat([
            { id: this.state.length + 1, title: prompt('Enter product name'), price: prompt('Enter product price') }
        ]);
        this.setState((state) => ({ length: state.length + 1, products: newProducts }));
    }

    handleRemove(id) {
        let newProducts = this.products.filter(function (product) {
            return product.id !==id
        });
        this.setState({ product: newProducts });

    }

    render() {
        this.handleRemove = this.handleRemove.bind(this)

        const { products } = this.state
        const productsItem = products.map((product) =>
            <div key={product.id}> 
                <span onClick={()=> this.handleRemove(product.id)} style={{ color: "red", cursor: "pointer"}}>X</span>
                {/* <span onClick={()=> this.handleRemove(product.id)} style={{ color: "red", cursor: "pointer"}}>X</span> */}
                
            {product.title} Rp. {product.price*14000}
        </div>
        )
        return (
            <div style={{ textAlign: 'left'}}>
            <button className="btn btn-success" onClick={this.handleAdd} style={{ padding: "5px 20px"}}><b>Add Item</b></button>
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={400}>
                    {productsItem}
                </CSSTransitionGroup>
            </div>
        )
    }


}