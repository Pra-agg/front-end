import React, { useState } from 'react'
import { Col, Container, Modal, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout'
import {Input} from "../../components/UI/Input"

/**
* @author
* @function Products
**/

export const Products = (props) => {
  const [name,setName] = useState('');
  const [ quantity,setQuantity] = useState('');
  const [price,setPrice] = useState('');
  const [description,setDescription] = useState('');
  const [categoryId,setCategoryId] = useState('');
  const [productPicture,setProductPictures]= useState([]);
  const [show,setShow] = useState(false);
  const category = useSelector(state => state.category);

  const handleClose = () => {
    setShow(false)
  }
const handleShow = () => setShow(true);

const createCategoryList=(categories,options=[])=>{
  for(let category of categories){
      options.push({
          value:category._id,
          name:category.name
      })
      if(category.children.length>0){
          createCategoryList(category.children,options)
      }

  }
  
  
}
const handleProductPictures =(e)=>{
  setProductPictures([
    ...productPicture,
    e.target.files[0]
  ])
}
console.log(productPicture)

  return(
      <>
      <Layout sidebar>
      <Container>
      <Row>
           <Col md={12}>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <h3>Products</h3>
           <button onClick={handleShow}>Add</button>
           </div>

           </Col>
       </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Input
        label = "Name"
             value={name}
        placeholder={"Product Name"}
        onChange={(e)=>setName(e.target.value)}>
        </Input>
        <Input
        label = "Quantity"
             value={quantity}
        placeholder={"Quantity"}
        onChange={(e)=>setQuantity(e.target.value)}>
        </Input>
        <Input
        label = "Price"
             value={price}
        placeholder={"Price"}
        onChange={(e)=>setPrice(e.target.value)}>
        </Input>
        <Input
        label = "Description"
             value={description}
        placeholder={"Description"}
        onChange={(e)=>setDescription(e.target.value)}>
        </Input>
        <select className="form-control"
        value={categoryId}
         onChange={(e)=>setCategoryId(e.target.value)}>
            <option>Select Category </option>
            {createCategoryList(category.categories).map(option=>
            <option key={option.value} value={option.value}>{option.name}</option>)}

        </select>
        {
          productPicture.length > 0 ? 
          productPicture.map((pic ,index) =><div key={index}> {JSON.stringify(pic)}</div>):null
        }
        <input type="file" name="productPicture" onChange={handleProductPictures}>

</input>
       
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

     
      </Layout>
      
            </>
   
   )

 }