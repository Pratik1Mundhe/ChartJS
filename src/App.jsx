  import { useState } from 'react'
  import { Bar, Doughnut, Line } from 'react-chartjs-2'
  import './App.css'
  import { Chart as ChartJs, defaults } from 'chart.js/auto'

  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  function App() {
    const [count, setCount] = useState(0)
    const [countDay1, setCountDay1] = useState(300)
    const [countDay2, setCountDay2] = useState(400)
    const [countDay3, setCountDay3] = useState(500)
    const [countDay4, setCountDay4] = useState(350)
    const [countDay5, setCountDay5] = useState(300)

    return (
      <>
      <div className='main'>
      <div  className='size'>
        <Bar 
          data= {{
            labels: ["Day 1","Day 2","Day 3","Day 4","Day 5"],
            datasets: [
              {
                label: "DayWise TaskDone",
                data: [countDay1, countDay2, countDay3, countDay4 , countDay5],
                backgroundColor: [
                  "rgba(245,156,39,0.8)",
                  "rgba(128, 245, 39, 0.8)",
                  "rgba(224, 96, 61, 0.8)",
                  "rgba(224, 96, 196, 0.8)",
                  "rgba(181, 14, 196, 0.8)"
                ],
                borderRadius: 10
                
            },
            ]
          }}
          
        />
      </div>
      <div >
        <Doughnut 
          data= {{
            labels: ["Day 1","Day 2","Day 3","Day 4","Day 5"],
            datasets: [
              {
                label: "DayWise Productivity",
                data: [countDay1, countDay2, countDay3, countDay4 , countDay5],
                backgroundColor: [
                  "rgba(245,156,39,0.8)",
                  "rgba(128, 245, 39, 0.8)",
                  "rgba(224, 96, 61, 0.8)",
                  "rgba(224, 96, 196, 0.8)",
                  "rgba(181, 14, 196, 0.8)"
                ],
                borderColor:  [
                  "rgba(245,156,39,0.8)",
                  "rgba(128, 245, 39, 0.8)",
                  "rgba(224, 96, 61, 0.8)",
                  "rgba(224, 96, 196, 0.8)",
                  "rgba(181, 14, 196, 0.8)"
                ],
                borderRadius: 5,
                borderJoinStyle :"miter"
                
            },
            ]
          }}
        />
      </div>
      
      </div>
      <div>
      <p>Increse WorkDone of day:</p> <br />
      <div className='sz'>
      
      <button onClick={() => setCountDay1(count => count+100)}>1</button>
      <button onClick={() => setCountDay2(count => count+100)}>2</button>
      <button onClick={() => setCountDay3(count => count+100)}>3</button>
      <button onClick={() => setCountDay4(count => count+100)}>4</button>
      <button onClick={() => setCountDay5(count => count+100)}>5</button>
      </div>
      </div>
      </>
    )
  }

  export default App
