"use client";
import { useTheme } from "next-themes";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {useEffect, useRef, useState} from "react";

  interface ITask{
    name : string;
    isChecked: boolean;
  }

export default function Home() {

  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLInputElement>(null);
  const [todo, setTodo] = useState<ITask[]>([]);



  // setTodo([...todo, { name: "", isChecked : false}]);

//   function handleSearchClick() {
//     const value = inputRef.current?.value?.trim().toLowerCase() || "";
//   setFilter(value);
// }



  return (
    <div className="flex justify-center font-jose">
      <div className="h-[300px] w-[1440px] fixed z-0">
        <img src={"/BitmapDark.jpg"} alt="dark background pic" />
      </div>

      <div className="flex flex-col justify-center z-10 m-[70px]">
        <div className="flex flex-col h-[650px] w-[540px] justify-between">
          <div className="flex flex-row justify-between">
            <p className="text-[40px] tracking-[15px] font-bold m-0 text-white">
              TODO
            </p>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <img src={"/sun.svg"}></img>
              ) : (
                <img src={"/moon.svg"}></img>
              )}
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center justify-between bg-[#ffffff] border-b border-black h-[64px] w-[100%] gap-5 px-13 text-[18px] rounded-md dark:bg-[#171823] dark:border-[#393A4B]">
              {/* <Checkbox id="newCode" /> */}
              {/* <Label htmlFor="newCode">Create a new todo..</Label> */}
              <input type="text" ref={ref} placeholder="something to do"/>
              <button onClick={() => setTodo([...todo, {name: ref.current?.value ?? "", isChecked : false}])}>
                Add Task
              </button>
              
              
            </div>
            <div className="flex flex-col bg-[#ffffff] dark:bg-[#171823] h-[439px] w-[100%] drop-shadow-xl">
                
                  {todo.map((task, index) => { const checkboxId = `${index}`; 
                  return(
                  <div key={index} className="flex flex-row items-center basis-1/7 border-b border-black gap-5 px-4 text-[18px] dark:bg-[#171823] dark:border-[#393A4B]">
                    <Checkbox id="buatTask" />
                    <Label htmlFor="buatTask">{task.name}</Label>
                    </div>);
                  
                })}
              </div>
                {/* <Checkbox id="newCode" />
                <Label htmlFor="newCode">Create a new todo..</Label>
              </div>
              
              <div className="flex flex-row items-center basis-1/7 border-b border-black gap-5 px-4 text-[18px] dark:bg-[#171823] dark:border-[#393A4B]">
                <Checkbox id="newCode" />
                <Label htmlFor="newCode">Create a new todo..</Label>
              </div>
              <div className="flex flex-row items-center basis-1/7 border-b border-black gap-5 px-4 text-[18px] dark:bg-[#171823] dark:border-[#393A4B]">
                <Checkbox id="newCode" />
                <Label htmlFor="newCode">Create a new todo..</Label>
              </div>
              <div className="flex flex-row items-center basis-1/7 border-b border-black gap-5 px-4 text-[18px] dark:bg-[#171823] dark:border-[#393A4B]">
                <Checkbox id="newCode" />
                <Label htmlFor="newCode">Create a new todo..</Label>
              </div>
              <div className="flex flex-row items-center basis-1/7 border-b border-black gap-5 px-4 text-[18px] dark:bg-[#171823] dark:border-[#393A4B]">
                <Checkbox id="newCode" />
                <Label htmlFor="newCode">Create a new todo..</Label> */}
              {/* </div> */}
            {/* </div> */}
            
          </div>
          <div className="flex flex-row items-center justify-between basis-1/7 px-4 text-[14px] bg-[#ffffff] rounded-b-md text-[#9495A5]  dark:bg-[#171823] dark:border-[#393A4B] dark:text-[#5B5E7E drop-shadow-xl">
                <div>5 items left</div>
                <div className="flex flex-row gap-2">
                  <span>All</span>
                  <span>Active</span>
                  <span>Completed</span>
                </div>
                <div>Clear Completed</div>
              </div>
        </div>
      </div>
    </div>
  );
}
