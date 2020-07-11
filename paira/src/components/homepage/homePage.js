import React from 'react';
import './homePage.css';
import thequokka from '../resources/thequokka.jpg'

var sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${thequokka})`

  };
  


const HomePage = () => {


    return(
        <div>
        <section style={ sectionStyle }>
            <div>
            Koala"s are cute little creatures
            </div>
        </section>
        </div>
    );

}

export default HomePage;