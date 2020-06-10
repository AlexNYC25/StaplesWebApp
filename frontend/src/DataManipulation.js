import React from 'react'

import Navbar from './Navbar'
import { Button } from '@material-ui/core'
// Place buttons for different data manipulation functions

// One for inserting a new Product with a product id and Name

// one for changing a product Name using the product id

// one for adding images to a product using id

// one for adding location names to a product id

// one for changing product price 

class DataManipulation extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div className="data-options">
                <Navbar />
                <div className="data-btn-section container">
                    <div className="row btn-row">
                        <Button href="/NewProduct" className="data-btn col col-4 ml-autp">
                            Add New Products
                        </Button>
                        <Button href="/NewProductName" className="data-btn col col-3 ml-auto">
                            Change Product Name
                        </Button>
                        <Button href="#" className="data-btn col col-4 ml-auto">
                            Add Product Images
                        </Button>
                    </div>
                    <div className="row btn-row justify-content-center">
                        <Button href="/AddProductLocation" className="data-btn col col-4 mr-auto">
                            Add Location to Products
                        </Button>
                        <Button href="#" className="data-btn col col-4 ml-auto">
                            Change Product Price
                        </Button>
                    </div>
                </div>
                
  
            </div>
        )
    }
}

export default DataManipulation;