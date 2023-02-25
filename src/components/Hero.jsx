import scrollNav from "@/util/scrollNav";
import { FaArrowCircleDown } from 'react-icons/fa'
import { RxDoubleArrowDown } from 'react-icons/rx';

function Hero({ references }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1580824456266-c578703e13da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
      }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mt-40">
          <h1 className="mt-5 text-5xl font-bold">Oy & Manisha</h1>
          <p className="mt-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            className=" mt-10 animate-bounce"
            onClick={() => scrollNav(references)}
          >
            <RxDoubleArrowDown className="" size={70}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

/**
 * <button
            className="mask mask-triangle-2 p-3 bg-yellow-500
           text-white mt-5 animate-bounce"
            onClick={() => scrollNav(references)}
          >
            Get Started
          </button>

          /test_img.jpg
 */