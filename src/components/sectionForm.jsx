import React from 'react';
import ContactForm from "@/components/contactForm";

function SectionForm() {
  return (
    <section className="py-32 flex flex-col justify-center items-center italic">
      <h3 className='text-[38px] text-[#a28f7c] font-[600] pb-10'>Свяжитесь с нами</h3>
      <p className='text-[24px] font-[300] pb-10 max-w-[640px] text-center'>Мы всегда готовы ответить на ваши вопросы и помочь с
        выбором ювелирных изделий.</p>
      <ContactForm/>
    </section>
  );
}

export default SectionForm;