import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Header from './Components/Header';

ReactDOM.render(

    <body style={{height:'100%', width:'100%'}}>
        <Header/>
        <App />
        {/*<Footer/>*/}
    </body>
    ,


    document.getElementById('root'));
