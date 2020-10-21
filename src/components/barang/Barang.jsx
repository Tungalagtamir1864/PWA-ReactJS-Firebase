import React from 'react'
import './Barang.css'

    class Barang extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        active: false,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        const { price } = this.props.barang;
        const active = !this.state.active;

        this.setState({
        active: active,
        });

        // Beritahu Komponen OrderForm untuk mengupdate total
        // this.props.addTotal( active ? price : -price );
    }

    render() {
        const { name, price } = this.props.barang;
        const { active } = this.state;

        return (
        <li className={active ? 'is-active' : ''} onClick={this.onClick}>
            {name}
            <span>Rp { price }</span>
        </li>
        );
    }
    }

    // class OrderForm extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //     total: 0,
    //     };

    //     this.addTotal = this.addTotal.bind(this);
    // }

    // addTotal(price) {
    //     this.setState({
    //     total: this.state.total + price,
    //     });
    // }

    // render() {
    //     const services = this.props.barang.map((barang, index) => {

    //     // Buat component Product untuk setiap product di dalam Array barang
    //     // Perhatikan kita juga mengirim fungsi addTotal
    //     return <Barang barang={barang} addTotal={this.addTotal} key={index}/>;
    //     })

    //     return (
    //     <form id="app">
    //         <h1>Pesanan</h1>
    //         <ul>
    //         {services}
    //         </ul>

    //         <div className="total">
    //         Total:
    //         <span>Rp {this.state.total}</span>
    //         </div>
    //     </form>
    //     );
    // }
    // }



    export default Barang;

    // ReactDOM.render(<OrderForm products={products} />, document.getElementById('root'));