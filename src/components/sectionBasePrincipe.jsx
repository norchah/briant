import React from 'react';
import Wrapper from "@/components/wrapper";
import Container from "@/components/container";

function SectionBasePrincipe() {
  return (
    <section
      className="w-full bg-[#e7eef3] py-30 px-5 sm:px-10 text-black italic"
      id="about">
      <Container>
        <Wrapper>
          <div className="w-full aspect-square
         bg-[url(/bg/basePrincipe.jpg)]
         bg-cover"
          ></div>
          <div className="w-full text-start mt-10">
            <h3 className="text-[38px] mb-3 font-[600] text-[#607d92]">Наши базовые принципы</h3>
            <p className="text-[12px] lg:text-[16px] font-[700] text-[#607d92]">Главное – это Вы</p>
            <p className="text-[12px] lg:text-[16px] font-[300] mb-2">Создавая новые изделия, мы стремимся сделать их такими,
              какими хотите их видеть Вы</p>
            <p className="text-[12px] lg:text-[16px] font-[700] text-[#607d92]">Если делать что-то , то делать
              хорошо</p>
            <p className="text-[12px] lg:text-[16px] font-[300] mb-2">Мы знаем, что именно у нас получается лучше всех.
              Стремление превзойти в этом самих себя позволяет нам идти вперед</p>
            <p className="text-[12px] lg:text-[16px] font-[700] text-[#607d92]">Моделей много не бывает</p>
            <p className="text-[12px] lg:text-[16px] font-[300] mb-2">Основа нашей деятельности – это создание новых
              моделей</p>
            <p className="text-[12px] lg:text-[16px] font-[700] text-[#607d92]">Драгоценности должны быть доступны
              для
              всех</p>
            <p className="text-[12px] lg:text-[16px] font-[300] mb-2">«Правильное» изделие должно выглядеть дороже, чем
              стоит.
              Даже недорогие украшения у нас выглядят как фамильные драгоценности, ведь они должны быть в каждой
              семье!</p>
            <p className="text-[12px] lg:text-[16px] font-[700] text-[#607d92]">Делать больше, чем достаточно</p>
            <p className="text-[12px] lg:text-[16px] font-[300]">Репутация честного подхода позволяет нашей компании
              добровольно принять на себя обязательств больше, чем определено законодательством.
              Мы стремимся создать уникальное торговое предложение, основанное на оптимальной практике - творчество и
              минимально возможные цены.</p>
          </div>
        </Wrapper>
      </Container>
    </section>
  );
}

export default SectionBasePrincipe;