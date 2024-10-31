'use client';
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import AvatarShip from "@/components/avatarship";
import TeamNav from "@/components/teamnav";
import dynamic from "next/dynamic";

//Lazy load EventBanner Component
const LazyLoadComponent = dynamic(() => import('@/components/eventbanner'), { ssr: false });
export default function Home() {
  return (
    <div>
      <h1 className={title()}>Welcome to {siteConfig.name}</h1>
      <p className={subtitle()}>
      Azur Lane (cn: 碧蓝航线, jp: アズールレーン) is a Chinese mobile game developed by Manjuu and Yongshi, published by BiliBili for both iOS and Android..
      </p> 
          <LazyLoadComponent/>
          <TeamNav/>
          <AvatarShip/>
    </div>
      
  );
}
