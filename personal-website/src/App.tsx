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
          <div className=" h-[100vh] flex flex-col items-center justify-center text-7xl font-semibold">
            <div className="w-[620px]">
              <h1>Bartosz Chmielecki</h1>
              <h2 className="text-3xl mt-5">
                Strony Internetowe generujące zasięgi
              </h2>
            </div>
            <div className="flex h-[100px] w-[620px] items-center ">
              {" "}
              <Instagram className="mr-12 transition-all hover:mb-4" />
              <Facebook className="mr-12 transition-all hover:mb-4" />
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
