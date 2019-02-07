import './SeasonDisplay.css';
import React from 'react';
 
// const seasonConfig = {
//     summer : {
//         text: "Let's hit the beach",
//         iconName: 'sun'
//     },
//     winter : {
//         text: "Brrr it's chilly",
//         iconName: 'snowflake'
//     }
// };

const getSeason = (lat,month)=> {
    if (month > 2 && month < 9){//if months April to August
        return lat > 0 ? 'summer' : 'winter'; //ternary expression, lat is evaluated if more than 0 summer
        //<<if less than 0 winter
    }else{
        return lat > 0 ? 'winter' : 'summer'; //ternary expression, lat is evaluated if more than 0 summer
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Brr, it is chilly' : "Let's hit the beach";//ternary operator - sets a var of text and evaluates if season is winter then set atext else btext
    const iconName = season === 'winter' ? 'snowflake' : 'sun';

console.log('iconName: ' + iconName);

    return (
    <div className={"season-display " + season}>
        <i className = {"icon-left massive " + iconName + " icon"} />
        <h1>{text}</h1>
        <i className = {"icon-right massive " + iconName + " icon"} />
    </div>
)
};

export default SeasonDisplay;
