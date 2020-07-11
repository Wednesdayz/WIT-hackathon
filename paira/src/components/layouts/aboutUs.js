import React from 'react';
import background from '../resources/theKoala.png'
import './styles/navbar.css'

var sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${background})`

  };


class aboutUs extends React.Component{
    render() {
        return (
            <div>
            <section style={ sectionStyle }>
			<div>
              We are a team of animal lovers and our goal is to protect, preserve and care for animals during natural disasters. Join us on our mission to protect them!
			</div>
            </section>
            </div>
			
        );
    }
}


export default aboutUs