import React from 'react';
import Container from "@/components/container";

function SectionFeatures() {
  return (
    <section className="w-full py-30 bg-[#f3dede] italic">
      <Container>
        <div className="h-full mx-auto flex flex-col justify-center items-center text-[#856666]">
          {/* Заголовок */}
          <h2 className="text-[38px] font-semibold text-center mb-8">
            Почему стоит выбрать нас?
          </h2>
          <p className='font-[700]'>Преимущества играют роль</p>
          {/* Сетка */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24">

            {/*Карточка*/}
            <div className="">
              <div className="flex gap-6 items-center mb-4">
                <img src={"/icons/thumbs_up_3d.png"} alt="icon" width="40" className=""/>
                <h3 className="text-[18px] font-semibold underline">Высокое качество материалов</h3>
              </div>

              <p className="text-[16px] text-black">
                Золото и платина с натуральными бриллиантами и драгоценными камнями. Серебро с цветными ювелирными
                камнями. Колье,бусы,браслеты из разнообразных природных камней с фурнитурой из золота и серебра, в том
                числе серебра с позолотой.
              </p>
            </div>

            <div className="">
              <div className="flex gap-6 items-center mb-4">
                <img src={"/icons/handshake_3d.png"} alt="icon" width="40" className=""/>
                <h3 className="text-[18px] font-semibold underline">Доступные цены</h3>
              </div>
              <p className="text-[16px] text-black">
                Наши изделия выглядят дороже, чем стоят, это важный фактор для настоящего ювелирного изделия!
              </p>
            </div>

            <div className="">
              <div className="flex gap-6 items-center mb-4">
                <img src={"/icons/ring_3d.png"} alt="icon" width="40" className=""/>
                <h3 className="text-[18px] font-semibold underline">Разнообразный дизайн</h3>
              </div>
              <p className="text-[16px] text-black">
                Каждое украшение создано с учётом современных тенденций и отличается уникальным дизайном.
              </p>
            </div>

            <div className="">
              <div className="flex gap-6 items-center mb-4">
                <img src={"/icons/hundred_points_3d.png"} alt="icon" width="40" className=""/>
                <h3 className="text-[18px] font-semibold underline">Натуральные камни</h3>
              </div>
              <p className="text-[16px] text-black">
                Мы используем только натуральные бриллианты, цветные драгоценные камни, а также ювелирные
                полудрагоценные камни, жемчуг.

              </p>
            </div>

            <div className="">
              <div className="flex gap-6 items-center mb-4">
                <img src={"/icons/magnifying_glass_tilted_left_3d.png"} alt="icon" width="40" className=""/>
                <h3 className="text-[18px] font-semibold underline">Профессиональное мастерство</h3>
              </div>
              <p className="text-[16px] text-black">
                Наши мастера обладают высоким профессионализмом и опытом в изготовлении ювелирных изделий.
              </p>
            </div>

            <div className="">
              <div className="flex gap-6 items-center mb-4">
                <img src={"/icons/clapping_hands_3d.png"} alt="icon" width="40" className=""/>
                <h3 className="text-[18px] font-semibold underline">Индивидуальный подход</h3>
              </div>
              <p className="text-[16px] text-black">
                Мы учитываем ваши предпочтения и создаём украшения, которые идеально подходят вам.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionFeatures;