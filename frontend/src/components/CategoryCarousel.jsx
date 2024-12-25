import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';

const category = [
    "Frontend developer",
    "Backend developer",
    "Data science",
    "Graphic designer",
    "Fullstack developer"
]

const Categorycarousel = () => {
    return (
        <div>
        <Carousel className="w-full max-w-xl mx-auto my-20">
            <CarouselContent>
                {
                    category.map((cat, index) => (
                        <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                            <Button variant="outline" className="rounded-full">{cat}</Button>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
    )
}

export default Categorycarousel
