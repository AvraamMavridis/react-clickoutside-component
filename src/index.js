import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const clickOutsideEvents = [ 'mousedown', 'touchstart' ];
const isDescendant = ( el, target ) => target !== null ? el === target || isDescendant( el, target.parentNode ) : false;

export default class ClickOutside extends Component {

      static propTypes =
      {
            children       : PropTypes.node,
            onClickOutside : PropTypes.any,
      };

      componentDidMount()
      {
            if ( !this.props.onClickOutside ) return;
            clickOutsideEvents.forEach( e => document.addEventListener( e, this.handleClickOutside ) )
      }

      /**
       * Remove the listener in case the props change and there is not ClickAway handler
       * @param  { Object } prevProps
       */
      componentDidUpdate( prevProps )
      {
            if ( prevProps.onClickOutside !== this.props.onClickOutside )
            {
                  clickOutsideEvents.forEach( e => document.removeEventListener( e, this.handleClickOutside ) );

                  if ( this.props.onClickOutside )
                  {
                      clickOutsideEvents.forEach( e => document.addEventListener( e, this.handleClickOutside ) )
                  }
            }
      }

      /**
       * Remove listeners when Component unmount
       */
      componentWillUnmount()
      {
           clickOutsideEvents.forEach( e => document.removeEventListener( e, this.handleClickOutside ) );
      }

      /**
       * Call callback on ClickAway and pass the event
       * @param  event
       */
      handleClickOutside = ( e ) =>
      {
            const el = ReactDOM.findDOMNode( this );

            if ( document.documentElement.contains( e.target ) && !isDescendant( el, e.target ) )
            {
                this.props.onClickOutside( e );
            }
      };

      /**
       * Render the Elements that are Wrapped by the ClickAway
       */
      render()
      {
           return this.props.children;
      }
}
