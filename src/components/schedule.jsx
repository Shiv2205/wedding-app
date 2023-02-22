import TimeLine from '@/components/TimeLine';

function Schedule({ timelineItems }) {
  return (
    <div className="mx-5 mt-2 ml-5">
      <TimeLine items={timelineItems} />
    </div>
  );
}

export default Schedule;
