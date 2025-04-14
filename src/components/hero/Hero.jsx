import hero from "../../assets/hero3.png";
import { Link } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";
import { useEffect, useState } from "react";

let currentIndex = 0;
const Hero = () => {
   const [tagName, setTagName] = useState("");
   function updateCountdown() {
      const currentItem = ["Fans", "Air Conditioners", "Cooling Solutions"];
      setTagName(currentItem[currentIndex]);
      currentIndex = (currentIndex + 1) % currentItem.length;
      setTimeout(updateCountdown, 2000);
   }

   useEffect(() => {
      updateCountdown();
   }, []);

   return (
      <>
         <main className="bg-base-100 w-full md:w-9/12 min-h-[92vh] mx-auto flex flex-col items-start justify-center ">
            <div className="container px-6 py-16 mx-auto">
               <div className="items-center lg:flex">
                  <div className="w-full lg:w-1/2">
                     <div className="lg:max-w-lg">
                        <p className="text-4xl font-bold text-neutral lg:text-4xl">
                           Your One-Stop Shop for <br /> <span className="text-blue-500 opacity-100 transition-opacity duration-2000">{tagName}</span>
                        </p>

                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                           Explore a wide variety of fans and air conditioners designed to bring comfort and coolness to your home. Quality, energy-efficient, and affordable options.
                        </p>

                        <Link to="/all">
                        <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                        style={{ backgroundColor: 'hsl(240, 40%, 40%)' }}>
                       Shop Now
                      </button>
                        </Link>
                     </div>
                  </div>

                  <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                     <img
                        className="w-full h-full lg:max-w-3xl"
                        src={hero} // You may update this with the actual image of fans or air conditioners
                        alt="Fans and Air Conditioners"
                     />
                  </div>
               </div>
            </div>
         </main>
      </>
   );
};

export default Hero;
