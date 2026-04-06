import React from 'react';
import FloatingInput from "@/components/floatingInput";
import FloatingTextArea from "@/components/floatingTextArea";

function ContactForm() {
  return (
    <form className="w-full max-w-xl space-y-10 not-italic">
      <FloatingInput label="Имя или название компании" type="text" name="name"/>
      <FloatingInput label="Телефон" type="tel" name="phone"/>
      <FloatingTextArea label="Сообщение или предложение" name="message"/>
      {/*<button*/}
      {/*  type="submit"*/}
      {/*  className="mt-6 border border-black px-10 py-3 text-sm tracking-widest uppercase transition hover:bg-black hover:text-white"*/}
      {/*>*/}
      {/*  Отправить*/}
      {/*</button>*/}
      <div className='flex flex-col'>
        <button
          type="submit"
          className="block bg-[#9a7f7f] text-white not-italic py-3 px-10 font-bold rounded-xl self-center hover:cursor-pointer"
        >
          Отправить
        </button>
        <p className='text-center pt-5 text-[14px]'>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой
          конфиденциальности»</p>
      </div>

    </form>

  );
}

export default ContactForm;