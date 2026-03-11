import React from 'react';
import Wrapper from "@/components/wrapper";
import Container from "@/components/container";

function SectionAbout() {
  return (
    <section
      className="w-full bg-[#f8ddca] py-30 px-5 sm:px-10 text-black italic"
      id="about">
      <Container id='about'>
        <Wrapper>
          <div className="w-full aspect-square
         bg-[url(/bg/about.jpg)]
         bg-cover"
          ></div>
          <div className="w-full text-center mt-10">
            <h3 className="text-[38px] mb-3 font-[600] italic text-[#d28d2e]">О нас</h3>
            <p className="text-[14px] text-[#666666]">Опыт и знания</p>
            <hr className="bg-[#d28d2e] h-[3px] w-[10%] mx-auto my-10 border-none"/>
            <p className="text-[14px] md:text-[20px] ">История нескольких поколений началась в 19 веке с пра-прадеда -
              золотодобытчика,
              продолжилась в потомках - геологах, геммологах, специалистах по огранке бриллиантов и ювелирах.
              Долгий путь развития, накопления знаний и опыта привел в 2010 году к созданию ювелирной компании «Бриант»
              и регистрации товарного знака.</p>
          </div>
        </Wrapper>
      </Container>
    </section>
  );
}

export default SectionAbout;