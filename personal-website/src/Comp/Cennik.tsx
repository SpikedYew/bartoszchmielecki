// import { useState } from "react";
import * as motion from "motion/react-client";

interface DataProps {
  name: string;
  desc: string;
  list: string[];
}
// const data: DataProps[] = [
//   {
//     name: "Strona One Page",

//     desc: "600 zł",
//     list: [
//       "Cała treść na stronie głównej",
//       "Copywriting",
//       "Indywidualny projekt graficzny",
//       "Wsparcie techniczne: 1 miesiąc",
//       "Gwarancja: 12 miesięcy",
//       "Certyfikat SSL",
//       "Optymalizacja SEO",
//     ],
//   },
//   {
//     name: "Strona Standard",
//     desc: "1000 zł",
//     list: [
//       "Strona główna + do 5 podstron",
//       "Copywriting",
//       "Indywidualny projekt graficzny",
//       "Formularz kontaktowy",
//       "Propozycja treści",
//       "5 zdjęć stockowych",
//       "Szkolenie z obsługi (wideo)",
//       "Wsparcie techniczne: 3 miesiące",
//       "Gwarancja: 12 miesięcy",
//       "Animacje i elementy interaktywne",
//       "Certyfikat SSL",
//       "Optymalizacja SEO",
//       "Dodatkowe języki",
//       "System rezerwacji",
//     ],
//   },
//   {
//     name: "Strona Premium",
//     desc: "2000 zł",
//     list: [
//       "Strona główna + do 10 podstron",
//       "Copywriting",
//       "Indywidualny rozbudowany projekt graficzny",
//       "Formularz kontaktowy",
//       "Blog / Sklep",
//       "Rozbudowana prezentacja oferty",
//       "Propozycja treści",
//       "10 zdjęć stockowych + 1 wideo",
//       "Animacje i elementy interaktywne",

//       "Wsparcie techniczne: 6 miesięcy",
//       "Gwarancja: 12 miesięcy",
//       "Certyfikat SSL",
//       "Optymalizacja SEO",
//       "Dodatkowe języki",
//       "System rezerwacji",
//     ],
//   },
// ];

const data: DataProps[] = [
  {
    name: "Strona One Page",
    desc: "Cena: 600 zł",
    list: [
      "Indywidualny projekt graficzny",

      "Cała treść na stronie głównej",
      "Copywriting",

      "Certyfikat SSL",

      "Optymalizacja SEO",
      "Wsparcie techniczne: 1 miesiąc",
      "Gwarancja: 12 miesięcy",
    ],
  },
  {
    name: "Strona Standard",
    desc: "Cena: 1000 zł",
    list: [
      "Indywidualny projekt graficzny",

      "Strona główna + do 5 podstron",
      "Copywriting",
      "Propozycja treści",

      "Formularz kontaktowy",
      // "5 zdjęć stockowych",
      "Szkolenie z obsługi (wideo)",
      "Animacje i elementy interaktywne",
      "Certyfikat SSL",
      "Dodatkowe języki",
      "System rezerwacji",

      "Optymalizacja SEO",
      "Wsparcie techniczne: 3 miesiące",
      "Gwarancja: 12 miesięcy",
    ],
  },
  {
    name: "Strona Premium",
    desc: "Cena: 2000 zł",
    list: [
      "Indywidualny rozbudowany projekt graficzny",

      "Strona główna + do 10 podstron",
      "Copywriting",
      "Propozycja treści",
      "Rozbudowana prezentacja oferty",

      "Formularz kontaktowy",
      "Blog / Sklep",
      // "10 zdjęć stockowych + 1 wideo",
      "Zaawansowane animacje i interaktywność",
      "Certyfikat SSL",
      "Dodatkowe języki",
      "System rezerwacji",
      "Integracja z Google Analytics",

      "Optymalizacja SEO",
      "Wsparcie techniczne: 6 miesięcy",
      "Gwarancja: 12 miesięcy",
    ],
  },
];

export default function Realizacje() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        viewport={{ once: true }}
        id="cennik"
        className="flex flex-col items-center justify-center text-5xl font-semibold"
      >
        <h1 className="md:w-[620px] mx-auto">
          Cennik 💵 <p className="text-lg">*netto</p>
        </h1>
        <div className="w-[90vw] md:w-auto max-w-[95vw] mt-[100px] mb-[100px] md:max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[200px] md:h-auto lg:w-[300px] lg:h-auto shadow-md hover:shadow-2xl p-3 md:m-2 transition-all"
              >
                <h2 className="text-2xl text-center">{item.name}</h2>
                <p className="ml-4 mt-2 text-lg">{item.desc}</p>
                <hr />
                {item.list.length > 0 && (
                  <ul className="mt-3 text-sm text-gray-600">
                    {item.list.map((item2, i) => (
                      <li
                        key={i}
                        className="mb-1 before:content-['✔'] before:mr-2 before:text-green-500"
                      >
                        {item2}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
