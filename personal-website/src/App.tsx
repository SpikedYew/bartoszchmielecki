import "./App.css";
import { Instagram, Facebook } from "lucide-react";
import Menu from "./Comp/Menu";

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
          <div className="  flex flex-col items-center justify-center text-5xl font-semibold">
            <div className="w-[620px]">
              <h1>Realizacje</h1>
              <ul>
                <li className="text-2xl mt-3" id="1">
                  mfcstudio.pl
                </li>
                <li className="text-2xl mt-3">telesystemspj.pl</li>
                <li className="text-2xl mt-3">studiouszko.pl</li>
                <li className="text-2xl mt-3">studiouszko.pl</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
