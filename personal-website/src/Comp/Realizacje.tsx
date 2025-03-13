import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

interface DataProps {
  name: string;
  img0: string;
  desc: string;
  img1: string;
  img2: string;
}
const data: DataProps[] = [
  {
    name: "Telesystem Spj",
    img0: "",
    desc: "Cntrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    img1: "/img/telesystem-pion.png",
    img2: "/img/telesystem-poz.png",
  },
  {
    name: "MFC STUDIO",
    img0: "",
    desc: "Description for MFC STUDIO",
    img1: "/img/mfcstudio-pion.png",
    img2: "/img/mfcstudio-poziom.png",
  },
  {
    name: "Studio Uszko",
    img0: "",
    desc: "Description for Studio Uszko",
    img1: "/img/studiouszko-pion.png",
    img2: "/img/studiouszko-poz.png",
  },
  {
    name: "kolorowanko",
    img0: "",
    desc: "Some other description",
    img1: "/img/kolorowanko-pion.png",
    img2: "/img/kolorowanko-poz.png",
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
            <div className="bg-white w-6xl h-4xl p-6 rounded-lg shadow-lg ">
              <div className="flex flex-row">
                <div>
                  <h2 className="text-2xl font-bold uppercase">
                    {data[selectedIndex].name}
                  </h2>
                  <p className="mt-3 text-gray-700 w-[400px]">
                    {data[selectedIndex].desc}
                  </p>
                  <img
                    src={data[selectedIndex].img1}
                    className="w-[222px] rounded-sm mx-auto mt-5 h-[480px] shadow-xl"
                  ></img>
                </div>
                <div className="w-full">
                  <img
                    src={data[selectedIndex].img2}
                    className="md:w-[660px]  rounded-sm mx-auto mt-5 h-[360px] shadow-xl"
                  ></img>
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
        id="1"
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
                className="cursor-pointer md:w-[200px] md:h-[150px] lg:w-[300px] bg-gray-100 text-black rounded-sm lg:h-[250px] shadow-md p-4 m-2 transition-all hover:shadow-lg hover:-translate-y-2"
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
