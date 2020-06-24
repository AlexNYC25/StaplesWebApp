import React from 'react'

import ProductCarousel from './ProductCarousel/ProductCarousel'

//import './App.css'

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: this.props.match.params.id, productInfo: '', productImages:[]};
        this.componentDidMount();
    }



    async componentDidMount() {
            let link = "http://localhost:8080/item/"
            link = link.concat(this.state.id);

            fetch(link)
                .then(response => response.json())
                .then(data => this.setState({productInfo: data[0], productImages:data[0].images}))

    }

    render() {
        return (
            <div class="product-page">
                <ProductCarousel ProductID = {this.state.id} Images={this.state.productImages}/>

                <div id="" class="container product-info rounded-lg my-2">
                    <div class="row">
                        <div class="col-lg-5">
                            <p>{this.state.productInfo.Name}</p>
                        </div>
                        <div class="col-lg-5">
                            <p>Product SKU: {this.state.productInfo._id}</p>
                        </div>
                        <div className='col-lg-2'>
                            <p>
                                Product Price: 
                                {this.state.productInfo.price != null
                                ? '$'.concat(this.state.productInfo.price)
                                : ' No price Available right now' 
                                }
                            </p>
                        </div>
                    </div>

                    <div>
                        <p>Locations</p>
                        <ul>
                            {this.state.productInfo.locations != null
                            ? this.state.productInfo.locations.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })
                            : <li>There are no locations</li>
                            }
                        </ul>

                    </div>
            
                </div>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                
        </div>

        
        )
        
    }
}

export default ProductPage;