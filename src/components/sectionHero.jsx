import React from 'react';

function SectionHero(props) {
  return (
    <section
      className="w-full h-screen mt-[-80px] text-white
      "
    style={{
      backgroundImage: `url(/bg/hero_bg.webp)`,
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center 75%"
    }}>

      <div className="w-full h-full flex flex-col justify-center items-center"
           style={{background: "rgba(0,0,0,0.3)"}}>
        <p className="text-[14px] sm:text-[22px] font-bold
         drop-shadow-2xl [-webkit-text-stroke:1px_rgba(0,0,0,0.14)]
        ">
          Для ценителей элегантности и роскоши
        </p>
        <h2 className="font-semibold mt-[80px] mb-[40px]
        text-[55px] sm:text-[102px] tracking-[15px] sm:tracking-[25px]
        drop-shadow-2xl [-webkit-text-stroke:1px_rgba(0,0,0,0.4)] font-bold
        ">
          Бриант
        </h2>
        <p className="
        text-[16px] font-bold sm:text-[22px] text-center drop-shadow-2xl [-webkit-text-stroke:1px_rgba(0,0,0,0.4)]
        ">
          Ювелирная компания
        </p>


      </div>

    </section>

  );
}

export default SectionHero;