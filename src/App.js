import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { Component } from "react";
import Navbar from "./component/Navbar/navbar";
import Header from "./component/Header/header";
import Center from "./component/center/center";
import Cake1 from "./images/cake-1.jpeg";
import Cake2 from "./images/cake-2.jpeg";
import Cake3 from "./images/cake-3.jpeg";
import Cupcake1 from "./images/cupcake-1.jpeg";
import Cupcake2 from "./images/cupcake-2.jpeg";
import Cupcake3 from "./images/cupcake-3.jpeg";
import Doughnut1 from "./images/doughnut-1.jpeg";
import Doughnut2 from "./images/doughnut-2.jpeg";
import Doughnut3 from "./images/doughnut-3.jpeg";
import Sweet1 from "./images/sweets-1.jpeg";
import Sweet2 from "./images/sweets-2.jpeg";
import Sweet3 from "./images/sweets-3.jpeg";
import Modal from "./component/modal/modal";
import Product from './component/products/products';
import {Route, Switch} from 'react-router-dom';
import Register from './container/register/register';
import Cart from './component/cart/cart';
import * as actions from './Store/index';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    images: [
      {
        class: "cake",
        id: "Blackforest cake",
        name: Cake1,
        price: 300,
        show: true,
      },
      {
        class: "cake",
        id: "vanilla cake",
        name: Cake2,
        price: 300,
        show: true,
      },
      {
        class: "cake",
        id: "strawverry cake",
        name: Cake3,
        price: 300,
        show: true,
      },
      {
        class: "cupcake",
        id: "vanilla cupcake",
        name: Cupcake1,
        price: 70,
        show: true,
      },
      {
        class: "cupcake",
        id: "chocolate cupcake",
        name: Cupcake2,
        price: 70,
        show: true,
      },
      {
        class: "cupcake",
        id: "cola cupcake",
        name: Cupcake3,
        price: 70,
        show: true,
      },
      {
        class: "doughnut",
        id: "doughnut1",
        name: Doughnut1,
        price: 100,
        show: true,
      },
      {
        class: "doughnut",
        id: "doughnut2",
        name: Doughnut2,
        price: 100,
        show: true,
      },
      {
        class: "doughnut",
        id: "doughnut3",
        name: Doughnut3,
        price: 100,
        show: true,
      },
      {
        class: "sweet",
        id: "sandwhich sweet",
        name: Sweet1,
        price: 250,
        show: true,
      },
      {
        class: "sweet",
        id: "melon sweet",
        name: Sweet2,
        price: 250,
        show: true,
      },
      {
        class: "sweet",
        id: "Chocolates",
        name: Sweet3,
        price: 250,
        show: true,
      },
    ],

    modalVisibility: false,
    sideDrawerOpen: false,
    clickimage: null,
    ItemsInCart: [],
    totalItem: 0,
    TotalPrice: 0,
  };

  filterHandler = (event) => {
    let arr = this.state.images.slice();
    let Item = event.target.value.toLowerCase();
    let x = arr.map((el) => {
      if (el.class.includes(Item)) {
        el.show = true;
        return el;
      } else {
        el.show = false;
        return el;
      }
    });
    this.setState({ images: x });
  };

  imageclickHandler = (index) => {
    let pictures = this.state.images.slice();
    this.setState({ modalVisibility: true, clickimage: pictures[index].name });
  };

  nextimageHandler = (pic) => {
    let pictures = this.state.images.slice().filter((el) => el.show === true);
    let index = pictures.findIndex((el) => el.name === pic);
    if (index === pictures.length - 1) index = -1;
    console.log(index);
    this.setState({ clickimage: pictures[index + 1].name });
  };

  previmageHandler = (pic) => {
    let pictures = this.state.images.slice().filter((el) => el.show === true);
    let index = pictures.findIndex((el) => el.name === pic);
    if (index === 0) index = pictures.length;
    console.log(index);
    this.setState({ clickimage: pictures[index - 1].name });
  };

  backdropshowHandler = () => {
    this.setState({ modalVisibility: false, sideDrawerOpen: false });
  };

  menuClickHandler = () => {
    this.setState({ sideDrawerOpen: true });
  };

  allButtonHandler = (str) => {
    let arr = [...this.state.images];
    if (str === "all") {
      let x = arr.map((el) => {
        el.show = true;
        return el;
      });
      this.setState({ images: x });
    } else {
      let x = arr.map((el) => {
        if (el.class === str) {
          el.show = true;
          return el;
        } else {
          el.show = false;
          return el;
        }
      });
      this.setState({ images: x });
    }
  };

  addToCartHandler = (obj) => {
    let cart = [...this.state.ItemsInCart, obj];
    let count = cart.length;

    this.setState({
      ItemsInCart: cart,
      totalItem: count
    });
  };

  render() {
    return (
      <div>
        <Navbar
          item={this.state.totalItem}
          clicked={this.menuClickHandler}
          shows={this.state.sideDrawerOpen}
          remove={this.backdropshowHandler}
          auth={this.props.authenticate}
          logout={this.props.onLogout}
        />
        
        <Switch>
          <Route path='/' exact component={Header}/>
          <Route path='/store' component={() => <Product filter={this.filterHandler} ButtonHandler={this.allButtonHandler} images={this.state.images} imageHandler={this.imageclickHandler} cartHandler={this.addToCartHandler} /> }/>
          <Route path='/about' component={Center}/>
          <Route path='/login' component={Register}/>
          <Route path='/cart' component={() => <Cart items={this.state.ItemsInCart} />}/>
        </Switch>
        <Modal
          seen={this.state.modalVisibility}
          image1={this.state.clickimage}
          remove={this.backdropshowHandler}
          clicked={this.imageclickHandler}
          nextclick={this.nextimageHandler}
          prevclick={this.previmageHandler}
        />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    authenticate: state.authenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
    // onCart: () => dispatch(actions.cart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



