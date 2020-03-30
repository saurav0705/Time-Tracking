import React from 'react';
import Clock from 'react-clock';
import './ClockDetail.css';
const ClockDetail = ({time}) => {
    const timeonly = (date) => {
        
        date = date.replace(/\s+/gi,"_")
        return date.split("_")[3];
    }
     const clockTime = (date) => {
        date = timeonly(date).slice(0, -2).split(":");
        return new Date(null, null, null, date[0], date[1],'00');
     }
    return(
        <div className="clock-detail">
            <span >{timeonly(time)}</span>
                 <Clock
                        value={clockTime(time)}
                        size={50,50}
                        
                        />
        </div>
    )
};

export default ClockDetail;