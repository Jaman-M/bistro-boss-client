import { Helmet } from 'react-helmet-async';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <h2>This is menu</h2>
        </div>
    );
};

export default Menu;