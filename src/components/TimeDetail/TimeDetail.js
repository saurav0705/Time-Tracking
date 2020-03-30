import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './TimeDetail.css';
import ClockDetail from '../ClockDetail/ClockDetail';
const TimeDetail = ({user}) => {
    const months = {
        'Jan' : '01',
        'Feb' : '02',
        'Mar' : '03',
        'Apr' : '04',
        'May' : '05',
        'Jun' : '06',
        'Jul' : '07',
        'Aug' : '08',
        'Sep' : '09',
        'Oct' : '10',
        'Nov' : '11',
        'Dec' : '12'
    }
    const structure = (date) => {
        date = date.split(" ");
        return new Date(date[2],months[date[0]]-1,date[1]);
    }
    

    return (
    <>
    <h1 className="heading">{user['real_name']}</h1>
   
    <div>
        {user['activity_periods'].map(act_period => {
            return (<div className="time-container">
                <div className="center">
                   <div  className="none">
                    <center>
                <Calendar
                        value={structure(act_period['end_time'])}
                        size={100,100}
                        />

                </center>
                </div>
                 </div>

                 <div className="flex">
                 <div>
                     <h3>IN </h3>
                 <ClockDetail time={act_period['start_time']}/>
                 </div>
                 <div>
                     <h3>OUT </h3>   
                     <ClockDetail time={act_period['end_time']}/>
                </div>
                </div>
                 </div>)
               
        
        })}
    </div>
    </>
    )
};

export default TimeDetail;