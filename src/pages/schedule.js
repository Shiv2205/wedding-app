import TimeLine from "@/components/TimeLine";

const Schedule = () => {

    const timelineItems = [
        {
            time: '12:30',
            title: 'Start',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.'
        },
        {
            time: '13:25',
            title: 'Start',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.'
        },
        {
            time: '15:00',
            title: 'Start',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.'
        },
        {
            time: '17:50',
            title: 'Middle',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.'
        },
        {
            time: '23:00',
            title: 'Start',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.'
        },
        {
            time: '23:10',
            title: 'End',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.'
        }
    ]

    return ( 
        <div className="mx-5 mt-2 ml-5">
            <TimeLine items={timelineItems}/>
        </div>
     );
}
 
export default Schedule;