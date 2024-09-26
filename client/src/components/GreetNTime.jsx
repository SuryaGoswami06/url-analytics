import React,{useState,useEffect} from 'react'

const GreetNTime = ()=> {
    const [currentPartOfTheDay,setCurrentPartOfTheDay] = useState('')
    const [currentDate,setCurrentDate]= useState('')
    const [currentTime,setCurrentTime]=useState('')

    const partOfTheDay = {
        "Wishing you a bright morning!":'https://img.icons8.com/?size=100&id=MLkMoNeE3MBF&format=png&color=000000',
        "Hope you're enjoying your evening!":'https://img.icons8.com/?size=100&id=Y99GcERWY0xR&format=png&color=000000',
        'Wishing you a peaceful night ahead!':'https://img.icons8.com/?size=100&id=15348&format=png&color=000000',
        "Hope you're having a productive afternoon!":'https://img.icons8.com/?size=100&id=d8hn2NDFO0Xa&format=png&color=000000'
    }
    useEffect(()=>{
        //co-ordinate universal time zone
        const cui = new Date().toString().split(' ');
        setCurrentTime(cui[4])
        setCurrentDate(cui[0]+','+cui[1]+' '+cui[2])
        const time = Number(cui[4].split(':')[0])
        if(time<6){
            setCurrentPartOfTheDay('Wishing you a peaceful night ahead!')
        }else if(time<12){
            setCurrentPartOfTheDay("Wishing you a bright morning!")
        }else if(time<18){
            setCurrentPartOfTheDay("Hope you're having a productive afternoon!")
        }else{
            setCurrentPartOfTheDay("Hope you're enjoying your evening!")
        }
    },[])
    
  return (
    <div className='flex mr-2'>
        <img src={partOfTheDay[currentPartOfTheDay]} className='w-10 h-10 mr-1'  alt="" />
        <div >
           <h2>{currentPartOfTheDay}</h2>
           <time className=' opacity-70' dateTime={currentTime}>{currentDate}</time>
        </div>
    </div>
  )
}

export default GreetNTime