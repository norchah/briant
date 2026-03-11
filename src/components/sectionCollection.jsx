import React from 'react';
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";

function SectionCollection() {
  return (
    <section className='w-full bg-[#e8ded4] sm:px-10 text-black italic'>
      <Container>
        <Wrapper>
          <div className="w-full text-start mt-10">
            <h3 className="text-[38px] max-w-[400px] mx-auto mb-3 font-[600] text-[#846e57] text-center">Коллекции ювелирных
              изделий</h3>
            <div className='text-[16px] lg:text-[16px] font-[300] text-center mb-10 md:mb-0 max-w-[310px] sm:max-w-[380px] mx-auto text-center'>
              <p
                className="">БРИАНТ
                создает
                собственные коллекции
                украшений -
                аккуратные и качественные, разработанные при помощи новейших уникальных технологий:</p>
              <p>- от минимализма до ювелирной скульптуры,</p>
              <p>- от удивительных невесомых акцентов до завораживающей вечерней роскоши.</p>
            </div>

          </div>
          <div className="w-full aspect-square
         bg-[url(/images/img010.jpg)]
         bg-cover"
          ></div>
        </Wrapper>
      </Container>
    </section>
  );
}

export default SectionCollection;