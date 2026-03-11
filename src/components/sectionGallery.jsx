import React from 'react';
import Container from "@/components/container";

function SectionGallery() {
  return (
    <section className="w-full bg-[#dcd2d2] px-5 sm:px-10 text-black italic pb-10" id='gallery'>
      <Container>
        <div className='flex flex-col md:flex-row justify-center items-center md:mr-20 md:pb-20 py-30'>
          <div
            className='text-[16px] font-[300] text-center mb-10 md:mb-0 mx-auto text-center md:text-start sm:px-20'>
            <p>Немногие вещи в этом мире обладают силой связывать нас с нашими воспоминаниями, как это делают
              драгоценности.</p>
            <p>Это символ любви и жизни, который создает вечную связь.</p>
            <p>Вы можете посмотреть наши коллекции и выбрать украшение по своему вкусу.
            </p>
          </div>

          <a className='block bg-[#9a7f7f] text-white not-italic py-3 px-10 font-bold rounded-xl'>
            Посмотрю
          </a>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-10'>
          <img src='/images/img019.jpg' alt='Фотографии изделий'/>
          <img src='/images/img020.jpg' alt='Фотографии изделий'/>
          <img src='/images/img021.jpg' alt='Фотографии изделий'/>

        </div>
      </Container>
    </section>
  );
}

export default SectionGallery;