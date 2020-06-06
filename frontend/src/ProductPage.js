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
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100 carousel-pic" src="http://4.bp.blogspot.com/-w8U75TCuhgU/Tzw8TmaclvI/AAAAAAAABJ0/6fMMcRLAceM/s1600/Rabbit3.jpg" alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-pic" src="https://shop-resources.prod.cms.tractorsupply.com/resource/image/18248/portrait_ratio3x4/595/793/4c37b7f6d6f9d8a5b223334f1390191b/JJ/ten-reasons-not-to-buy-an-easter-bunny-main.jpg" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 carousel-pic" src="https://storage.googleapis.com/scratchpay-com-assets/images/How%20Much%20Is%20a%20Pet%20Bunny/how_much_is_a_pet_bunny.jpg" alt="Third slide" />
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
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                
        </div>

        
        )
        
    }
}

export default ProductPage;