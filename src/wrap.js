import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import reactCSS from 'reactcss'
import debounce from 'lodash/debounce'
import * as listener from './listener'
import classnames from 'classnames'


export default function BoundsWrapper() {
  return function(Target) {

    class Bounds extends Component {

      static defaultProps = {
        target: <div/>
      }

      state = {
        loaded: false,
        width: 0,
        height: 0,
        activeBounds: []
      }

      constructor(props, context) {
        super(props, context)

        this.debounce = debounce(()=> {
          this.setState({ debounced: true })
        }, 100)

        this.handleResize = this.handleResize.bind(this)
        this.handleLookup = this.handleLookup.bind(this)
      }

      handleResize(log) {
        let component = ReactDOM.findDOMNode(this.refs.wrap)
        let {clientWidth: width, clientHeight: height} = component
        this.setState({ 
          loaded: true, 
          debounced: false, 
          activeBounds: this.calculateBounds(width, height),
          width, 
          height 
        })
        this.debounce()
      }

      calculateBounds(newWidth, newHeight) {
        let bounds = Component.bounds && Component.bounds()
        let activeBounds = []

        if (bounds) {
          for (let boundName in bounds) {
            if (bounds.hasOwnProperty(boundName)) {
              let boundValue = bounds[boundName]

              let minWidth = boundValue.minWidth || 0
              let maxWidth = boundValue.maxWidth || 99999

              if (boundValue.minWidth || boundValue.maxWidth) {
                if (newWidth > minWidth && newWidth < maxWidth) {
                  activeBounds.push(boundName)
                }
              }

              let minHeight = boundValue.minHeight || 0
              let maxHeight = boundValue.maxHeight || 99999

              if (boundValue.minHeight || boundValue.minHeight) {
                if (newHeight > minHeight && newHeight < minHeight) {
                  activeBounds.push(boundName)
                }
              }

            }
          }
        }

        return activeBounds
      }

      componentDidMount() {
        let component = ReactDOM.findDOMNode(this.refs.component)
        listener.add(component, this.handleResize)

        if (!this.state.loaded) {
          this.handleResize()
        }
      }

      shouldComponentUpdate(nextProps, nextState) {
        if (this.state.loaded 
              && _.isEqual(this.state.activeBounds, nextState.activeBounds) 
              && nextState.debounced !== true) {
          return false
        }

        return true
      }

      componentWillUnmount() {
        let component = ReactDOM.findDOMNode(this.refs.component)
        listener.remove(component, this.handleResize)
      }

      handleLookup(bound) {
        return this.state.activeBounds.indexOf(bound) > -1
      }

      render() {
        const classes = classnames(this.state.activeBounds)
        const styles = reactCSS({
          'default': {
            wrap: {
              position: 'relative',
              height: '100%',
            },
            component: {
              height: '100%',
            },
          },
        })

        const {width, height, activeBounds, loaded} = this.state
        const {target: Target} = this.props

        console.log(width, height, Target)

        return <div ref="wrap" style={styles.wrap}>
          <div ref="component" className={classes} style={styles.component}>
            { loaded && width > 0 ?
              <Target {...this.props}
                width={width}
                height={height}
                activeBounds={activeBounds}
                isBound={this.handleLookup} />
              : null }
          </div>
        </div>
      }
    }

    return Bounds
  }
} 

