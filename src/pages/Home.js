import React, { useEffect } from 'react'
import List from '../components/products/List'
import { Container, Button } from 'reactstrap'
import { fetchData } from '../redux/actions'
import { connect } from 'react-redux'


function Home(props) {
    function getData(url) {
        fetch(url)
            .then(function(response) {
                console.log(response)
                return response.json()
            })
            .then(function(data) {
                console.log(data)
                pagination(data)
            .catch(function(err) {
                console.log('Err: ', err)
            })
            })
    }
    function pagination(data) {
        const {current, previous, next} = data;
    }
    const {fetchData} = props;
    useEffect(()=>{
        fetchData();
    }, [fetchData]);
    
    if(props.err){
        return <h4 className='text-danger'>
            {props.err.message}
        </h4>
    }
    return (
        <Container>
            Home
            <List data={props.data}/>
            <Button onClick={(previous)=>getData(previous)} className="prevBtn">&larr;</Button>
            <Button onClick={(next)=>getData(next)} className="nextBtn">&rarr;</Button>
        </Container>
    )
}

const mapStateToProps = (state)=>{
    const {data, loading, err} = state.ProductReducer;
    return {data, loading, err};
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchData: ()=>dispatch(fetchData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
