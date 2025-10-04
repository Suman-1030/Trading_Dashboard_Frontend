import React,{useState,useEffect} from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line, Doughnut, Pie, Radar, PolarArea } from "react-chartjs-2";
import { Api_Path } from './DataPath';
import Total_Trade from './Components/Top section'
import './App.css'
import Win_V_Loss from './Components/Win_V_Loss'
import PL from './Components/PL';
import Bottom from './Components/Bottom';


function App() {
  const [data,setdata]=useState([])

    const Response=async ()=>{
        
    try{
        const response=await fetch(`${Api_Path}/Analytics`)

        const resp= await response.json()

        if(response.ok){
           setdata(resp)
           console.log(resp)
        }
                
    }
    catch(err){
        console.log(err)
    }
    }

useEffect(()=>{
    Response()
},[])  

//Data//
const metrics = [
  { label: "Total Trades", value: data.data?.totalTrades },
  { label: "Winning Trades", value: data.data?.winningTrades },
  { label: "Losing Trades", value: data.data?.losingTrades },
  { label: "Win Rate (%)", value: data.data?.winRate },
  { label: "Average Return (%)", value: data.data?.averageReturn },
  { label: "Profit Factor", value: data.data?.profitFactor },
  { label: "Longest Win Streak", value: data.data?.longestWinStreak },
  { label: "Longest Loss Streak", value: data.data?.longestLossStreak },
  { label: "Sharpe Ratio", value: data.data?.sharpeRatio },
  { label: "Max Drawdown (%)", value: data.data?.maxDrawdown },
  { label: "PL Currency ($)", value: data.data?.plBreakdown.currency },
  { label: "PL Percent (%)", value: data.data?.plBreakdown.percent }
];


  return (
    <div className='main'>
      <Total_Trade metrics={metrics}/>
      <Win_V_Loss data={data}/>
      <PL metrics={metrics}/>
      <Bottom metrics={data.data}/>
      
    </div>
  )
}

export default App
