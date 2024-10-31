'use client';
import {Tabs, Tab} from "@nextui-org/react";

export default function App() {
  return (
    <div className="py-2 flex w-full flex-col items-center justify-center">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="sakura"
          title={
            <div className="flex items-center space-x-2">
              <span>Sakura Empire</span>
            </div>
          }
        />
        <Tab
          key="eagle"
          title={
            <div className="flex items-center space-x-2">
              
              <span>Eagle Union</span>
            </div>
          }
        />
        <Tab
          key="royal"
          title={
            <div className="flex items-center space-x-2">
              
              <span>Royal Navy</span>
            </div>
          }
        />
        <Tab
          key="ironblood"
          title={
            <div className="flex items-center space-x-2">
              <span>Iron Blood</span>
            </div>
          }
        />
        <Tab
          key="dragonemp"
          title={
            <div className="flex items-center space-x-2">
              
              <span>
              Dragon Empery</span>
            </div>
          }
        />
        <Tab
          key="northparl"
          title={
            <div className="flex items-center space-x-2">
              
              <span>Northern Parliament</span>
            </div>
          }
        />
        <Tab
          key="irislib"
          title={
            <div className="flex items-center space-x-2">
              <span>Iris Libre</span>
            </div>
          }
        />
        <Tab
          key="vichya"
          title={
            <div className="flex items-center space-x-2">
              
              <span>Vichya Dominion</span>
            </div>
          }
        />
        <Tab
          key="sardegn"
          title={
            <div className="flex items-center space-x-2">
              
              <span>Sardegna Empire</span>
            </div>
          }
        />
      </Tabs>
    </div>  
  );
}