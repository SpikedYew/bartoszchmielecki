import { useState } from "react";
import { PanelRightOpen, PanelLeftOpen } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button - Visible on Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <PanelRightOpen size={30} /> : <PanelLeftOpen size={30} />}
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed md:sticky top-0 left-0 h-screen w-[350px] z-10 bg-black text-white shadow-2xl transition-transform duration-300  
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 flex flex-col items-center justify-center`}
      >
        {/* Close Button (Only on Mobile) */}
        {/* <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <PanelRightOpen
            size={30}
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        </button> */}

        <h1 className="text-2xl font-bold mb-4">Menu</h1>
        <ul className="space-y-2 text-lg">
          <li>
            <a href="#realizacje">Dlaczego ja?</a>
          </li>
          <li>
            <a href="#1">Realizacje</a>
          </li>
          <li>
            <a href="#2">Cennik</a>
          </li>
          <li>
            <a href="#3">Darmowy audyt i wycena</a>
          </li>
          {/* <li>
            <a href="#3">KOLO</a>
          </li>
          <li>
            <a href="#4">Studio Uszko</a>
          </li> */}
        </ul>
      </div>
    </>
  );
}
