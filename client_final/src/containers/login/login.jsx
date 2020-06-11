/*
Login components
 */

import React, {Component} from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from '../../redux/actions'

import Logo from '../../components/logo/logo'

const ListItem = List.Item

class Login extends Component {
  state = {
    username: '',  
    password: '',  
  }

  login = () => {
    this.props.login(this.state)
  }

  
  handleChange = (name, val) => {
    
    this.setState({
      [name]: val  
    })
  }

  toRegister = () => {
    this.props.history.replace('/register')
  }

  render() {

    const {msg, redirectTo} = this.props.user
    
    if(redirectTo) {
      return <Redirect to={redirectTo}/>
    }

    return (
      <div>
        <NavBar>MeetH_bNeedsYou!</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            {msg ? <div className='error-msg'>{msg}</div> : null}
            <WhiteSpace/>
            <InputItem placeholder='username' onChange={val => {this.handleChange('username', val)}}>username:</InputItem>
            <WhiteSpace/>
            <InputItem placeholder='password' type="password" onChange={val => {this.handleChange('password', val)}}>password:</InputItem>
            <WhiteSpace/>

            <Button type='primary' onClick={this.login}>LOGIN</Button>
            <WhiteSpace/>
            <Button onClick={this.toRegister}>Let's Register!</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {login}
)(Login)