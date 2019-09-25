import React from 'react';

const handleClick = (args) => {
  console.log('button  < ', args.buttonTitle,' >  clicked')
  newrelic.addPageAction('clickedButton',{"buttonTitle":args.buttonTitle});
}

const MyButton = (props) => {
    return <button onClick={ () => handleClick( {buttonTitle: props.title } ) } type="button" > {props.title} </button>;
  };

export default MyButton;