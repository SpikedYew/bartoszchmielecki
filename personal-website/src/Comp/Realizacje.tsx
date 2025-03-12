interface DataProps {
  name: string;
  href: string;
  desc: string;
}
const data: DataProps[] = [
  {
    name: "Telesystem Spj",
    href: "",
    desc: "",
  },
  {
    name: "MFC STUDIO",
    href: "",
    desc: "",
  },
  {
    name: "Studio Uszko",
    href: "",
    desc: "",
  },
];

export default function Realizacje() {
  return (
    <div
      id="1"
      className="  flex flex-col items-center justify-center text-5xl font-semibold"
    >
      <div className="w-[620px]">
        <h1>Realizacje</h1>
        <ul>
          <li className="text-2xl mt-3">
            <a href="https://www.mfcstudio.pl" target="_blank">
              {data[1].name}
            </a>
          </li>
          <li className="text-2xl mt-3">studiouszko.pl</li>
          <li className="text-2xl mt-3">studiouszko.pl</li>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
