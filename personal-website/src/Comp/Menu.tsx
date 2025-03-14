import { useState } from "react";
import { PanelRightOpen, PanelLeftOpen } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button - Visible on Mobile */}
      <button
        aria-label="Otwórz/Zamknij menu"
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <PanelRightOpen size={30} /> : <PanelLeftOpen size={30} />}
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed lg:sticky top-0 left-0 h-screen w-[350px] z-10 bg-black text-white shadow-2xl transition-transform duration-300  
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 flex flex-col items-center justify-center`}
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

        <h1 className="text-2xl font-bold mb-4">
          <a href="#start">Menu</a>
        </h1>
        <ul className="space-y-2 text-lg">
          <li>
            <a href="#dlaczego">Dlaczego ja?</a>
          </li>
          <li>
            <a href="#realizacje">Realizacje</a>
          </li>
          <li>
            <a href="#cennik">Cennik</a>
          </li>
          <li>
            <a href="#kontakt">Darmowy audyt i wycena</a>
          </li>
          {/* <li>
            <a href="#3">KOLO</a>
          </li>
          <li>
            <a href="#4">Studio Uszko</a>
          </li> */}
        </ul>
        <h3 className="text-sm  bottom-0 absolute mb-6">
          <a className="block" href="#start">
            Kontakt
          </a>
          <hr className="mb-2" />
          <a className="block" href="tel:+48533320515">
            +48 533 320 515
          </a>
          <a href="mailto:kontakt@bartoszchmielecki.com">
            kontakt@bartoszchmielecki.com
          </a>
        </h3>
      </div>
    </>
  );
}
