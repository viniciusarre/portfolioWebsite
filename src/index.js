import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ScrollToTop from 'react-scroll-up'
import FaArrow from 'react-icons/lib/fa/arrow-up';

ReactDOM.render(

    <body style={{height:'100%', width:'100%'}}>
        <Header/>
        <App />
        <Footer/>


        <ScrollToTop showUnder={160}>
            <FaArrow style={{backgroundColor:'#151D32', height:40, width:40}} size={20} color = "white"/>
        </ScrollToTop>
    </body>
    ,


    document.getElementById('root'));
