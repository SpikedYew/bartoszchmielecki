import "./App.css";
import { Instagram, Facebook } from "lucide-react";
import Menu from "./Comp/Menu";
import Realizacje from "./Comp/Realizacje";
import Cennik from "./Comp/Cennik";
// import ParticlesComponent from "./Comp/Particles";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <Menu />
        <div className="flex flex-col w-full">
          <div className=" h-[100vh] flex flex-col md:items-center justify-center text-5xl md:text-6xl lg:text-7xl font-semibold">
            <img
              src="/img/bartosz.jpg"
              className="h-[350px] w-[350px] mx-auto mb-4 rounded-lg shadow-xl"
            ></img>
            <div className="p-4 md:p-0 md:w-[620px]">
              <h1>Bartosz Chmielecki</h1>
              <h2 className="text-2xl md:text-3xl mt-5">
                Strony Internetowe generujące zasięgi
              </h2>
            </div>
            <div className=" p-4 md:p-0 flex h-[100px] md:w-[620px] items-center ">
              {" "}
              <Instagram className="mr-12 cursor-pointer transition-all hover:-translate-y-2" />
              <Facebook className="mr-12 cursor-pointer transition-all hover:-translate-y-2" />
            </div>
          </div>
          <Realizacje />
          <Cennik />
        </div>
      </div>
    </>
  );
}

export default App;
