import React from 'react'

import './App.css'

import Navbar from './Navbar'

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: this.props.match.params.id, productInfo: ''};
        this.componentDidMount();
    }

    async componentDidMount() {
        
            let link = "http://localhost:8080/item/"
            link = link.concat(this.state.id);

            fetch(link)
                .then(response => response.json())
                .then(data => this.setState({productInfo: data[0]}))
        
        console.log(this.state.productData)
    
    }

    render() {
        return (
            <div class="product-page">
                <Navbar />

                <div class="row justify-content-center">
                    <div id="carousel-Item" class="col-lg-10 text-center align-self-center">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-t0="0" class="active"> </li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"> </li>
                                
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100 carousel-pic" src="" alt=""></img>
                                </div>

                                <div class="carousel-item ">

                                </div>

                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="false"></span>
                                <span class="sr-only">Next</span>
                            </a>

                        </div>
                    </div>

                </div>


                <div id="" class="container product-info rounded-lg my-2">
                    <div class="row">
                        <div class="col-lg-5">
                            <p>{this.state.productInfo.Name}</p>
                        </div>
                        <div class="col-lg-5">
                            <p>Product SKU: {this.state.productInfo._id}</p>
                        </div>
                    </div>

                    <div>
                        <p>Locations</p>
                        <ul>
                            <li>Location 1</li>
                            <li>Location 2</li>
                        </ul>
                    </div>
            
                </div>
        </div>
        )
        
    }
}

export default ProductPage;