import Head from 'next/head';
import FindSeatForm from '@/components/FindSeatForm';
import Schedule from './schedule';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PictureGrid from '@/components/PictureGrid';
import fetchPictures from './api/firebase/fetchPictures';

// const inter = Inter({ 
//   weight: '400',
//   subsets: ['latin'] })
fetchPictures();

export default function Home({ homePictureGrid }) {

  const findSeatRef = useRef(null);
  const scheduleRef = useRef(null);
  const pictureGridRef = useRef(null);
  
  return (
    <div>
      <Head>
        <title>Oy & Manisha App</title>
        <meta name="description" content="Web app for wedding day." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-white'>
        {/**NavBar */}
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
        <PictureGrid pictureGrid={homePictureGrid}/>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const pictureData = await fetchPictures();;

  return {
    props: {
      homePictureGrid: pictureData
    }
  }
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

        <Hero references={findSeatRef}/>
        <PictureGrid pictureGrid={homePictureGrid}/>
        <Carousel pictures={homePictureGrid}/>
 */