import "./App.css";
import { Instagram, Facebook, Phone } from "lucide-react";
import Menu from "./Comp/Menu";
import Realizacje from "./Comp/Realizacje";
import Cennik from "./Comp/Cennik";
import Dlaczego from "./Comp/Dlaczego";
import Email from "./Comp/Kontakt";
// import ParticlesComponent from "./Comp/Particles";

function App() {
  return (
    <>
      <div id="start" className="flex flex-row">
        <Menu />
        <div className="flex flex-col w-full">
          <div className=" h-[100vh] flex flex-col md:items-center justify-center text-5xl md:text-6xl lg:text-7xl font-semibold">
            <img
              src="/img/bartosz.jpg"
              className="h-[350px] w-[350px] mx-auto mb-4 rounded-lg shadow-xl"
            ></img>
            <div className="p-4 md:p-0 md:w-[620px]">
              <h1 className="text-center md:text-left ">Bartosz Chmielecki</h1>
              <h2 className="text-2xl md:text-3xl mt-5">
                Strony Internetowe generujące zasięgi
              </h2>
            </div>
            <div className=" p-4 md:p-0 flex h-[100px] md:w-[620px] items-center ">
              {" "}
              <a
                href="https://www.instagram.com/bartoszchmieleckiweb/"
                target="_blank"
              >
                <Instagram className="mr-12 cursor-pointer transition-all hover:-translate-y-2" />
              </a>
              <a
                href="https://www.facebook.com/bartosz.chmielecki.98"
                target="_blank"
              >
                <Facebook className="mr-12 cursor-pointer transition-all hover:-translate-y-2" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Phone
                size={35}
                className="mr-2 cursor-pointer transition-all hover:-translate-y-2"
              />
              <p className="text-3xl">+48 533 320 515</p>
            </div>
          </div>
          <Dlaczego />
          <Realizacje />
          <Cennik />
          <Email />
          <hr className="mt-10" />
          <div className="w-full h-[5vh]  flex items-center justify-center">
            <p className="">© Bartosz Chmielecki</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
