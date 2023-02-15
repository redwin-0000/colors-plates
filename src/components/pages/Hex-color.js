import React from 'react';
import { toast } from 'react-hot-toast';
import  Color_Data from '../data/Color_Data'


function HexColor(){ 

  const CopyToClipboard =(e) =>{
  navigator.clipboard.writeText(e.Color_Hex_Code).then(()=>{
    toast.success(`${e.Color_Hex_Code} copied to clipboard`)
  })
 
  }

  return (
    <>
   <section className="text-green-700 body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 gap-28 ml-8 mb-8">
 {Color_Data.map((e,i)=>{ 
  return(
     <div className="p-4 w-1/6 h-3.5 " key={i}>
        <div className={`h-full bg-[${e.Color_Hex_Code}] bg-opacity-75 px-8  pb-20  rounded-lg overflow-hidden text-center relative cursor-pointer`}
        onClick={()=>CopyToClipboard(e)}>
        </div>
        <h2 className='lg:text-xl text-gray-400 text-center'>{e.Color_Hex_Code}</h2>
      
      </div>
  )
 })} 
  </div>
  </div>
</section>
    </>
  );
}

export default HexColor;