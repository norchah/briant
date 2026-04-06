import React from 'react';

function Footer() {
  return (
    <footer className='text-[22px] bg-black text-gray-400 flex flex-col justify-center items-center pt-20 pb-10'
            id='footer'>
      <h3 className='text-[38px] pb-10 italic'>Контактная информация</h3>
      <p className='pb-3'> Телефон:
        <a href='tel:+79062347982' className='text-bold underline'> +7 906 234 79 82</a>
      </p>
      <p className='pb-3'>Электронная почта:
        <a href='mailto:a310362x@gmail.com' className='text-bold underline'> a310362x@gmail.com</a>
      </p>
      <p>ООО "Изумруд" ИНН 3906210059</p>
    </footer>
  );
}

export default Footer;