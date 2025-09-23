"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface ITask{
  name : string;
  isChecked : boolean;
}


export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);
  const [string, setString] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null)
  const [todo, setTodo] = useState<ITask[]>([]);


  return(
    <div>
      {/* <></>
      <button onClick={() => setCount(count + 1)}> add 1</button>
      <p>You clicked {count} times</p> */}
      <input type="text" ref={ref} placeholder="tulis disini"></input>
      <button onClick={() => setString(ref.current?.value ?? "" )}>
        {/* ?? "" artinya itu if left side is null, use right instead*/}
        logging the text
      </button>
      <p>{string}</p>

      <input type="text" ref={ref} placeholder="tulis todo disini"></input>
      <button onClick={() => setTodo([...todo, { name: ref.current?.value ?? "", isChecked : false}])}> isi todo</button>
      <div>
        {todo.map((todoVal, number) => <p>{number + 1}. {todoVal.name}</p>)}
      </div>
      

    </div>  
  );

}
