import Image from "next/image";
import scrollNav from "@/util/scrollNav";

const Carousel = ({ pictures, references }) => {
  return (
        <div className="carousel rounded-box ml-14 w-11/12">
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
  );
};

export default Carousel;
