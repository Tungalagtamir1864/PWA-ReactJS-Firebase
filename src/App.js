import React, { Component } from 'react'
import firebase from './firebase'
import CatalogA from './CatalogA'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  componentDidMount(){
    const messaging = firebase.messaging()
    messaging.requestPermission().then(()=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Token :',token)
    }).catch(()=>{
      console.log('error')
    })
  }
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <div className="Card">
        <h1>Digital Store</h1>

        <CatalogA />
        </div>
      </header>
    </div>
    )
  }
}



// import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';
// import CatalogA from './CatalogA'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import firebase from './firebase'
// import { CSSTransitionGroup } from 'react-transition-group'


// function App() {
  // React.useEffect(()=>{
  //   const msg=firebase.messaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn("token",data)
  //   })
  // })
  

//   return (
//     <div className="App">
//       <header className="App-header">
//       <div className="Card">
//         <h1>Digital Store</h1>

//         <CatalogA />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
