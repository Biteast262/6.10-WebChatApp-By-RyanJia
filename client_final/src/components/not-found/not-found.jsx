/*
NOT Find page
 */

import React from "react"
import {Button} from "antd-mobile"

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>NOT FIND THE PAGE.</h2>
          <Button
            type="primary"
            onClick={() => this.props.history.replace("/")}
          >
            HomePage
          </Button>
        </div>
      </div>
    )
  }
}

export default NotFound