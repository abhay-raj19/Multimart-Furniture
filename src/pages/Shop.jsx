import React, { useState } from 'react'

import CommonSection from '../components/UI/CommonSection';
import Helmet from  '../components/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';
import '../styles/shop.css';
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList'



const Shop = () => {

  const [productsData,setProductsData] = useState(products)


  const handleFilter = e => {
      const filterValue = e.target.value
      if(filterValue === "sofa") {
        const filteredProducts = products.filter(
          (item) => item.category === "sofa"
        );


        setProductsData(filteredProducts);
      }
  };



  return(
     <Helmet title = 'Shop'>
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
          <Col lg='3' md='3'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option >Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='3'>
          <div className="filter__widget">
              <select >
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='3'>
            <div className="search__box">
              <input type="text" placeholder='Search....' />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
          </Row>         
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop