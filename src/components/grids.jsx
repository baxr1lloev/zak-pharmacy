import React from 'react';

const grids = () => {
    return (
        <div className="h-[258px]  rounded-[15px]  shadow-[20px 20px 60px #b3b3b3,
            -20px -20px 60px #ffffff] bg-[#e0e0e0] ">
         <div className="flex items-center justify-center">
           <img src="/src/assets/tabletka.svg" alt="" />
         </div>
         <div className="w-100 h-[60px] flex items-center justify-center">
           <p className="text-[#7E7E7E] font-[400] text-[12px] ">
             Клексан шприц 4000 анти-Ха МЕ/0.4мл №10
           </p>
         </div>
         <div className="pt-[20px] pl-[8px]">
           <div className=" w-100% flex items-ceter justify-start">
             <p className="font-[600] text-[#00AC73] text-[16px]">
               160 000 сум
             </p>
           </div>
         </div>
       </div>
    );
};

export default grids;