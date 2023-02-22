import scrollNav from '@/util/scrollNav';

function Hero({ references }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url("/test_img.jpg")',
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
          <button className="btn bg-yellow-500 text-white mt-5 animate-bounce" onClick={() => scrollNav(references)}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
