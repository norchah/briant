import React from 'react';

function Header(props) {
  return (
    <header className="w-full fixed top-0 left-0 relative z-50
    px-7 md:px-10
    h-[40px] sm:h-[60px] md:h-[80px]
    text-[12px] sm:text-[18px]
    text-white
    bg-[rgba(0,0,0,0.3)]
    ">
      <div className="container mx-auto flex justify-between items-center h-full font-semibold">
        <div className='w-14 sm:w-18 lg:w-22'>
          <img src='/logo/logoBgFree.png' alt='logo'/>
        </div>
        <nav aria-label="Разделы сайта" className="">
          <ul className="flex gap-2 sm:gap-4">
            <li>
              <a href="#about" className="relative inline-block
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-white
             after:transition-all after:duration-300
             hover:after:w-full hover:after:left-0"
              >О нас</a>
            </li>
            <li>
              <a href="#gallery" className="relative inline-block
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-white
             after:transition-all after:duration-300
             hover:after:w-full hover:after:left-0"
              >Изделия</a>
            </li>
            <li>
              <a href="#footer" className="relative inline-block
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-white
             after:transition-all after:duration-300
             hover:after:w-full hover:after:left-0"
              >Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;