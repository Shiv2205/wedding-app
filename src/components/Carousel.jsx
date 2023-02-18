import Image from "next/image";
import scrollNav from "@/util/scrollNav";

const Carousel = ({ pictures, references }) => {
  return (
    <div className="hero">
      <div className="hero-overlay bg-opacity-20">
        <div className="carousel w-full">
          {pictures.map((item, index) => {
            return (
              <div
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <Image
                  width={2000}
                  height={200}
                  src={item.src}
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={
                      index - 1 < 0
                        ? `#slide${pictures.length - 1}`
                        : `#slide${index - 1}`
                    }
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={
                      index + 1 >= pictures.length
                        ? `#slide${0}`
                        : `#slide${index + 1}`
                    }
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mt-40">
          <h1 className="mt-5 text-5xl font-bold">Oy & Manisha</h1>
          <p className="mt-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            className="btn bg-yellow-500 text-white mt-5"
            onClick={() => scrollNav(references)}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
