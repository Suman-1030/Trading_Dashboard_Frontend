import React,{useEffect,useState} from 'react'
import { Api_Path } from '../DataPath';
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line, Doughnut, Pie, Radar, PolarArea } from "react-chartjs-2";


function Win_V_Loss({data}) {

const chart = {
    labels: ["Win", "Loss"],
    
    datasets: [
      {
        label: "Win Vs Loss",                 
        data: [data.data?.winningTrades || 0 , data.data?.losingTrades || 0],      
        backgroundColor:[ "rgba(56, 142, 60, 0.8)",  
        "rgba(255, 0, 0, 0.8)",   
         ] ,
         borderColor: [
            "rgba(56, 142, 60, 1)",
            "rgba(220, 53, 69, 1)"
        ],
      },
    ],
  };

  const Winchart = {
    labels: ["Win Rate", "Loss Rate"],
    
    datasets: [
      {
        label:"Win Rate VS Loss Rate",            
        data: [data.data?.winRate, 100-data.data?.winRate],      
        backgroundColor:[ "rgba(56, 142, 60, 0.8)",  
        "rgba(255, 0, 0, 0.8)",   
         ] ,
         borderColor: [
            "rgba(56, 142, 60, 1)",
            "rgba(220, 53, 69, 1)"
        ],
      },
    ],
  };

  return (
    <div className='WL'>
        <h2>Win vs Loss</h2>
        <p><strong>Total Trades:</strong>{data.data?.totalTrades}</p>

        <div className='wlbar'>
             <Bar data={chart}/>
        </div>

        <div className='wr'>
           <h2>Win Rate</h2>
           <PolarArea data={Winchart}/>
        </div>
      
    </div>
  )
}

export default Win_V_Loss
