import React from 'react';
import '../Style/style.css';
import bg from '../img/bgIntro.jpg';
import FaArrow from 'react-icons/lib/fa/arrow-down';

// https://stocksnap.io/photo/BKWZJHXR57
// https://stocksnap.io/photo/A28WZDTYEY
const Introduction = ({data}) =>{
    const {presentation} = data;
    return(
    <section className={"bg-primary"} style={styles.bg} >
        <div style={styles.caption} className="text-center">{presentation}</div>

        <span style={{paddingLeft:'45%'}}>
            <a href={"#about"} style={{color:'inherit'}}>
                <FaArrow size={'10%'} style={{marginTop:'2.5%', cursor:'pointer' }}/>
            </a>
        </span>
    </section>
)
};

const styles = {
    bg: {
        backgroundImage:`url(${bg}) `,
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'content-box, padding-box',
        backgroundAttachment:'fixed',
        backgroundClip: 'padding-box',
        backgroundSize:'cover',
        height:'100%',
        minWidth:'100%',
        marginTop:'none'
    },
    caption:{
        paddingTop:'15%',
        paddingBottom:'10%',
        fontSize: '2.5em',
        color:'white',
        textShadow:'1px 1px 2px black',
        fontWeight:'bold'
    },


};


export default  Introduction;

