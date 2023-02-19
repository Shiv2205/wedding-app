import Image from "next/image";
import Link from "next/link";

const Carousel = ({ pictures }) => {
  return (
        <div className="carousel rounded-box w-11/12 self-center">
          {pictures.map((item, index) => {
            return (
              <div
               key={index}
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <Image
                  width={2000}
                  height={200}
                  src={item.src}
                  className="w-full"
                  alt="text"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <Link
                    href={
                      index - 1 < 0
                        ? `#slide${pictures.length - 1}`
                        : `#slide${index - 1}`
                    }
                    className="btn btn-circle"
                  >
                    ❮
                  </Link>
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
  );
};

export default Carousel;

/**
 *  <a
                    href={
                      index + 1 >= pictures.length
                        ? `#slide${0}`
                        : `#slide${index + 1}`
                    }
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
 */