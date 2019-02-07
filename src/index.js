import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'; //importing a component
import Spinner from './Spinner';

class App extends React.Component{
    constructor(props){//the cons great place to init state
        super(props);//super is a reference to the parent classes constructor function - we call it to ensure it runs
        this.state = {lat : null, errorMessage: ''}; //init the state with an object of property/key lat with unknown value
}

//Always do data loading here
componentDidMount(){
    console.log('componentDidMount here');

    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        err => this.setState({errorMessage: err.message})
    );
}

componentDidUpdate(){
    console.log('componentDidUpdate here');
}
    render(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/> //passing the lat prop into our custom component
        }

        return <Spinner message="Please accept location request"/>;
    }
}

ReactDOM.render(
    <App />,document.querySelector('#root')
);
