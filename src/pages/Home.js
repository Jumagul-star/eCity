import React, { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button,
    Container,
} from 'reactstrap';
import frizer from "../assets/frizer.jpg"
import komp from "../assets/komp.jpg"
import "./Home.css"
import List from '../components/products/List'


const items = [
    {
        src: frizer,
        comment: <p className="HomeCarouselCommentFirst">SuperFrizer</p>,
        caption: <Button className="HomeCarouselButtonFirst">Get started</Button>
    },
    {
        src: komp,
        comment: <p className="HomeCarouselCommentSecond">SuperComputer</p>,
        caption: <Button className="HomeCarouselButtonSecond">Buy right now</Button>
    },
    {
        src: frizer,
        comment: <p className="HomeCarouselCommentThird">Fast</p>,
        caption: <Button className="HomeCarouselButtonThird">View details</Button>
    }
];

const HomeCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }



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

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className="img-car" src={item.src} alt={item.altText} />
                <CarouselCaption className="mb-1 text-center" captionText={item.caption} captionHeader={item.comment} />
            </CarouselItem>
        );
    });

    return (
        <div className="HomeMainDiv">
            {/* Carousel */}
            <Container>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl className="car-icon-prev" direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl className="car-icon-next" direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </Container>
        </div>
    );
}

export default HomeCarousel;