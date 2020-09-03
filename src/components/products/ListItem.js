import React from 'react';
import { Card, CardBody, ButtonGroup, Button } from 'reactstrap';
import styles from './Products.module.css';
import CartSvg from '../../assets/icons/cart.svg'
import { addItemToCart, removeItemFromCart } from '../../redux/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ListItem({item, id, ...props}) {
    const history = useHistory()

    const isInCart = (item, cartItems) => {
        return !!cartItems.find((a) => a.slug === item.slug);
    }

    const handleCartClick = (e, item)=>{
        e.stopPropagation()
        props.addItemToCart(item)
        // if (localStorage.getItem('token')) {
        //     history.replace('/order')
        // }
    }

    const handleRemove = (e, slug) => {
        e.stopPropagation()
        props.removeItemFromCart(slug)
    }

    return (
        <div>
            <Card onClick={() => history.replace("/products/" + item.slug)}>
                <CardBody>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} alt={item.title} src={item.image} />
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <ButtonGroup className='w-100'>
                        <Button color='primary'>{item.price} $</Button> 
                        {isInCart(item, props.cartItems) ? (
                            <Button 
                            color="warning"
                            onClick={(e)=>handleRemove(e, item.slug)}
                            >
                                Remove from cart
                            </Button>
                        ) : (
                            <Button 
                                onClick={(e)=>handleCartClick(e, item)}
                                color='success'>
                                <img
                                    className="ml-1"
                                    width="20"
                                    height="20"
                                    alt="cart"
                                    src={CartSvg} />
                            </Button>
                        )}
                    </ButtonGroup>
                </CardBody>
            </Card>
        </div>
        )
    }

const mapStateToProps = state => state.CartReducer;


export default connect(mapStateToProps, {addItemToCart, removeItemFromCart})(ListItem)
