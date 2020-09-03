import React, { useState } from 'react';
import { Card, CardBody, ButtonGroup, Button, Modal } from 'reactstrap';
import styles from './Products.module.css';
import CartSvg from '../../assets/icons/cart.svg'
import {
    addItemToCart,
    removeItemFromCart,
    fetchData,
    deleteProduct,
    editProduct
} from '../../redux/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const url = "http://localhost:8000"

function ListItem(props) {
    const [title, setTitle] = useState(props.item.title);
    const [price, setPrice] = useState(props.item.price);
    const [desc, setDesc] = useState(props.item.desc);
    const [image, setImage] = useState(props.item.image);
    const [phone, setPhone] = useState(props.item.phone);
    const [name, setName] = useState(props.item.name);

    const { item } = props

    const history = useHistory()

    const isInCart = (item, cartItems) => {
        return !!cartItems.find((a) => a.id === item.id);
    }

    const handleCartClick = (e, item) => {
        e.stopPropagation()
        props.addItemToCart(item)
        // if (localStorage.getItem('token')) {
        //     history.replace('/order')
        // }
    }

    const handleRemove = (e, id) => {
        e.stopPropagation()
        props.removeItemFromCart(id)
    }
    const [isOpen, setIsOpen] = useState(false)

    function delData(id, e) {
        e.stopPropagation()
        async function delProduct(id) {
            await Axios.delete(`${url}/posts/${id}`)
            props.deleteProduct(id)
            Axios.get(`${url}/posts`)
                .then(({ data }) => {
                    console.log(data)
                    props.fetchData(data)
                })
        }
        delProduct(id)
    }
    function editData(id) {
        const data = {
            title,
            price,
            desc,
            image,
            name,
            phone
        }
        console.log("PRE PATCH DATA", data)
        setIsOpen("")
        Axios.patch(`${url}/posts/${id}`, data)
            .then((res) => {
                console.log("PATCH DATA", res.data)
                props.editProduct(res.data)
            })
    } 
    return (
        <div>
            <Card 
            // onClick={() => history.replace("/products/" + item.id)}
            >
                <CardBody>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={item.image} />
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <ButtonGroup className='w-100'>
                        <Button color='primary'>{item.price} $</Button>
                        <Button
                            // onClick={handleCartClick}
                            onClick={() => setIsOpen(true)}
                            color='success'>
                            edit
                        </Button>
                        <Modal isOpen={isOpen}>
                            <form>
                                <div className="form-group">
                                    <Button className="btn-light">
                                        &times;
                                    </Button>
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        placeholder="Название товара"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <input
                                        className="form-control mb-3"
                                        type="number"
                                        placeholder="Цена"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        placeholder="Подробное описание"
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        placeholder="URL фото"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        placeholder="Имя и фамилия"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        className="form-control mb-3"
                                        type="number"
                                        placeholder="Контактный номер телефона"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <button className="btn btn-primary w-100" type="submit"
                                        onClick={() => editData(item.id)}>
                                        Сохранить
                                    </button>
                                </div>
                            </form>
                        </Modal>
                        <Button
                            // onClick={handleCartClick}
                            onClick={(e) => delData(item.id, e)}
                            color='danger'>
                            &times;
                        </Button>
                        {isInCart(item, props.cartItems) ? (
                            <Button
                                color="warning"
                                onClick={(e) => handleRemove(e, item.id)}
                            >
                                Remove from cart
                            </Button>
                        ) : (
                                <Button
                                    onClick={(e) => handleCartClick(e, item)}
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

// const mapStateToProps = (state) => {
    
//     let { products } = state.ProductReducer
//     return { products }
// }
export default connect(mapStateToProps, { 
    addItemToCart, 
    removeItemFromCart, 
    deleteProduct, 
    fetchData, 
    editProduct 
})(ListItem)
