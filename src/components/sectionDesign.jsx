import React from 'react';
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";

function SectionDesign() {
  return (
    <section className='w-full bg-[#f7e0c1] sm:px-10 text-black italic'>
      <Container>
        <Wrapper>
          <div className="w-full text-start mt-10">
            <h3 className="text-[38px] max-w-[400px] mx-auto mb-3 font-[600] text-[#977548] text-center">Самое главное -
              дизайн</h3>
            <div
              className='text-[16px] lg:text-[16px] font-[300] text-center mb-10 md:mb-0 max-w-[310px] sm:max-w-[380px] mx-auto text-center'>
              <p>Классический дизайн переосмыслен, теперь он добавляет нотку гламура в современный
                беззаботный и расслабленный гардероб.</p>
              <p>В создании украшений участвуют дизайнеры разных художественных направлений, а с 2025 года для создания
                моделей привлекается и искусственный интеллект</p>
              <p>Именно такие украшения улучшают повседневность и добавляют приятные эмоции в нашу жизнь. </p>
              <p>Не сказать, что мы счастливы, глядя на эту красоту, но очень близки к этому!</p>
            </div>
          </div>
          <div className="w-full aspect-square
         bg-[url(/images/img011.jpg)]
         bg-cover"
          ></div>
        </Wrapper>
      </Container>
    </section>
  );
}

export default SectionDesign;