import React, {Component} from 'react';

class Navbar extends Component{
    render(){
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">CustomerAPI</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
