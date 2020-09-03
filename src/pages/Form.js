import React, { useState } from 'react'
import Axios from 'axios';
import { addNewProduct } from '../redux/actions';
import { connect } from 'react-redux';

function Form(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState ("");
    
    const url = "http://localhost:8000"

    function addNewProduct(e) {
        e.preventDefault()
        const data = {
            id: Date.now(),
            title,
            price,
            desc,
            image,
            phone,
            name
        }
        Axios.post(`${url}/posts`, data)
            props.addNewProduct(data)
            // setTitle(''),
            // setPrice(''),
            // setDesc(''),
            // setImage(''),
            // setPhone(''),
            // setName('')
    }
    return (
        <div>
            <form onSubmit={(event) => addNewProduct(event)}>
                <div className="form-group col-md-5 mt-5">
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
                        placeholder="Описание товара"
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
                    <button className="btn btn-primary w-100"
                        type="submit">
                        Опубликовать товар
                    </button>
                </div>
            </form>
        </div>
    )
}



export default connect(null, {addNewProduct}) (Form)
