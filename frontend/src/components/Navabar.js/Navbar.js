import React from 'react';


class Navbar extends React.Component{
    render() {
        return (
            <div id="main-navbar" className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom shadow-lg">
                <h5 className="my-0 mr-md-auto font-weight-normal">Staples Web App</h5>
                <div>
            
                </div>
                <nav className="my-2 my-md-0 mr-md-3 navbar-text ">
                    
                    <a className="p-2 " href="/">All Items</a>
                    <a className="p-2" href="/">Displays</a>
                    <a className="p-2" href="/">Github</a>
                    <a className="p-2" href="/DataManipulation">Data Control Panel</a>
                    
                </nav>
            </div>
        );
    }ß

}

export default Navbar;