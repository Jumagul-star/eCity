import React from 'react'
import { Row, Col, FormGroup, Label, Input, Form, Button, Container } from 'reactstrap'

function Order() {
    return (
        <Container className='md-2 mt-5'>
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type='email' name='email' placeholder='Введите Ваш адрес электронной почты'></Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Имя</Label>
                            <Input type='text' name='name' placeholder='Введите Ваше имя'></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label>Номер телефона</Label>
                    <Input type='number' name='number' placeholder='Введите ваш номер телефона'></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Название товара</Label>
                    <Input type='text' name='product' placeholder='Введите название товара'></Input>
                </FormGroup>
                <Button className='bg-success'>Заказать</Button>
            </Form>
        </Container>
    )
}

export default Order
