import React from 'react'

import './App.css'

import ProductLayout from './ProductLayout'
import Navbar from './Navbar'

class HomePage extends React.Component {

    constructor(props){
        super(props)
        this.state = {searchVar: ''}

    }

    render(){
        return (
            <div className="App">
                <Navbar />
                <ProductLayout/>
            </div>
        );
    }
}

export default HomePage