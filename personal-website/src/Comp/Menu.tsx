export default function Menu() {
  return (
    <>
      <div className="w-[350px] h-screen shadow-2xl flex-col sticky top-0 hidden items-center justify-center md:flex">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2">Menu</h1>
          <ul>
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
            <li>
              <a href="#3">KOLO</a>
            </li>

            <li>
              <a href="#4">Studio Uszko</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
