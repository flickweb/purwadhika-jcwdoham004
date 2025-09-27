import Link from "next/link";

export default function NavBar(){
    return(
        <div className="flex absolute top-0 justify-between h-[50px]">
            <Link href={"/"} className="text-4xl">
            Logo
            </Link>
        </div>
        <Link href={"/login"}>
            
        </Link>
    )
}