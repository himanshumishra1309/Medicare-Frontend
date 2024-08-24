import React, { useContext, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Context } from '../../../../Context/Context';


function ViewDocPrecription({ onBack }) {
    const {suggestedPills} = useContext(Context)

    useEffect(() => {
        console.log(suggestedPills);
      }, [suggestedPills]);

    return (
        <div className='w-full h-full bg-white'>
          <FaArrowLeft className='cursor-pointer' onClick={onBack} />
          <div className='mt-4 flex flex-col gap-5'>
                <div className='bg-slate-200 p-6 rounded-lg shadow'>
                  <h1 className='text-3xl' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>
                    1] Medicine Name: <span className='font-semibold' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>Crocine</span>
                  </h1>
                  <p className='text-xl' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>
                    <b>Quantity:</b>
                  </p>
                  <div className='text-xl' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>
                    <b>Timing:</b>
                      <p className='ml-4' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>
                        Before Lunch
                      </p>
                  </div>
                </div>
          </div>
        </div>
      );
      
}

export default ViewDocPrecription
