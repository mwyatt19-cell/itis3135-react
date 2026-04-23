import { useEffect, useState } from "react";
import "./Slideshow.css";

export default function Slideshow() {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        fetch("https://api.thedogapi.com/v1/images/search?limit=10")
            .then((response) => response.json())
            .then((data) => {
                setImages(data);
            })
            .catch((error) => {
                console.error("Error fetching images:", error);
            });
    }, []);
    function goFirst() {
        setCurrentIndex(0);
    }

    function goPrevious() {
        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1;
            }
            if (prevIndex <= 0) {
                return images.length - 1;
            }
            return prevIndex;
        });
    }

    function goNext() {
        setCurrentIndex((prevIndex) => {
            if (prevIndex < images.length - 1) {
                return prevIndex + 1;
            }
            else if (prevIndex >= images.length - 1) {
                return 0;
            }
            return prevIndex;
        });
    }

    function goEnd() {
        setCurrentIndex(images.length - 1);
    }
    function playSlideshow() {
        if (intervalId) return;

        const id = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < images.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(id);
                    setIntervalId(null);
                    return prevIndex;
                }
            });
        }, 3000);

        setIntervalId(id);
        setIsPlaying(true);
    }
    function stopSlideshow() {
        clearInterval(intervalId);
        setIntervalId(null);
        setIsPlaying(false);
    }
    return (
        <section>
            <h2>Dog Slideshow</h2>
            {images.length > 0 ? (
                <><img
                    src={images[currentIndex].url}
                    alt="Dog"
                    style={{ width: "500px", height: "500px", objectFit: "cover" }} /><p>
                        Image {currentIndex + 1} of {images.length}
                    </p>
                    <div>
                        <button className="btn" onClick={goFirst}>First</button>
                        <button className="btn" onClick={goPrevious}>Previous</button>
                        <button className="btn" onClick={goNext}>Next</button>
                        <button className="btn" onClick={goEnd}>End</button>
                        <button className="btn play" onClick={playSlideshow} disabled={isPlaying}>Play</button>
                        <button className="btn stop " onClick={stopSlideshow} disabled={!isPlaying}>Stop</button>

                    </div>
                </>

            ) : (
                <p>Loading images...</p>
            )}

        </section>
    );
}