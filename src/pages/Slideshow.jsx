import { useEffect, useRef, useState } from "react";

const SLIDE_DELAY = 5000;
const API_URL = "https://api.thedogapi.com/v1/images/search?limit=10";

export default function Slideshow() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    document.title = "Dog Slideshow ~ ITIS 3135";
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadImages() {
      try {
        setError("");
        const response = await fetch(API_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Unable to load slideshow images.");
        }

        const data = await response.json();
        setImages(data);
        setCurrentIndex(0);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError("Unable to load dog images right now. Please try again.");
        }
      }
    }

    loadImages();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  function stopSlideshow() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIsPlaying(false);
  }

  function goFirst() {
    setCurrentIndex(0);
  }

  function goEnd() {
    setCurrentIndex(images.length - 1);
  }

  function goNext() {
    setCurrentIndex((previousIndex) =>
      previousIndex < images.length - 1 ? previousIndex + 1 : previousIndex,
    );
  }

  function goPrevious() {
    setCurrentIndex((previousIndex) =>
      previousIndex > 0 ? previousIndex - 1 : previousIndex,
    );
  }

  function playSlideshow() {
    if (intervalRef.current || images.length === 0 || currentIndex >= images.length - 1) {
      return;
    }

    setIsPlaying(true);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((previousIndex) => {
        if (previousIndex >= images.length - 1) {
          stopSlideshow();
          return previousIndex;
        }

        return previousIndex + 1;
      });
    }, SLIDE_DELAY);
  }

  const currentImage = images[currentIndex];
  const isAtStart = currentIndex === 0;
  const isAtEnd = images.length === 0 || currentIndex === images.length - 1;

  return (
    <section className="page-content" style={{ textAlign: "center" }}>
      <h2>Dog Slideshow</h2>
      <p>
        Browse 10 dog images from The Dog API, or press Play to advance every 5
        seconds until the final slide.
      </p>

      {error ? <p>{error}</p> : null}

      {currentImage ? (
        <figure style={{ margin: "2rem auto" }}>
          <img
            src={currentImage.url}
            alt={`Dog slide ${currentIndex + 1}`}
            style={{
              width: "400px",
              maxWidth: "100%",
              height: "400px",
              objectFit: "cover",
            }}
          />
          <figcaption>
            Image {currentIndex + 1} of {images.length}
          </figcaption>
        </figure>
      ) : (
        <p>{error ? "Images could not be displayed." : "Loading slideshow images..."}</p>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        <button onClick={goFirst} disabled={images.length === 0 || isAtStart}>
          First
        </button>
        <button onClick={goPrevious} disabled={images.length === 0 || isAtStart}>
          Previous
        </button>
        <button onClick={playSlideshow} disabled={images.length === 0 || isPlaying || isAtEnd}>
          Play
        </button>
        <button onClick={stopSlideshow} disabled={!isPlaying}>
          Stop
        </button>
        <button onClick={goNext} disabled={images.length === 0 || isAtEnd}>
          Next
        </button>
        <button onClick={goEnd} disabled={images.length === 0 || isAtEnd}>
          End
        </button>
      </div>
    </section>
  );
}
