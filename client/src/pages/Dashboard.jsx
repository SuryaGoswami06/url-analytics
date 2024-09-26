import {Link} from 'react-router-dom'
import { FcComboChart } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import { Chart,ArcElement,Tooltip,Legend,CategoryScale,LinearScale,BarElement } from 'chart.js';
import {Doughnut,Bar} from 'react-chartjs-2'

function Dashboard() {
  Chart.register(ArcElement,Tooltip,Legend,CategoryScale,LinearScale,BarElement)

  let deviceType = {
    labels: ['desktop',
      'mobile',
      'tablet',
      'smarttv',
      'wearable',
      'embedded',
      'console'],
    datasets: [
      {
        label: "device type",
        backgroundColor: "#1B48DA",
        borderWidth: 1,
        stack: 1,
        hoverBackgroundColor: '#3860e3',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };


  const linkQrData = {
    labels: [
      'link',
      'qr codes'
    ],
    datasets: [{
      label: ['My red Dataset'],
      data: [300, 50],
      backgroundColor: [
        '#1B48DA',
        '#fde48a'
      ],
      hoverOffset: 4
    }]
  };

  const latestLinks =[
    {
      originalLink:'https://www.figma.com/design/y7yPyObgEm0C777GI9ONNu/Shortener---URL-Shortener-Dashboard-(Community)?node-id=0-1&node-type=canvas&t=n10UrhJXaqTowDFJ-0',
      shortendLink:'https://www.figma.com/1234',
      totalClicks:53
    },
    {
      originalLink:'https://www.figma.com/design/y7yPyObgEm0C777GI9ONNu/Shortener---URL-Shortener-Dashboard-(Community)?node-id=0-1&node-type=canvas&t=n10UrhJXaqTowDFJ-0',
      shortendLink:'https://www.figma.com/1234',
      totalClicks:65
    },
    {
      originalLink:'https://www.figma.com/design/y7yPyObgEm0C777GI9ONNu/Shortener---URL-Shortener-Dashboard-(Community)?node-id=0-1&node-type=canvas&t=n10UrhJXaqTowDFJ-0',
      shortendLink:'https://www.figma.com/1234',
      totalClicks:90
    },
    {
      originalLink:'https://www.figma.com/design/y7yPyObgEm0C777GI9ONNu/Shortener---URL-Shortener-Dashboard-(Community)?node-id=0-1&node-type=canvas&t=n10UrhJXaqTowDFJ-0',
      shortendLink:'https://www.figma.com/1234',
      totalClicks:33
    }
  ]

  return (
    <div className="w-full grid lg:grid-cols-2 lg:grid-rows-2 gap-4 p-3">

        <div className="lg:col-span-1 lg:row-span-1 rounded-lg shadow-lg">
            <div className="border-b py-3 px-3">
              <h3>Latest Links</h3>
            </div>
            <div className='p-3'>
                {
                  latestLinks.map((item,index)=>(
                    <Link className='my-2 flex justify-between items-center' key={index} to={`/analytics/links/${item.shortendLink}`}>
                       <div className="flex flex-col">
                           <h4>{item.originalLink.slice(0,35)}</h4>
                           <span className='text-primary text-sm'>{item.shortendLink}</span>
                       </div>
                       <div className="flex items-center ml-4">
                          <FcComboChart className='h-7 w-7 mr-1' />
                          <span>{item.totalClicks}</span>
                       </div>
                    </Link>
                  ))
                }
            </div>
            <Link to='' className='flex items-center justify-center mb-3'>
                <span className='capitalize mr-2'>see all links</span>
                <FaArrowRightLong />
            </Link>
        </div>

        <div className='flex items-center justify-center lg:col-span-1 lg:row-span-1 rounded-lg shadow-lg p-3'>
              <Doughnut data={linkQrData} />
        </div>

        <div className='flex items-center justify-center p-3 lg:col-span-1 lg:row-span-1 rounded-lg shadow-lg'>
            <Bar data={deviceType}/>
        </div>

        <div className="lg:col-span-1 lg:row-span-1 rounded-lg shadow-lg">
            <div className="border-b py-3 px-3">
              <h3>Latest QR Codes</h3>
            </div>
            <div className='p-3'>
                {
                  latestLinks.map((item,index)=>(
                    <Link className=' my-2 flex justify-between items-center' key={index} to={`/analytics/links/${item.shortendLink}`}>
                       <div className="flex flex-col">
                           <h4>{item.originalLink.slice(0,35)}</h4>
                           <span className='text-primary text-sm'>{item.shortendLink}</span>
                       </div>
                       <div className="flex items-center ml-4">
                          <FcComboChart className='h-7 w-7 mr-1' />
                          <span>{item.totalClicks}</span>
                       </div>
                    </Link>
                  ))
                }
            </div>
            <Link to='' className='flex items-center justify-center mb-3'>
                <span className='capitalize mr-2'>see all QR Codes</span>
                <FaArrowRightLong />
            </Link>
        </div>
        
    </div>
  )
}

export default Dashboard;
