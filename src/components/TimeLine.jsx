import TimeLineItem from './TimeLineItem';

function TimeLine({ items }) {
  return (
    <ol className="border-l border-gray-300">

      {
            items.map((item) => (
              <li key={item.time}>
                <TimeLineItem
                  key={item.time}
                  time={item.time}
                  title={item.title}
                  description={item.description}
                />
              </li>
            ))
        }
    </ol>
  );
}

export default TimeLine;
