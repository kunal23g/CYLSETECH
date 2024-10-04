import React, { useEffect, useState, useRef } from 'react';
import video from '../assets/video.mp4'
import image from '../assets/bgImage.png'

function Eyes() {
    const [rotate, setRotate] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [showText, setShowText] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const toggleVideo = () => {
        setIsVideoPlaying(prev => !prev);
        if (videoRef.current) {
            if (!isVideoPlaying) {
                videoRef.current.play();
                setShowText(false);
                setTimeout(() => {
                    setShowText(true);
                }, 3000);
            } else {
                videoRef.current.pause();
                setShowText(false);
            }
        }
    };

    return (
        <div id='insights' className='w-full h-screen overflow-hidden'>
            <div 
                onClick={toggleVideo}
                className={`relative w-full h-full cursor-pointer ${
                    !isVideoPlaying 
                    ? 'bg-cover bg-center'
                    : ''
                }`}
                style={{
                    backgroundImage: !isVideoPlaying ? `url(${image})` : 'none'
                }}
                data-scroll 
                data-scroll-speed='-0.8'
            >
                <video
                    ref={videoRef}
                    className={`absolute top-0 left-0 w-full h-full object-cover ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`}
                    src={video}
                    playsInline
                    loop
                    muted
                />
                {isVideoPlaying && showText && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white font-foundersGrotesk text-6xl lg:text-9xl font-bold z-10 transition-opacity duration-1000 opacity-100">
                            CYLSETECH
                        </h1>
                    </div>
                )}
                {!isVideoPlaying && (
                    <div className='absolute flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        {[0, 1].map((index) => (
                            <div 
                                key={index}
                                className='relative flex items-center justify-center w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[25vw] md:h-[25vw] lg:w-[15vw] lg:h-[15vw] rounded-full bg-zinc-100'
                            >
                                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                                    <div 
                                        style={{
                                            transform: `translate(-50%,-50%) rotate(${rotate}deg)`
                                        }} 
                                        className='line flex absolute top-1/2 left-1/2 w-full h-10'
                                    >
                                        <div className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-zinc-100'></div>
                                        <h1 className='uppercase ml-3 font-bold text-2xl text-white hidden md:block'>PLAY</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Eyes;
