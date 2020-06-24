import React from 'react'
import { Button } from '@material-ui/core'


class DataManipulation extends React.Component {
    
    render() {
        return (
            <div className="data-options">
                <div className="data-btn-section container">
                    <div className="row btn-row">
                        <Button href="/NewProduct" className="data-btn col col-4 mr-auto">
                            Add New Products
                        </Button>
                        <Button href="/NewProductName" className="data-btn col col-3 ml-auto">
                            Change Product Name
                        </Button>
                        <Button href="/AddProductImage" className="data-btn col col-4 ml-auto">
                            Add Product Images
                        </Button>
                    </div>
                    <div className="row btn-row justify-content-center">
                        <Button href="/AddProductLocation" className="data-btn col col-4 mr-auto">
                            Add Location to Products
                        </Button>
                        <Button href="/AddProductPrice" className="data-btn col col-4 ml-auto">
                            Change Product Price
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataManipulation;