import React, { useState } from 'react';
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