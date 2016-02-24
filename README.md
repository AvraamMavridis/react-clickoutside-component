# react-clickoutside-component
A high-order Component wrapper to provide click outside functionality to the
wrapped components

[![npm version](https://badge.fury.io/js/react-clickoutside-component.svg)](https://badge.fury.io/js/react-clickoutside-component)

[![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

### [Demo](http://avraammavridis.github.io/react-clickoutside-component/)

###How to use

1. Import `ClickOutside` component
2. Wrap your main component with the `ClickOutside`
3. Provide an `onClickOutside` callback.

###Example


```javascript
import React                  from 'react';
import ReactDOM               from 'react-dom';
import ClickOutside           from 'react-clickoutside-component';

class App extends React.Component{

    constructor()
    {
        super();
        this.state = {
            text: 'Click Somewhere'
        }
    }

    handleClickOutside()
    {
        this.setState( { text : 'Clicked outsite '})
    }

    onClick()
    {
        this.setState( { text : 'Clicked inside '})
    }

    render(){
        return (<ClickOutside onClickOutside={ ( e ) => this.handleClickOutside( e ) }>
                    <div onClick={ () => this.onClick() }  id="demo" >{ this.state.text }</div>
                </ClickOutside>);
    }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );

  ```

###Options:

| Name        | Description           
| ------------- |-------------:|
| onClickOutside    | function that is called when a click happened outside of the component  |  

###Changelog:

24-02-2016 Release version 1.0.3

### Contribute

Any pull-request is more than welcome :boom: :smile:

### License

MIT
