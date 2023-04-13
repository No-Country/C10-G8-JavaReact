import React, { useState } from "react";
import DatePicker from 'react-datepicker';


const Calendario = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div className='absolute w-[658px] h-[511px] left-12 p-8 bg-[#D9D9D9] z-50 rounded-3xl ' >
            <div className='w-full flex flex-row h-1/5'>
                <div className='flex flex-col w-auto' >
                    <span>X noches</span>
                    <span>dd de m del aaaa - dd de m del aaaa</span>
                </div>
                <div className='flex flex-row w-9/12 border-2 border-black bg-white rounded-3xl' >
                    <div className='flex flex-row  border-r-2 border-black rounded-3xl w-1/2 justify-between'>
                        <div className='flex flex-col p-4 content-center'>
                            <span className='text-[#585858] font-semibold' >Check In</span>
                            <span className='text-[#B7B7B7]'>dd/mm/aaaa</span>
                        </div>
                        <button className='mr-2 my-auto px-2 uppercase font-semibold rounded-full border-2 border-black'>x</button>
                    </div>
                    <div className='flex flex-col p-4 content-center w-1/2'>
                        <span className='text-[#585858] font-semibold' >Check Out</span>
                        <span className='text-[#B7B7B7]'>dd/mm/aaaa</span>
                    </div>
                    <button className='mr-2 my-auto px-2 uppercase font-semibold rounded-full border-2 border-black'>x</button>
                </div>
            </div>
            <div className='h-4/5 flex flex-col justify-between ' >
                <div className="flex flex-row">
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                    />
                    
                </div>
                <div className='text-end space-x-3' >
                    <button>Borrar fechas</button>
                    <button>cerrar</button>
                </div>
            </div>
        </div>
    )
}

export default Calendario
