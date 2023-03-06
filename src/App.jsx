import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Grids from "./components/grids";

function App() {
  return (
    <center>
      <div className="img-zak">
        <img src="/src/assets/zak-pharmacy.svg" alt="" />
      </div>
      <div className="w-[100%] flex items-center justify-center ">
        <input
          type="text"
          className="bg-[#00AC73]  w-[95%] rounded-[15px] h-[50px] font-normal text-xs p-[10px] text-[#FFFFFF] "
          placeholder="Введите название товара или заболевания"
        />
      </div>

      <div className="pt-[20px]">
        <div className="w-[100%] flex justify-between items-center p-[15px]">
          <button className="w-[86px] h-[50px] rounded-[15px] bg-[#00AC73]">
            <p className="text-[#FFFFFF] font-[400]">Lorem ipsum </p>
          </button>
          <button className="w-[196px] h-[50px] bg-[#00AC73] rounded-[15px]">
            <p className="text-[#FFFFFF] font-[400]">Войти/Регистрация</p>
          </button>
        </div>
      </div>

      <div className="pt-[20px] flex items-center justify-center">
        <div className="w-[404px] rounded-[30px]  ">
          <div className="bg-[url('/src/assets/doctors.svg')] w-[98%] h-[300px]">
            <div className="w-100% flex items-flex-start justify-center">
              <h1 className="text-[32px] font-[600] text-[#FFFFFF]">
                ZAK Pharmacy ваш здоровый выбор
              </h1>
            </div>

            <div className="w-100%  pt-[12px]">
              <p className="text-[24px] font-[400] text-[#FFFFFF] ">
                Найти лекарства стало очень просто
              </p>
            </div>

            <div className="w-100%  flex items-center justify-center py-8 ">
              <button className="w-[196px] h-[56px] rounded-[15px] bg-[#00AC73] cursor-pointer ">
                <p className="font-[400] text-[16px] text-[#FFFF] ">Начать</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-[20px]">
        <p className="font-[700] text-[32px] text-[#000000]  ">
          Популярные товары
        </p>
      </div>

      <div className="w-100% h-[358px] gap-[10px]  bg-[#f2f2f2] pl-[10px] pr-[10px] flex items-center justify-between">
        <Grids />
        <Grids />
      </div>

      <div className="w-100%  flex items-start pt-[10px] justify-center">
        <button className="w-[196px] h-[56px] bg-[#00AC73] rounded-[15px] ">
          <p className="text-[#FFFF] font-[400] text-[16px] ">Подробнее</p>
        </button>
      </div>

      <div className="w-100% flex items-center justify-center pt-[10px] ">
        <h1 className="font-[700] text-[32px] text-[#000000]">
          Часто покупают
        </h1>
      </div>

      <div className="grid grid-cols-2  pt-[20px] gap-[10px] ">
        <Grids></Grids>
        <Grids></Grids>
        <Grids></Grids>
        <Grids></Grids>
        <Grids></Grids>
        <Grids></Grids>
        <Grids></Grids>
        <Grids></Grids>
      </div>

      <div className="w-100%  flex items-start pt-[20px] justify-center">
        <button className="w-[196px] h-[56px] bg-[#00AC73] rounded-[15px] ">
          <p className="text-[#FFFF] font-[400] text-[16px] ">Подробнее</p>
        </button>
      </div>

      <div className="pt-[22px]">
        <div className="flex items-center justify-center">
          <h1 className="font-[700] text-[32px] text-[#000000] ">О нас</h1>
        </div>
      </div>

      <div className="pt-22px ">
        <div className="w-[100%] flex items-start p-[10px] h-[380px] ">
          <img src="/src/assets/nature.png" alt="" />
        </div>
      </div>

      <div className="w-100%  pt-[20px] ">
        <div className="flex w-[350px] h-[115px] items-start justify-start">
          <p className="font-[400] text-[24px] text-[#000000] leading-[23px] ">
            Наши товары делают жизнь комфортной и безопасной. Высокий уровень
            сервиса и понимания к каждому покупателю.
          </p>
        </div>
      </div>

      <div className="w-100% pt-[20px] p-[10px]   flex">
        <div className="w-100% p-[10px] ">
          <p className="font-[400] text-[#000000] text-[16px] ">
            01. Большой ассортимент
          </p>
          <p className="text-[#7E7E7E]  text-[14px] font-[400]">
            Для ванной комнаты с различным покрытием
          </p>
          <p className="font-[400] text-[#000000] text-[16px]">
            02. Доступные цены
          </p>
          <p className="text-[#7E7E7E]  text-[14px] font-[400]">
            Сантехника под любой запрос
          </p>
          <p className="font-[400] text-[#000000] text-[16px]">
            03. Высокий уровень сервиса
          </p>
          <p className="text-[#7E7E7E]  text-[14px] font-[400]">
            Решаем неудовлетворенные потребности покупателей, ценим клиентов как
            деловых партнеров
          </p>
          <p className="font-[400] text-[#000000] text-[16px]">
            04. Круглосуточная доставка
          </p>
          <p className="text-[#7E7E7E]  text-[14px] font-[400]">
            Предоставляем круглосуточную доставку по всему Узбекистану{" "}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center  w-100% ">
        <div className="w-[100%]">
          <div className="bg-[url('/src/assets/green_block.svg')] w-[100%] h-[438px]">
            <div className="w-100% flex items-flex-start justify-center">
              <h1 className="text-[24px] pt-[20px] font-[700] text-[#FFFFFF]">
                Пользуйтесь нашим приложением для большего удобства
              </h1>
            </div>
            <div className="items-center mt-[37%] flex justify-center">
              <p className="font-[700] text-[#FFFFFF] text-[24px] ">Фото</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="pt-[20px]">
        <div className=" bg-[#00AC73] w-[100%] h-[500px] ">
          <div className="img-zak">
            <img src="/src/assets/zak-pharmacy.svg" alt="" />
          </div>
          <p className="text-[#FFFFFF] text-[20px]">
            Серви поддерживает вас и помогает найти лекарства по выгодным ценам
            и с удобной круглосуточной доставкой почти в любую точку страны.
            Будьте здоровы с нами!
          </p>

          <div className="w-[100%] p-[13px] gap-[10px] bg-[yellow] h-[400px] flex">
            <div className="w-[48%] bg-[red] h-[380px]">
              <p className="font-[700] text-[24px] text-[#FFFFFF]">
                О компании
              </p>
              <div className="pt-[20px]"></div>
              <div className="bg-[green] w-[100%]  flex items-start justify-start">
                <p className="p-[20px]"></p>
              </div>
            </div>
            <div className="w-[48%] bg-[red] h-[380px]">
              <p className="font-[700] text-[24px] text-[#FFFFFF]">
			  Помощь
              </p>
              <div className="pt-[20px]"></div>
              <div className="bg-[green] w-[100%]  flex items-start justify-start">
                <p className="p-[20px]"></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </center>
  );
}

export default App;
