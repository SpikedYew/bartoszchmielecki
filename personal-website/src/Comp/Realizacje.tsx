import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

interface DataProps {
  name: string;
  img0: string;
  desc: string;
  img1: string;
  img2: string;
  alt1: string;
  alt2: string;
  link: string;
}
const data: DataProps[] = [
  {
    name: "Telesystem Spj",
    img0: "",
    desc: "Nowoczesna strona internetowa oparta na WordPress. Szybka, responsywna i zoptymalizowana pod SEO. Intuicyjny design i łatwa edycja treści.",
    img1: "/img/telesystem-pion.png",
    alt1: "Projekt strony internetowej Telesystem Sp. j. – responsywny design w WordPress",
    img2: "/img/telesystem-poz.png",
    alt2: "Strona Telesystem Sp. j. – nowoczesny układ i intuicyjna nawigacja",
    link: "https://telesystemspj.pl/",
  },
  {
    name: "MFC STUDIO",
    img0: "",
    desc: "Strona internetowa stworzona w czystym HTML, CSS i JavaScript. Lekka, szybka i w pełni responsywna, z nowoczesnym designem i zoptymalizowanym kodem.",
    img1: "/img/mfcstudio-pion.png",
    alt1: "Realizacja strony MFC Studio – lekki kod HTML, CSS i JavaScript",
    img2: "/img/mfcstudio-poziom.png",
    alt2: "Nowoczesna strona MFC Studio – szybka i zoptymalizowana",
    link: "https://www.mfcstudio.pl/",
  },
  {
    name: "Studio Uszko",
    img0: "",
    desc: "Strona stworzona w React (Vite) + TypeScript + Tailwind CSS. Szybka, nowoczesna i responsywna, z CMS opartym na Google Sheets do łatwej edycji oferty.",
    img1: "/img/studiouszko-pion.png",
    alt1: "Projekt strony Studio Uszko – React, TypeScript i Tailwind CSS",
    img2: "/img/studiouszko-poz.png",
    alt2: "Strona Studio Uszko z CMS opartym na Google Sheets – dynamiczna i responsywna",
    link: "https://studiouszko.pl/",
  },
  {
    name: "Kolorowanko",
    img0: "",
    desc: "Sklep internetowy oparty na WordPress + WooCommerce, zintegrowany z systemem płatności Stripe. Szybki, responsywny i zoptymalizowany pod sprzedaż online.",
    img1: "/img/kolorowanko-pion.png",
    alt1: "Sklep internetowy Kolorowanko – WooCommerce i Stripe na WordPress",
    img2: "/img/kolorowanko-poz.png",
    alt2: "Realizacja e-commerce Kolorowanko – nowoczesny sklep online",
    link: "https://bartoszchmielecki.eu/",
  },
];

export default function Realizacje() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      {/* Popup Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            viewport={{ once: true }}
            className="fixed inset-0 flex items-center justify-center z-20 bg-[#00000028]"
          >
            <div className="bg-white w-[90vw] h-auto md:w-6xl md:h-4xl p-6 rounded-lg shadow-lg ">
              <div className="flex flex-col md:flex-row">
                <div>
                  <h2 className="text-2xl font-bold uppercase">
                    {data[selectedIndex].name}
                  </h2>
                  <p className="mt-3 text-gray-700 w-auto md:w-[400px]">
                    {data[selectedIndex].desc}
                  </p>
                  <img
                    alt={data[selectedIndex].alt1}
                    src={data[selectedIndex].img1}
                    className="w-[55px] h-[120px] md:w-[222px] rounded-sm mx-auto mt-5 md:h-[480px] shadow-xl"
                  ></img>
                </div>
                <div className="w-full">
                  <img
                    alt={data[selectedIndex].alt2}
                    src={data[selectedIndex].img2}
                    className="w-[330px] h-[180px] md:w-[660px]  rounded-sm mx-auto mt-5 md:h-[360px] shadow-xl"
                  ></img>
                  <p className="text-center mt-4 hover:underline">
                    <a href={data[selectedIndex].link} target="_blank">
                      Link do strony
                    </a>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedIndex(null)}
                className="mt-4 px-4 py-2 bg-black text-white rounded-sm"
              >
                Zamknij
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        id="realizacje"
        className="flex flex-col items-center justify-center text-5xl font-semibold"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ once: true }}
          className="md:w-[620px] mx-auto"
        >
          Realizacje ✍️
        </motion.h1>
        <div className="mt-[100px] mb-[100px] max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="w-[90vw] cursor-pointer md:w-[200px] md:h-[200px] lg:w-[300px] bg-gray-100 text-black rounded-sm lg:h-[250px] shadow-md p-4 m-2 transition-all hover:shadow-lg hover:-translate-y-2"
              >
                <img
                  src={item.img2}
                  className="  rounded-sm mx-auto mt-5 shadow-xl"
                ></img>
                <h2 className="text-xl mt-4 uppercase text-center font-bold  ">
                  {item.name}
                </h2>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
