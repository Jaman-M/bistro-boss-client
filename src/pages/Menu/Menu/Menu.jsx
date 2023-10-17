import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import menuImg from '../../../assets/menu/menu-bg.jpg'

const Menu = () => {
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <Cover img={menuImg} title="Our Menu"></Cover>
            
        </div>
    );
};

export default Menu;