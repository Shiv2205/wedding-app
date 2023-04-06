import FindSeatForm from "@/components/FindSeatForm";
import Schedule from "@/components/schedule";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PictureGrid from "@/components/PictureGrid";
import {
  fetchSchedule,
  fetchTableListApi,
  fetchPicturesApi
} from "@/pages/api/firebase/databaseOps";
import TableCollapseGrid from "@/components/TableCollapseGrid";
import Link from "next/link";

// const inter = Inter({
//   weight: '400',
//   subsets: ['latin'] })

export default function Home({ homePictureGrid, dbSchedule, tableList }) {
  const findSeatRef = useRef(null);
  const scheduleRef = useRef(null);
  const pictureGridRef = useRef(null);
  const [findSeat, setFindSeat] = useState({guest: '', style: ''});

  return (
    <div>
      <main className="text-white">
        {/**NavBar */}
        <Navbar
          references={{
            findSeat: findSeatRef,
            schedule: scheduleRef,
            pictureGrid: pictureGridRef,
          }}
        />

        {/**First Image */}
        <Hero references={findSeatRef} />

        <div className="divider text-2xl" ref={findSeatRef}>
          Find My Seat
        </div>
        {/**Find My Seat Form */}
        <div className="mb-10">
          <FindSeatForm setFindSeat={setFindSeat} />
        </div>

        <div className="divider text-2xl">Tables</div>
        <TableCollapseGrid tables={tableList} findSeatState={findSeat}
        setFindSeat={setFindSeat} />

        <div className="divider text-2xl" ref={scheduleRef}>
          Schedule
        </div>
        <Schedule timelineItems={dbSchedule} />

        <div className="lg:w-2/3 md:w-3/4">
        <div className="alert alert-warning shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <h3 className="font-bold">Make A Wish!</h3>
              <div className="text-md">Head over to the Wishes page 
              and send your blessings and love to the bride & groom.</div>
            </div>
          </div>
          <div className="flex-auto ">
            <Link href='/wishes' className="btn btn-sm bg-base-100 text-white">Let's Go!</Link>
          </div>
        </div>
        </div>

        {/**Picture Grid */}
        <div className="divider text-2xl my-10" ref={pictureGridRef}>
          Gallery
        </div>
        <PictureGrid pictureGrid={homePictureGrid} />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const pictureData = await fetchPicturesApi();
  const schedule = await fetchSchedule();
  const tableList = await fetchTableListApi();

  return {
    props: {
      homePictureGrid: pictureData,
      dbSchedule: schedule,
      tableList: tableList,
    },
  };
};
