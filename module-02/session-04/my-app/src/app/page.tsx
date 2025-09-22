"use client";
import { useTheme } from "next-themes";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Home() {
  const { theme, setTheme } = useTheme();
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
            <div className="flex flex-row items-center bg-[#ffffff] border-b border-black h-[64px] w-[100%] gap-5 px-4 text-[18px] rounded-md dark:bg-[#171823] dark:border-[#393A4B]">
              <Checkbox id="newCode" />
              <Label htmlFor="newCode">Create a new todo..</Label>
            </div>
            <div className="flex flex-col bg-[#ffffff] h-[439px] w-[100%] rounded-md drop-shadow-xl">
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
              <div className="flex flex-row items-center justify-between basis-1/7 px-4 text-[14px] text-[#9495A5]  dark:bg-[#171823] dark:border-[#393A4B] dark:text-[#5B5E7E]">
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
      </div>
    </div>
  );
}
