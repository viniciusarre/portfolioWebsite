import React from 'react';
import { Nav, NavbarBrand, NavItem} from 'react-bootstrap';
import logo from '../img/logo.png';

const Header = () => {
return(
    <Nav style={styles.header} bsStyle="pills" >
        <NavbarBrand>
            <a href={"#"} ><img src={logo}/></a>
        </NavbarBrand>
        <NavItem href="mailto:viniciusarre@gmail.com"  btnInfo className={"pull-right"} style={{padding:10}}>
                Get in touch
        </NavItem>
        {/*</div>*/}
    </Nav>
    );
};

const styles = {
    header: {
        textDecoration: 'none',
        margin: 0,
        padding: 10
    },
    pad:{
        padding: 10
    }
};

export default Header;