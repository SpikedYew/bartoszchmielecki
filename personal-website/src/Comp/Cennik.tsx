import { useState } from "react";

interface DataProps {
  name: string;
  href: string;
  desc: string;
}
const data: DataProps[] = [
  {
    name: "Wizytówka",
    href: "",
    desc: "Description for Telesystem Spj",
  },
  { name: "Rozkręcenie", href: "", desc: "Description for MFC STUDIO" },
  { name: "Sklep", href: "", desc: "Description for Studio Uszko" },
];

export default function Realizacje() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      {/* Popup Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000028]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-2xl font-bold">{data[selectedIndex].name}</h2>
            <p className="mt-4 text-gray-700">{data[selectedIndex].desc}</p>
            <button
              onClick={() => setSelectedIndex(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        id="1"
        className="flex flex-col items-center justify-center text-5xl font-semibold"
      >
        <h1 className="w-[620px] mx-auto">Cennik</h1>
        <div className="mt-[100px] mb-[100px] max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[450px] shadow-md p-4 m-2 transition-all hover:shadow-lg"
              >
                <h2 className="text-xl uppercase text-center">{item.name}</h2>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
