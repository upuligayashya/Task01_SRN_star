import { useState } from "react";
import headerImg from "./assets/homeimg.jpg";
import secImgA from "./assets/bgimg.jpg";
import recImg from "./assets/homeA.jpg";
import romImg from "./assets/homeB.jpg";
import botImg from "./assets/boat.jpeg";
import secImgB from "./assets/downsat.jpeg";

function App() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div classname="w-full h-full relative ">
      {/* ?Navigation bar */}
      <div
        className={`flex fixed w-full h-[6rem] bg-transparent z-20 items-center px-20 text-white ${
          +colorChange
            ? " bg-black/70 duration-300 ease-in-out  backdrop-blur-lg"
            : " "
        }`}
      >
        <div className="w-[20%] font-semibold text-2xl tracking-[3px]">
          {" "}
          <h1>FusedLab</h1>
        </div>

        <div className="w-[60%] font-[700]  ">
          <a href="#">
            <ul className="flex gap-12 text-sm">
              <li className="uppercase ">RECIDENIAL</li>
              <li className="uppercase">RoaM</li>
              <li className="uppercase">BoatS</li>
            </ul>{" "}
          </a>
        </div>
<a href="#">
        <div className="flex gap-3 w-[20%]  items-center">
          <p className="uppercase font-[700] underline underline-offset-4 decoration-1  text-sm">
            Personal
          </p>
          <p>|</p>
          <p className="uppercase  font-[700] text-sm">Business</p>
          <div>
            <i class="bx bx-menu text-3xl ml-4"></i>
          </div>
          
        </div></a>
      </div>
      {/* Header (calc function---> h-[calc(100vh-5rem)] bg img eka nav eken - krnna) */}
      <div
        className="h-screen bg-cover "
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="w-full h-[calc(100vh-5rem)] absolute mt-[6rem] mx-auto">
          <div className=" font-roboto font-bold text-7xl text-white text-center ">
            <h4>HIGH-SPEED INTERNET </h4>
            <h4 className="leading-2">AROUND THE WORLD</h4>
          </div>

          <div className=" text-2xl font-mono text-white text-center mt-10">
            <h1>Connect at home or on the go.</h1>
          </div>

          <div className="flex bg-transparent  text-white text-center mt-3 w-fit mx-auto hover:bg-slate-50/10 rounded-md">
            <a href="#" className="flex gap-4 items-center px-3 py-3">
              <p className="text-sm font-semibold ">Watch Now</p>
              <i class="bx bx-play-circle bx-tada bx-flip-vertical"></i>
            </a>
          </div>

          <div className=" text-white mt-5 h-20 mx-[30%] ">
            <p className="text-sm font-semibold text-white text-left m-2">
              Service Address
            </p>

            <div className="flex gap-2">
              <div className="flex backdrop-blur-sm bg-white/20 border-2 w-[400px] h-12 items-center  rounded-sm justify-center">
                <input
                  type="text"
                  placeholder="TYPE AND SELECT"
                  className="px-3 py-2 w-[400px] rounded-sm bg-transparent"
                />
                <i className="bx bx-target-lock px-3 text-2xl text-center"></i>
              </div>
              <button className="bg-white border-2 w-[350px]  items-center  rounded-sm justify-center">
                <p className="text-black font-bold text-[10px]">ORDER NOW</p>
              </button>
            </div>

            <div className="flex bg-transparent text-white text-center mt-4 w-fit mx-auto hover:bg-slate-50/5 rounded-md">
              <a href="#" className="flex gap-2 items-center px-3 py-3">
                <p className="text-sm font-semibold text-[9px] ">
                  VIEW AVAILABILITY & SPEEDMAP
                </p>
                <i class="bx bx-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* black bg img-  section 01 */}
      <div
        className="h-[160vh] bg-cover py-8 w-full"
        style={{ backgroundImage: `url(${secImgA})` }}
      >
        {/* 3 flex imgs
         */}
        <div className="flex grid-cols-3 gap-4 justify-center w-full mx-auto">
          <div
            className="w-[31%] h-[600px] text-white bg-center "
            style={{ backgroundImage: `url(${recImg})` }}
          >
            <div>
              <p className="font-semibold font-roboto text-[40px] mt-4 ml-4">
                RESIDENTIAL
              </p>
              <a href="#">
                <p className="hover:font-bold ml-4 text-2xl font-roboto ">
                  Connect at home
                </p>
              </a>
            </div>
          </div>
          <div
            className=" w-[31%] h-[600px] text-white bg-center  "
            style={{ backgroundImage: `url(${romImg})` }}
          >
            <div>
              <p className="font-semibold font-roboto text-[40px] mt-4 ml-4">
                ROME
              </p>
              <a href="#">
                <p className="hover:font-bold ml-4 text-2xl font-roboto ">
                  Connect on the go
                </p>
              </a>
            </div>
          </div>
          <div
            className="w-[31%] h-[600px] text-white bg-no-repeat bg-center pr-2 "
            style={{ backgroundImage: `url(${botImg})` }}
          >
            <div>
              <p className="font-semibold font-roboto text-[40px] mt-4 ml-4">
                BOATS
              </p>
              <a href="#">
                <p className="hover:font-bold ml-4 text-2xl font-roboto ">
                  Connect on the water
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="text-white text-center text-5xl mt-12 font-bold">
          <p>STARLINK FOR BUSINESSES AND POWER USESS</p>
        </div>
        <div>
          <div className="flex bg-transparent text-white text-center mt-4 w-fit mx-auto hover:bg-slate-50/5 rounded-md">
            <a href="#" className="flex gap-2 items-center px-3 py-3">
              <p>
                RELIABLE HIGH-SPEED INTERNERT DESIGNED TO KEEP BUSINESSES
                CONNECTED
              </p>
              <p className="text-sm font-semibold text-[9px] ">LEARN MORE</p>
              <i class="bx bx-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        className="h-screen bg-cover w-full items-center"
        style={{ backgroundImage: `url(${secImgB})` }}
      >
        <div className="text-white font-roboto mx-14 items-center">
          <p className="text-4xl font-semibold">CONNECTIVITY WHERE YOU </p>
          <p className="text-4xl font-semibold">LEAST EXPECT IT</p>
          <p className="mt-9">
            Streaming, video calls, online gaming, remote working and more are
            now{" "}
            <p>
              {" "}
              possible in even the most remote locations thanks to the world’s
              most{" "}
            </p>
            <p> advanced internet system.</p>
          </p>
        </div>
      </div>

      <div
        className=" w-full h-[130vh] bg-cover py-8 "
        style={{ backgroundImage: `url(${secImgA})` }}
      >
        <div className="flex mt-52 ">
          <div className="w-[50%] h-[600px] text-white bg-no-repeat bg-center pr-2 bg-black">
            <a href="#">
              <i class="bx bx-play-circle mt-28 ml-60"></i>
            </a>
          </div>
          <div className="w-[50%] h-[600px] text-white bg-no-repeat bg-center pr-2 bg-black">
            <p className="text-5xl font-bold font-roboto">
              GET ONLINE IN MINUTES
            </p>
            <p className="font-roboto mt-6">
              Set up Starlink just two steps. instructions work in either order:
            </p>
            <p className="font-roboto text-2xl font-bold mt-12">
              | 1 PLUG IT IN
            </p>
            <p className="font-roboto text-2xl font-bold mt-3">
              | 2 POINT AT SKY
            </p>
            <p className="font-roboto mt-12">
              Starlink requires an unobstructed view of the sky. Download the
              Starlink app to determine your best install location.
            </p>

            <div>
              <a href="#" className="flex gap-8 mt-5 text-[12px] font-semibold">
                {" "}
                <p>
                  DOWNLOAD FOR ANDROID
                  <i class="bx bx-chevron-right mt-1"></i>
                </p>
                <p>
                  DOWNLOAD FOR US<i class="bx bx-chevron-right mt-1"></i>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-screen bg-cover w-full items-center"
        style={{ backgroundImage: `url(${secImgA})` }}
      >
