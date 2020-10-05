
import {Link} from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'

import {CartContext} from '../../context/Cart'
import { Button} from '@material-ui/core'

import './style2.css'
import api from '../../services/api'

function Info(props){
    const[ cart, setCart] = useContext(CartContext)
    const [product, setProduct] = useState({})

    useEffect(() => {
        //console.log(props.match.params.id)
        api.get('products').then(response => {
            const selectedProduct = response.data.find(product => product.id == props.match.params.id)
            setProduct(selectedProduct)
        })
    }, [])

    const addToCart = (product) => {
        setCart(currentCart => [...currentCart, product])
      }
    

    return(
        <div>
            <div key={product.id} className="card2">
                <img
                    className="medium2"
                    src={product.picture}
                    alt={product.title}
                    />
                <div className="card-description">
                    <h3>{product.description}</h3>
                </div>    
                <div className="card-body2">
                    <h2>{product.title}</h2>
                    <h3>{product.memory}</h3>
                    <h3>{product.chipype}</h3>
                    <h3>{product.brand}</h3>
                <div className="price2">R${product.price}</div>
                    <Link to='/Cart' >
                        <Button style={{fontSize: 40}} onClick={() => addToCart(product)} variant="contained" color="secondary">
                            Comprar 
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Info
