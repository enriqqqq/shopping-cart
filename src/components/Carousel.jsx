import { useState, useEffect, useRef, createRef } from 'react';
import styles from './Carousel.module.css';

function Carousel() {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            alt: "White and blue cloud sky"
        },
        {
            url: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            alt: "Man sitting on rock surrounded by water"
        },
        {
            url: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            alt: "Woman walking along the street"
        }
    ];
    
    const imgRefs = useRef(images.map(() => createRef()));
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);    
    });

    useEffect(() => {
        imgRefs.current[currentSlide].current.scrollIntoView();
    }, [currentSlide]);

    const handleNavClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.slider_wrapper}>
                <div className={styles.slider}>
                    {
                        images.map((image, index) => {
                            return (
                                <img 
                                    key={`slide-${index + 1}`} 
                                    ref={imgRefs.current[index]}
                                    className={styles.slider_img} 
                                    src={image.url} 
                                    alt={image.alt} 
                                />
                            )
                        })
                    }
                </div>
                <div className={styles.slider_nav}>
                    {
                        images.map((_, index) => {
                            if (index === currentSlide) {
                                return (
                                    <a 
                                        key={`nav-${index + 1}`} 
                                        className={`${styles.slider_a} ${styles.a_selected}`} 
                                        onClick={() => handleNavClick(index)}
                                    />
                                )
                            } else {
                                return (
                                    <a 
                                        key={`nav-${index + 1}`} 
                                        className={styles.slider_a} 
                                        onClick={() => handleNavClick(index)}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel;

// REFERENCE: https://www.youtube.com/watch?v=McPdzhLRzCg