import React from 'react'
import {Bar} from 'react-chartjs-2';

export default function Chart(data) {
    const Labels = data.data.map(emp=>emp.sub);
    const dataVal = data.data.map(val=>val.sem);
    const ChartData = {
        labels : Labels,
        datasets : [
            {
                label : "Emp Performance",
                backgroundColor : 'rgba(75,192,192,1)',
                borderColor:'rgba(0,0,0,1)',
                borderWidth:1,
                data : dataVal
            }
        ]
    }
    return (
        <div >
            <div style={{width: '50%', height:"400px", display:"inline-flex", backgroundColor:"antiquewhite", marginLeft: '330px'}}>
                <Bar 
                data={ChartData}
                options={{
                    maintainAspectRatio: false,
                    title:{
                        display:true,
                        text:'Employee Performance Chart',
                        fontSize:25,
                    },
                    scales : {
                        yAxes: [{
                            ticks:{
                                beginAtZero : true,
                                fontSize : 15,
                                fontColor: "#000"
                            }
                        }],
                        xAxes: [{
                            ticks:{
                                fontSize: 16,
                                fontColor: '#000'
                            }
                        }]
                    }
                }}
                data = {ChartData}
                >
                </Bar>
            </div>
            
        </div>
    )
}
