import React from 'react';
import Wrapper from "@/components/wrapper";
import Container from "@/components/container";

function SectionTripStarted() {
  return (
    <section className='w-full bg-[#ecddfa] py-30 px-5 sm:px-10 text-black italic'>
      <Container>
        <div className="flex flex-col justify-center items-center">
          <div className='max-w-[760px]'>
            <p className='uppercase text-[#7d688f] text-center text-[14px]'>
              путешествие началось
            </p>
            <h3 className='text-[30px] font-[600] sm:text-[52px] text-center text-[#7d688f] my-[50px]'>Откройте для себя
              ювелирное искусство</h3>
            <p className='text-[20px] font-[300] text-center'>Редкость и красота ювелирных камней уникальны и наши
              коллекции отражают это во всех
              проявлениях — от изящных серебряных акцентов до великолепных драгоценностей</p>
          </div>
          <div className='grid grid-cols-3 gap-5 mt-30'>
            <img src='/images/img001.jpg' alt='Фотографии изделий'/>
            <img src='/images/img002.jpg' alt='Фотографии изделий'/>
            <img src='/images/img003.jpg' alt='Фотографии изделий'/>
            <img src='/images/img004.jpg' alt='Фотографии изделий'/>
            <img src='/images/img005.jpg' alt='Фотографии изделий'/>
            <img src='/images/img006.jpg' alt='Фотографии изделий'/>
            <img src='/images/img007.jpg' alt='Фотографии изделий'/>
            <img src='/images/img008.jpg' alt='Фотографии изделий'/>
            <img src='/images/img009.jpg' alt='Фотографии изделий'/>
          </div>

        </div>
      </Container>

    </section>
  );
}

export default SectionTripStarted;