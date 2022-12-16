import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.components";
import "./App.css";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-in/sign-in-and-sign-in.component";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth =null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    }) 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
