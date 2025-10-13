import Image from "next/image";
import Carousel from "@/components/carousel";

const slides = [
  { src: "/images/example1port.png", alt: "Landing page", target: "#project1" },
  { src: "/images/example2port.png", alt: "Dashboard", target: "#project2" },
  { src: "/images/example3port.png", alt: "E-commerce", target: "#project3" },
];


export default function Home() {
  return (
    <div className="mx-auto my-6">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-gray-700 rounded-xl shadow-lg flex items-center justify-between px-8 z-50">
        <div className="text-4xl font-bold">Felix's Website</div>

        <div className="flex items-center gap-8">
          <ul className="flex gap-6">
            <li>
              <a href="#about" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
          </ul>

          <div className="flex gap-2 border rounded-lg px-2 py-1">
            <button className="px-2 hover:underline">en</button>
            <button className="px-2 hover:underline">jp</button>
            <button className="px-2 hover:underline">id</button>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-black text-white px-4 py-2 hover:opacity-80"
          >
            Connect!
          </a>
        </div>
      </nav>
      <section id="hero" className="pt-28 min-h-screen flex">
        <div className="mx-auto max-w-6xl w-full px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* ini kiri */}
          <div className="md:max-w-lg">
            <p className="text-2xl md:text-4xl font-bold">Hey! 🖐️</p>
            <h1 className="mt-1 text-4xl md:text-6xl font-extrabold leading-tight">
              I'm a programmer
              <br />
              based in Indonesia
            </h1>
            <p className="mt-4 text-l font-semibold">
              Designing people-focused, high-performing, eye-popping websites
              with style and efficiency.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                className="rounded-md bg-gray-600 px-5 py-2 font-semibold hover:bg-neutral-300"
                href="#contact"
              >
                Let's Connect!
              </a>
              <a
                className="rounded-md bg-gray-600 px-5 py-2 font-semibold hover:bg-neutral-300"
                href="#contact"
              >
                Contact me
              </a>
            </div>
          </div>
          {/* ini kanan */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/images/flick.jpg"
              alt="Photo of Flick"
              width={420}
              height={420}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="pt-16 min-h-screen flex flex-col items-center gap-10"
      >
        <div className="bg-amber-300 h-35 w-full mt-[5%] flex justify-center items-center">
          <h1 className="mt-1 text-4xl font-extrabold leading-tight text-center">
            You don't just need a website
            <br />
            You need a high-performing website.
          </h1>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-20 items-center text-lg">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              About me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-2xl flex items-center justify-center text-lg font-semibold">
              {/* tambahin kalo lg hover bisa kyk pop */}
              1
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-2xl flex items-center justify-center text-lg font-semibold">
              2
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-2xl flex items-center justify-center text-lg font-semibold">
              3
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-2xl flex items-center justify-center text-lg font-semibold">
              4
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="pt-16 min-h-screen flex flex-col items-center gap-10 bg-amber-600">
         <div className="bg-amber-300 h-20 w-full mt-[5%] flex justify-center items-center">
          <h1 className="mt-1 text-4xl font-extrabold leading-tight text-center">
            My Portfolio
          </h1>
         </div>
        <div className="w-screen">
    <Carousel slides={slides} />
  </div>
      </section>

      <section id="portfolioDesc"
        className="pt-16 min-h-screen flex flex-col items-center gap-10">
          <div id="project1" className="h-100">ini project 1</div>
          <div id="project2" className="h-100">ini project 2</div>
          <div id="project3" className="h-100">ini project 3</div>
        </section>
    </div>
  );
}
