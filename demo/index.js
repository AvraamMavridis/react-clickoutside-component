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
