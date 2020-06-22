import React from 'react'

//import '../App.css'

import ProductLayout from './ProductLayout/ProductLayout'

class HomePage extends React.Component {

    constructor(props){
        super(props)

    }

    render(){
        return (
            <div className="App">
                <ProductLayout/>
            </div>
        );
    }
}

export default HomePage