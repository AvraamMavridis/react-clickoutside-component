import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import isDescendant from './isDescendant';

const clickOutsideEvents = [ 'mousedown', 'touchstart' ];

export default class ClickOutside extends Component {

      static propTypes =
      {
            children       : PropTypes.node,
            onClickOutside : PropTypes.any,
      };

      componentDidMount()
      {
            if ( !this.props.onClickOutside ) return;
            clickAwayEvents.forEach( e => document.addEventListener( e, this.props.onClickOutside ) )
      }

      /**
       * Remove the listener in case the props change and there is not ClickAway handler
       * @param  { Object } prevProps
       */
      componentDidUpdate( prevProps )
      {
            if ( prevProps.onClickOutside !== this.props.onClickOutside )
            {
                  clickAwayEvents.forEach( e => document.removeEventListener( e, this.props.onClickOutside ) );

                  if ( this.props.onClickOutside )
                  {
                      clickAwayEvents.forEach( e => document.addEventListener( e, this.props.onClickOutside ) )
                  }
            }
      }

      /**
       * Remove listeners when Component unmount
       */
      componentWillUnmount()
      {
           clickAwayEvents.forEach( e => document.removeEventListener( e, this.props.onClickAway ) );
      }

      /**
       * Call callback on ClickAway and pass the event
       * @param  event
       */
      handleClickAway = ( e ) =>
      {
            const el = ReactDOM.findDOMNode( this );

            if ( document.documentElement.contains( e.target ) && !isDescendant( el, e.target ) )
            {
                this.props.onClickAway( e );
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
