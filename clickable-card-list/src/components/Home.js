import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import UpdateUserComp from './UpdateUserComp'


function Home() {
    const url = 'https://60c13bceb8d3670017556aa3.mockapi.io/products'
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false,
    })

    useEffect(()=> {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setProducts({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(()=> {
            setProducts({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    let content = null;

    if(products.error){
        content = <p>There was an error please refresh or try again later</p>
    }

    if(products.loading){
        content = <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    }

     changeContent() = (product) => {
        content = product.name
    }

    if(products.data){
        content = 
        products.data.map((product, key) => 
        <div onClick={(product) => this.changeContent}>
              <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>


  </Card.Body>
</Card>


        </div>
        )
    }

    return (
        <div>
            Best Sellers
        {content}    
        </div>

    );
}

export default Home;