<div className="w-full h-(80vh)] absolute mt-48 mx-auto">
          <div className=" font-roboto font-bold text-5xl text-white text-center ">
          
            <h4 className="leading-2">30 DAY TRIAL</h4>
          </div>

          <div className=" text-2xl font-roboto text-white text-center mt-4">
            <h1>If not satisfied, return Starlink for a full refund.</h1>
          </div>
          <div className=" text-white h-20 mx-[30%]  mt-10">
            <p className="text-sm font-semibold text-white text-left mb-4 ">
              Service Address
            </p>
          
            <div className="flex gap-2">
              <div className="flex backdrop-blur-sm bg-white/20 border-2 w-[400px] h-12 items-center  rounded-sm justify-center">
                <input
                  type="text"
                  placeholder="TYPE AND SELECT"
                  className="px-3 py-2 w-[400px] rounded-sm bg-transparent"
                />
                <i className="bx bx-target-lock px-3 text-2xl text-center"></i>
              </div>
              <button className="bg-white border-2 w-[350px]  items-center  rounded-sm justify-center">
                <p className="text-black font-bold text-[10px]">ORDER NOW</p>
              </button>
            </div>

            <div className="flex bg-transparent text-white text-center mt-4 w-fit mx-auto hover:bg-slate-50/5 rounded-md">
              <a href="#" className="flex gap-2 items-center px-3 py-3">
                <p className="text-sm font-semibold text-[9px] ">
                  VIEW AVAILABILITY & SPEEDMAP
                </p>
                <i class="bx bx-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
</div>

<div className="h-18 bg-black items-center text-white">
  
  <ul className=" flex gap-4 text-[11px] font-semibold">
              <li className="ml-5">Careers</li>
              <li >Satelite Operators</li>
              <li>Authorized Reseller</li>
              <li>Privacy & Legal</li>
              <li>Privacy Preferences</li>
              <li>Gear Store</li>

              <li className="ml-40 ">Interested in staying up to date with Starlink?</li>
              <li>
             
              <div className="flex backdrop-blur-sm   h-12 justify-end " >
                <input
                  type="text"
                  placeholder="Email"
                  className=" border-b-2 bg-transparent"
                />
             
              <button className=" flex  items-center  rounded-sm justify-center">
                <p className="text-white font-bold text-[10px] ml-12">SIGN UP<i class='bx bx-chevron-right ml-2'></i></p>
              </button>
              </div>
              <p className="mt-1">By clicking Sign Up, you agree to our Privacy Policy</p>

              </li>
            </ul>

      </div>


    </div>
  );
}

export default App;
