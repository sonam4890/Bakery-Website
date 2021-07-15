import React, { Component, useImperativeHandle } from "react";
import styles from './register.module.css'
import Form from "../../component/Form/Form";
import * as actions from '../../Store/index';
import { connect } from 'react-redux';

class Register extends Component {
    state={
        userData: {
            username: '',
            password: '',
        }
    }

    inputChangeHandler = (event, name) => {
        let user = {...this.state.userData, [name]: event.target.value}
        this.setState({
            userData: user
        })
    }

    loginHandler = (e) => {
        e.preventDefault();
        let user = {
            ...this.state.userData
        }
        console.log(user)
        this.props.onLogin(user);
        
    }

    

    signUpHandler = (e) => {
        e.preventDefault();
        let user = {
            ...this.state.userData
        }
        console.log(user)
        this.props.onSignUp(user);
    }

    render(){
        let redirect = <Form label={this.state.userData} changeHandler={this.inputChangeHandler} login = {this.loginHandler} signUp={this.signUpHandler} err={this.props.error}/>
       
        if(this.props.authenticate){
            redirect = this.props.history.push('/store');
        } 
        return (
            <div>
                {redirect}
            </div>
        );
    }
}


  const mapStateToProps = (state) => { 
    return {
      error: state.error,
      authenticate: state.authenticated,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      onLogin: (data) => dispatch(actions.login(data)),
      onSignUp: (data) => dispatch(actions.signUp(data)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);
  