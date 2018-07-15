import React from 'react';
import { Nav, NavbarBrand, NavItem} from 'react-bootstrap';
import logo from '../img/logo.png';

const Header = () => {
return(
    <Nav style={styles.header}   >
        <NavbarBrand>
            <a><img src={logo}  alt={"webSite logo, consisting of two HTML tags with the developer's initials"}/></a>
        </NavbarBrand>
        <NavItem href="mailto:viniciusarre@gmail.com"  className={"pull-right"}  style={{padding:10 }}>
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