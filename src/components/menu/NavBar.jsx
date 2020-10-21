import React from 'react'
import Barang from '../barang/Barang';
import './NavBar.css'

const barang = [
    {
        name: 'Cappucino',
        price: 35000,
        active: true,
    },
    {
        name: 'Green Tea Latte',
        price: 40000,
        active: true
    },
    {
        name: 'Fish and Chips',
        price: 50000,
        active: true,
    },
    {
        name: 'Tuna Sandwich',
        price: 45000,
        active: true,
    },
    {
        name: 'Mineral Water',
        price: 8000,
        active: false,
    },
    {
        name: 'Frence Fries',
        price: 18000,
        active: false,
    },
    ];

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        active: 'Home',
        };
    }

    clicked(menu) {

        // Fungsi ini akan memperbarui state dengan
        // dengan nilai menu yang dipilih
        this.setState({
        active: menu,
        });
    }

    render() {
        return (
        <div id="app">

            {/* map akan loop sebanyak menu yang telah kita definisikan */}
            {/* dan kemudian mengembalikan elemen baru yaitu <a/> */}
            <nav className="nav">{ this.props.items.map((menu, index) => {
                var style = 'menu';

                if (this.state.active === menu) {
                style = `${style} is-active`;
                }

                return <a
                        className={style}

                        // Kita menggunakan bind sehingga 'menu' bisa di kirim ke
                        // fungsi 'clicked'
                        onClick={this.clicked.bind(this, menu)}
                        key={index}
                    >
                        {menu}
                    </a>;
            }) }
            </nav>



            
            <div className="info">
                Anda memilih  <span className="selected">{this.state.active}</span>
                <div>
                
                <ul><Barang barang={barang[0]}/></ul>
                <ul><Barang barang={barang[1]}/></ul>
                <ul><Barang barang={barang[2]}/></ul>
                
            </div>
            </div>

        </div>
        );
    }
}

// const items = ['Home', 'Services', 'About', 'Contact us'];

// ReactDOM.render(<App items={items}/>, document.getElementById('root'));

export default Menu;