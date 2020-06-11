import React, {Component} from 'react'
import PropTypes from 'prop-types'


export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  static childContextTypes = {
    store: PropTypes.object.isRequired
  }

  getChildContext() {
    return {store: this.props.store};
  }

  render() {
    
    return this.props.children
  }
}


export function connect(mapStateToProps = () => null, mapDispatchToProps = {}) {
  return (WrapComponent) => {
    return class ConnectComponent extends Component {
      
      static contextTypes = {
        store: PropTypes.object.isRequired
      }

      constructor(props, context) {
        super(props)
        console.log('constructor', this.context) 
        const {store} = context
        const stateProps = mapStateToProps(store.getState())
        const dispatchProps = this.bindActionCreators(mapDispatchToProps)

        this.state = {
          ...stateProps
        }
        this.dispatchProps = dispatchProps
      }

      
      bindActionCreators = (mapDispatchToProps) => {
        const dispatchProps = {}
        Object.keys(mapDispatchToProps).forEach((key) => {
          const actionCreator = mapDispatchToProps[key]
          dispatchProps[key] = (...args) => {
            this.context.store.dispatch(actionCreator(...args))
          }
        })
        return dispatchProps
      }

      componentDidMount() {
        console.log('componentDidMount', this.constructor)
        const {store} = this.context
        store.subscribe(() => {
          this.setState(mapStateToProps(store.getState()))
        })
      }

      render() {
        return <WrapComponent {...this.state} {...this.dispatchProps}/>
      }
    }
  }
}
