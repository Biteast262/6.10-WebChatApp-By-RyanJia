/*
User personal center routing component
 */

import React from 'react'
import {Result, List, WhiteSpace, Button, Modal} from 'antd-mobile'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {resetUser} from '../../redux/actions'

const Item = List.Item
const Brief = Item.Brief

class Personal extends React.Component {

  logout = () => {
    // alert('-----')
    Modal.alert('Sign out', 'Sign out for sure?', [
      {text: 'cancel'},
      {
        text: 'sure',
        onPress: ()=> {

         Cookies.remove('userid')
        
          this.props.resetUser()
        }
      }
    ])
  }

  render() {
    const {username, info, header, company, post, salary} = this.props.user
    return (
      <div style={{marginBottom:50, marginTop:50}}>
        <Result
          img={<img src={require(`../../assets/images/${header}.png`)} style={{width: 50}} alt="header"/>}
          title={username}
          message={company}
        />

        <List renderHeader={() => 'Infor'}>
          <Item multipleLine>
            <Brief>Field A: {post}</Brief>
            <Brief>Field B: {info}</Brief>
            {salary ? <Brief>Field C: {salary}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace/>
        <List>
          <Button type='warning' onClick={this.logout}>Logout</Button>
        </List>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {resetUser}
)(Personal)