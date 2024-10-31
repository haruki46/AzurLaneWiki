'use client'   
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function AvatarShip() {
  const list = [
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/83/Admiral_Graf_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/83/Admiral_Graf_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/83/Admiral_Graf_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/83/Admiral_Graf_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/83/Admiral_Graf_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/83/Admiral_Graf_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Musashi",
      img: "https://azurlane.netojuu.com/images/6/6a/MusashiShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "UltraRare",
      Color: "bg-gradient-to-r from-lime-200 to-sky-400"
    },
    {
      title: "Odin",
      img: "https://azurlane.netojuu.com/images/7/71/OdinShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "SuperRare",
      Color: "bg-amber-200"
    },
    {
      title: "Long Island",
      img: "https://azurlane.netojuu.com/images/b/be/Long_IslandShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Rare",
      Color: "bg-sky-300"
    },
    {
      title: "Shiranui",
      img: "https://azurlane.netojuu.com/images/d/dd/ShiranuiShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "normal",
      Color: "bg-zinc-400"
    },
    {
      title: "Nagato META",
      img: "https://azurlane.netojuu.com/images/a/a2/Nagato_METAShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "SuperRare",
      Color: "bg-amber-200",
      META: "bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent"
    },
    {
      title: "Hatakaze META",
      img: "https://azurlane.netojuu.com/images/0/05/Hatakaze_METAShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400",
      META: "bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/88/Little_SpeeShipyardIcon.png",
      Classification: "https://azurlane.netojuu.com/images/thumb/9/9c/BB_img0.png/30px-BB_img0.png",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/88/Little_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/88/Little_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/88/Little_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/88/Little_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
    {
      title: "Admiral Graf Spee",
      img: "https://azurlane.netojuu.com/images/8/88/Little_SpeeShipyardIcon.png",
      Classification: "Heavy Cruiser",
      Rarity: "Elite",
      Color: "bg-purple-400"
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-6">
      {list.map((item, index) => (
        
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className={`overflow-visible p-0 ${item.Color}`}>
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
            
          </CardBody>
          <CardFooter className="text-small justify-between font-semibold">
            <b className={`${item.META}`}>{item.title}</b>
            <p className="text-default-500">{item.Rarity}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}