import React from 'react';
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">
                {props.message}
            </div>
        </div>
    );
}

Spinner.defaultProps = {//good practice to add default text in case no prop supplied
    message: 'Loading...'//if we dont pass in a message prop it will default to this
};

export default Spinner;