

import React, {Component} from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from '../../redux/actions'
import Logo from '../../components/logo/logo'

const ListItem = List.Item

class Register extends Component {
  state = {
    username: '',  
    password: '',  
    password2: '',  
    type: 'laoban',  
  }

  
  register = () => {
    //console.log(this.state)
    this.props.register(this.state)
  }

  handleChange = (name, val) => {

    this.setState({
      [name]: val  
    })
  }

  toLogin = () => {
    this.props.history.replace('/login')
  }

  render() {
    const {type} = this.state
    const {msg, redirectTo} = this.props.user
  
    if(redirectTo) {
      return <Redirect to={redirectTo}/>
    }

    return (
      <div>
        <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            {msg ? <div className='error-msg'>{msg}</div> : null}
            <WhiteSpace/>
            <InputItem placeholder='username' onChange={val => {this.handleChange('username', val)}}>username:</InputItem>
            <WhiteSpace/>
            <InputItem placeholder='password' type="password" onChange={val => {this.handleChange('password', val)}}>username:</InputItem>
            <WhiteSpace/>
            <InputItem placeholder='password for sure' type="password" onChange={val => {this.handleChange('password2', val)}}>username:</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>Two user group:</span>
              &nbsp;&nbsp;&nbsp;
              <Radio checked={type==='dashen'} onChange={() => this.handleChange('type', 'dashen')}>D-staff</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={type==='laoban'}  onClick={() => this.handleChange('type', 'laoban')}>L-TA</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>register</Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>Registered?</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {register}
)(Register)