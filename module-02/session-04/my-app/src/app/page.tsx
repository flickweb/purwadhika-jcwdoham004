"use client";
import { useTheme } from "next-themes";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";

interface ITask {
  id: number;
  name: string;
  isChecked: boolean;
  createdAt: Date;
}

export default function Home() {
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<ITask[]>([]);
  const [search, setSearch] = useState<string>("");
  const [sortFilter, setSortFilter] = useState<"DESC" | "ASC">("DESC");
  const [statusFilter, setStatusFilter] = useState<
    "ALL" | "ACTIVE" | "COMPLETE"
  >("ALL");

  //fixed by kak bryan
  const addNewTask = () => {
    if (ref.current?.value) {
      const lastId = todos[todos.length - 1]?.id || 0;

      setTodos([
        ...todos,
        {
          id: lastId + 1,
          name: ref.current.value,
          isChecked: false,
          createdAt: new Date(),
        },
      ]);
    }
  };

  const onComplete = (item: ITask) => {
    const newTasks = todos.map((t) =>
      t.id === item.id ? { ...t, isChecked: !t.isChecked } : t
    );

    setTodos(newTasks);
  };

  const onDelete = (item: ITask) => {
    const newTasks = todos.filter((t) => t.id !== item.id);

    setTodos(newTasks);
  };

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
              <input type="text" ref={ref} placeholder="something to do" />
              <button onClick={addNewTask}>Add Task</button>
            </div>
            <div className="flex flex-col bg-[#ffffff] dark:bg-[#171823] h-[439px] w-[100%] drop-shadow-xl">
              <div className="flex p-5 justify-between">
                <div className="flex flex-col gap-2">
                  <label>Search</label>
                  <input
                    className="border border-white p-1 rounded-sm"
                    type="text"
                    onChange={(e) => setSearch(e.currentTarget.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Sort</label>
                  <select
                    className="border border-white p-1 rounded-sm"
                    defaultValue={"DESC"}
                    onChange={(e) =>
                      setSortFilter(e.currentTarget.value as "ASC" | "DESC")
                    }
                  >
                    <option value="DESC">desc</option>
                    <option value="ASC">asc</option>
                  </select>
                </div>
              </div>
              {todos
                .filter((t) => {
                  if (t.name.includes(search)) {
                    if (statusFilter === "ALL") {
                      return true;
                    } else if (statusFilter === "ACTIVE" && !t.isChecked) {
                      return true;
                    } else if (statusFilter === "COMPLETE" && t.isChecked) {
                      return true;
                    } else {
                      return false;
                    }
                  }
                })
                .sort((a, b) =>
                  sortFilter === "DESC"
                    ? b.createdAt.getTime() - a.createdAt.getTime()
                    : a.createdAt.getTime() - b.createdAt.getTime()
                )
                .map((task) => {
                  return (
                    <div
                      key={task.id}
                      className="flex flex-row items-center basis-1/7 border-b border-black gap-5 px-4 text-[18px] dark:bg-[#171823] dark:border-[#393A4B]"
                    >
                      <input
                        type="checkbox"
                        onChange={() => onComplete(task)}
                        checked={task.isChecked}
                      />
                      <span
                        className={`w-[400px] ${
                          task.isChecked
                            ? "line-through text-[#D1D2DA] dark:text-[#4D5067]"
                            : ""
                        }`}
                      >
                        {task.name}
                      </span>

                      <button onClick={() => onDelete(task)}>x</button>
                    </div>
                  );
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
            <span>{todos.filter((t) => !t.isChecked).length} items left</span>
            <div className="flex gap-[19px]">
              <span
                onClick={() => setStatusFilter("ALL")}
                className={`hover:cursor-pointer ${
                  statusFilter === "ALL" ? "text-[#3A7CFD]" : ""
                }`}
              >
                All
              </span>
              <span
                onClick={() => setStatusFilter("ACTIVE")}
                className={`hover:cursor-pointer ${
                  statusFilter === "ACTIVE" ? "text-[#3A7CFD]" : ""
                }`}
              >
                Active
              </span>
              <span
                onClick={() => setStatusFilter("COMPLETE")}
                className={`hover:cursor-pointer ${
                  statusFilter === "COMPLETE" ? "text-[#3A7CFD]" : ""
                }`}
              >
                Complete
              </span>
            </div>
            <span>Clear Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
