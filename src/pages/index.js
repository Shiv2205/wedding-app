import FindSeatForm from '@/components/FindSeatForm';
import Schedule from '@/components/schedule';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PictureGrid from '@/components/PictureGrid';
import { fetchPictures, fetchSchedule, fetchTableList } from '@/pages/api/firebase/databaseOps';
import TableCollapseGrid from '@/components/TableCollapseGrid';

// const inter = Inter({ 
//   weight: '400',
//   subsets: ['latin'] })


export default function Home({ homePictureGrid, dbSchedule, tableList }) {
  const findSeatRef = useRef(null);
  const scheduleRef = useRef(null);
  const pictureGridRef = useRef(null);
  console.log(tableList);

  return (

    <div>
      <main className='text-white'>
        {/**NavBar */}
        <Navbar references={{
          findSeat: findSeatRef,
          schedule: scheduleRef,
          pictureGrid: pictureGridRef
        }}/>

        {/**First Image */}
        <Hero references={findSeatRef}/>
        
        <div className='divider text-2xl' ref={findSeatRef}>Find My Seat</div>
        {/**Find My Seat Form */}
        <div className='mb-10'>
          <FindSeatForm />
        </div>

        <div className='divider text-2xl' >Tables</div>
        <TableCollapseGrid tables={tableList.tables}/>
        
        <div className='divider text-2xl' ref={scheduleRef}>Schedule</div>
        <Schedule timelineItems={dbSchedule} />

        {/**Picture Grid */}
        <div className='divider text-2xl mb-10' ref={pictureGridRef}>Gallery</div>
        <PictureGrid pictureGrid={homePictureGrid}/>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const pictureData = await fetchPictures();
  const schedule = await fetchSchedule();
  const tableList = await fetchTableList();

  return {
    props: {
      homePictureGrid: pictureData,
      dbSchedule: schedule,
      tableList: tableList
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
        <div className='divider text-2xl' >Tables</div>
        <TableCollapseGrid/>
 */