import * as motion from "motion/react-client";

export default function Dlaczego() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      viewport={{ once: true }}
      id="dlaczego"
      className="  h-auto mt-[10vh] mb-[10vh] flex flex-col md:items-center justify-center text-5xl md:text-6xl lg:text-7xl font-semibold"
    >
      <div className=" p-4 md:p-0 md:w-[620px]">
        <h1 className="text-center md:text-left ">Dlaczego ja?</h1>
        <h2 className="text-lg md:text-xl mt-5">
          Tworzę nowoczesne i szybkie strony internetowe, które przyciągają
          klientów i działają bezproblemowo przez lata. Stawiam na intuicyjność,
          wysoką jakość i stabilność, dzięki czemu Twoja strona nie wymaga
          ciągłej opieki ani kosztownych poprawek. Bez ryzyka – podpisujemy
          umowę, a płatność dopiero po wykonaniu strony.
        </h2>
      </div>
    </motion.div>
  );
}
