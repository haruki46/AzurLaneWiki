'use client';
import {Card, CardBody, CardFooter,Image,Button, Link} from "@nextui-org/react";
import { useState } from "react";
import Countdown from "react-countdown";



const EventComplete = () =><span className=" text-red-600 font-bold text-center text-2xl">Event is over!</span>;


// Set the date we're counting down to
const EventDate = new Date('2024-11-06T14:00:00');
//const EventDate = Date.now() + 5000; // 7 days from now
//Ignor Hours,mintues and seconds
const renderer = ({days, hours, minutes, seconds,completed, }) => {
    if (completed) {
      // Render a completed state
      return <EventComplete />;
    } else {
      // Render a countdown
      return <span className="text-lime-400 font-bold">{days} Days {hours} Hours {minutes} Min {seconds} Seconds</span>;
    }
  };
export default function App() {
    //Event End Change Border Color
    const [borderColor, setBorderColor] = useState('border-lime-400');
    const handleChangeColor = () => {
    setBorderColor(prev => prev === 'border-lime-400' ? 'border-red-500' : 'border-lime-500');}
  return (
    <Card>
    <CardBody className="flex justify-center items-center px-1 py-3">
      <Image
        alt="Tempesta_and_the_Sleeping_Sea_Event"
        className="object-cover rounded-xl"
        src="https://azurlane.netojuu.com/images/7/7c/Tempesta_and_the_Sleeping_Sea_Event_Banner_EN.png"
        width="auto"
        radius="none"
        height="auto"
      />
    </CardBody>
      <CardFooter className={`justify-between before:bg-white/10 ${borderColor} border-3 overflow-hidden py-1  before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10`}>
        <p className="text-2xl font-bold ">Event Timer :ㅤ
        <Countdown 
            date={EventDate} // 1000 milisec = 1 sec
            daysInHours={true}
            autoStart={true}
            renderer={renderer}
            onComplete={handleChangeColor}
        />
       </p>
        <Button 
        href="https://azurlane.koumakan.jp/wiki/Tempesta_and_the_Sleeping_Sea" 
        as={Link}
        className="text-tiny bg-black/20 justify-end" variant="flat" color="default" radius="lg" size="sm" >
          More..
        </Button>
      </CardFooter>
    </Card>
  );
}