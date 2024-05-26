import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './statistics.css';

const Statistics = (props) => {
  const [statistics, setStatistics] = useState({});
//   const [selectedMonth, setSelectedMonth] = useState('march');
const {selectedMonth} = props

  useEffect(() => {
    const getStatistics = async ()=>{
        const statistics = await axios.get(`https://s3.amazonaws.com/roxiler.com/product_transaction.json?month=${selectedMonth}`)
        //https://roxiler-backend-vijaykumars-projects.vercel.app/statistics/
        console.log(statistics);
        
            setStatistics(statistics.data)

        
    }
    

    getStatistics()
    
  }, [selectedMonth]);
  console.log(statistics)

  return (
    <div className='statistics-main-container'>
        <h2>Statistics - {selectedMonth}</h2>
        <div className='statitics-container'>
            <div className='element'><span>Total Sale</span> <span>{statistics.totalSaleAmount}</span></div>
            <div className='element'><span>Total sold item</span> <span>{statistics.totalSoldItems}</span></div>
            <div className='element'><span>Total not sold item</span> <span>{statistics.totalNotSoldItems}</span></div>
        </div>
    </div>
  );
};

export default Statistics;