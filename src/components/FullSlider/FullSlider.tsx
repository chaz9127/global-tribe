import { useState } from 'react';
import './FullSlider.scss';

const FullSlider = () => {
    const slides = [
        {
            img: 'https://images.unsplash.com/photo-1517232115160-ff93364542dd?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            img: 'https://images.unsplash.com/photo-1682562031269-58a59c81432c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            img: 'https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?q=80&w=1149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            img: 'https://images.unsplash.com/photo-1670483111819-ed62eff77173?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];
    const slideLength = slides.length-1;
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [nextSlide, setNextSlide] = useState<number>(1);
    const [prevSlide, setPrevSlide] = useState<number>(slideLength);
    const [leavingSlide, setLeavingSlide] = useState<number | null>(null);
    
    const goToNextSlide = () => {
        const currentSlideIdx = currentSlide === slideLength ? 0 : currentSlide+1;
        const nextSlideIdx = currentSlideIdx === slideLength ? 0 : currentSlideIdx+1;
        const prevSlideIdx = currentSlideIdx === 0 ? slideLength : currentSlideIdx-1;
        setLeavingSlide(currentSlide)
        setCurrentSlide(currentSlideIdx);
        setNextSlide(nextSlideIdx);
        setPrevSlide(prevSlideIdx);
    }

    const goToPreviousSlide = () => {
        const currentSlideIdx = currentSlide === 0 ? slideLength : currentSlide-1;
        const nextSlideIdx = currentSlide;
        const prevSlideIdx = currentSlideIdx === 0 ? slideLength : currentSlideIdx-1;
        setLeavingSlide(currentSlide)
        setCurrentSlide(currentSlideIdx);
        setNextSlide(nextSlideIdx);
        setPrevSlide(prevSlideIdx);
    }
    
    const displaySlides = () => {
        const slidesMap = slides.map( (slide, index: number) => {
            const showClass = index === currentSlide ? 'show ' : '';
            const nextClass = index === nextSlide ? 'next-slide ' : '';
            const prevClass = index === prevSlide ? 'prev-slide ' : '';
            const leavingClass = index === leavingSlide ? 'leaving-slide ' : '';
            return (
                <div style={{backgroundImage: `url(${slide.img})`}} className={`slide ${showClass}${nextClass}${prevClass}${leavingClass}`.trim()} key={index}>
                    <h1>title</h1>
                </div>
            )
        })
        
        return slidesMap;
    };
    return (
        <div className="slide-container">
            {displaySlides()}
            <div className="slide-controls">
                <div onClick={goToNextSlide} className="slide-button next-button">
                    <i className="fa-solid fa-circle-right" />
                </div>
                <div onClick={goToPreviousSlide} className="slide-button prev-button">
                    <i className="fa-solid fa-circle-left" />
                </div>
            </div>
        </div>
    )
}

export default FullSlider;