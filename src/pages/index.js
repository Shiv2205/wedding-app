import Head from 'next/head';
import PictureCard from '@/components/PictureCard';
import FindSeatForm from '@/components/FindSeatForm';
import Link from 'next/link';
import Schedule from './schedule';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// const inter = Inter({ 
//   weight: '400',
//   subsets: ['latin'] })



export default function Home() {

  const findSeatRef = useRef(null);
  const scheduleRef = useRef(null);
  const pictureGridRef = useRef(null);

  const imgPath = 'https://imgs.search.brave.com/MrnK8fVlSuduWgWdQajGUV7iddEaWvegR9HLILdhg7E/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMud2FsbHBhcGVy/c2Rlbi5jb20vaW1h/Z2UvZG93bmxvYWQv/Zmx5aW5nLW1pbGVz/LW1vcmFsZXMtbWFy/dmVscy1zcGlkZXIt/bWFuX2JHbHNibVdV/bVpxYXJhV2twSlJv/YldsbHJXZG1hMlUu/anBn';

  const pictureGrid = [
    {
      src: "/test_img.jpg",
      caption: "pic 1"
    },

    {
      src: "/test_img.jpg",
      caption: "pic 2"
    },

    {
      src: "/test_img.jpg",
      caption: "pic 3"
    },

    {
      src: "/test_img.jpg",
      caption: "pic 4"
    },
    {
      src: 'https://imgs.search.brave.com/MrnK8fVlSuduWgWdQajGUV7iddEaWvegR9HLILdhg7E/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMud2FsbHBhcGVy/c2Rlbi5jb20vaW1h/Z2UvZG93bmxvYWQv/Zmx5aW5nLW1pbGVz/LW1vcmFsZXMtbWFy/dmVscy1zcGlkZXIt/bWFuX2JHbHNibVdV/bVpxYXJhV2twSlJv/YldsbHJXZG1hMlUu/anBn',
      caption: "pic 5"
    },
    {
      src: imgPath,
      caption: "Shivam"
    },
    {
      src: imgPath,
      caption: "Shivam"
    },
    {
      src: imgPath,
      caption: "Shivam"
    }
  ];

  
  return (
    <>
      <Head>
        <title>Oy & Manisha App</title>
        <meta name="description" content="Web app for wedding day." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-white'>
        {/**TODO:NavBar */}
        <Navbar references={{
          findSeat: findSeatRef,
          schedule: scheduleRef,
          pictureGrid: pictureGridRef
        }}/>

        {/**First Image */}
        <div>
          <Hero references={findSeatRef}/>
        </div>
        
        <div className='divider text-2xl' ref={findSeatRef}>Find My Seat</div>
        {/**Find My Seat Form */}
        <div className='mb-10'>
          <FindSeatForm />
        </div>
        
        <div className='divider text-2xl' ref={scheduleRef}>Schedule</div>
        <div >
          <Schedule />
        </div>

        {/**Picture Grid */}
        <div className='divider text-2xl' ref={pictureGridRef}>Gallery</div>
        <div className='grid text-black my-10 grid-cols-2 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-3' >
          {
            pictureGrid.map((item, index) => {
              return <PictureCard key={index} path={item.src} caption={item.caption} />
            })
          }
        </div>
      </main>
    </>
  )
}

/**
 * <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={path}/>

<div className='grid text-black grid-cols-2 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-3' >
          {
            pictureGrid.map((item, index) => {
              return <PictureCard key={index} path={item.src} caption={item.caption} />
            })
          }
        </div>
 */