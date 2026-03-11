import React from 'react';
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";

function SectionEveryDayGrid() {
  return (
    <section className='w-full bg-[#e4eef3] sm:px-10 text-black italic'>
      <Container>
        <Wrapper>
          <div className="w-full text-start mt-10">
            <h3 className="text-[38px] max-w-[400px] mx-auto mb-3 font-[600] text-[#5e7b89] text-center">А на каждый
              день?</h3>
            <p
              className='text-[16px] lg:text-[16px] font-[300] text-center
              mb-10 md:mb-0 max-w-[310px] sm:max-w-[380px] mx-auto text-center'>
              Колье,
              браслеты и модные бусы завораживают. Легкие и удобные в носке , эти украшения являются значимыми
              дополнениями Вашего характера и находятся в гармонии с телом.
            </p>
          </div>
          <div className="w-full aspect-square
         bg-[url(/images/img012.jpg)]
         bg-cover"
          ></div>
        </Wrapper>
        <div className='grid grid-cols-3 gap-5 mt-10'>
          <img src='/images/img013.jpg' alt='Фотографии изделий'/>
          <img src='/images/img014.jpg' alt='Фотографии изделий'/>
          <img src='/images/img015.jpg' alt='Фотографии изделий'/>
          <img src='/images/img016.jpg' alt='Фотографии изделий'/>
          <img src='/images/img017.jpg' alt='Фотографии изделий'/>
          <img src='/images/img018.jpg' alt='Фотографии изделий'/>
        </div>
      </Container>
    </section>
  );
}

export default SectionEveryDayGrid;