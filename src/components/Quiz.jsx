import React, { useState } from 'react';
import { Data } from "../components/Data";

const Quiz = () => {
    const [data, setData] = useState(Data);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);

    const next = () => {
        if (index < data.length - 1) {
            setIndex(index + 1)
            const checked = document.querySelectorAll(".checkValue");
            checked.forEach((curVal) => {
                curVal.checked = false
            })
        } else {
          document.querySelector('.score').innerHTML=`Your Score : 6/${score}`
        }

    }

    console.log(data)



    const handleInput = (event) => {
        let chooseValue = event.target.value;
        console.log(chooseValue);
        if (chooseValue === data[index].ans) {
            setScore(score + 1)

        }

    }
    console.log(score)

    return (
        <div className='bg-[#fef2f2] h-[100vh] flex justify-center'>
            <div className=' shadow-lg shadow-cyan-500/50  bg bg-white dark:bg-slate-800 rounded-lg px-6 py-8 h-[450px] mt-14 w-[340px]
              hover:scale-105 duration-500
            '>

                <h1 className='pb-5 text-4xl font-bold text-center'>Quiz App</h1>
                <div className='text-2xl font-medium text-red-600'>
                    <h1>Q : {data[index].q}</h1>
                </div>
                <div className='font-sans text-lg pt-7'>
                    <div>
                        <h1 >  <input type="radio" name='selact' onChange={handleInput} value={data[index].a} className='checkValue' />A :  {data[index].a}</h1>
                    </div>
                    <div className='pt-2'>
                        <h1>  <input type="radio" name='selact' onChange={handleInput} value={data[index].b} className='checkValue' />B :  {data[index].b}</h1>
                    </div>
                    <div className='pt-2'>
                        <h1>  <input type="radio" name='selact' onChange={handleInput} value={data[index].c} className='checkValue' />C :  {data[index].c}</h1>
                    </div>
                    <div className='pt-2'>
                        <h1>  <input type="radio" name='selact' onChange={handleInput} value={data[index].d} className='checkValue' />D : {data[index].d}</h1>
                    </div>
                </div>
                <div className='flex justify-center pt-4'>
                    <button onClick={next}
                        className='px-4 py-1 text-lg text-white bg-blue-500 border-none rounded hover:bg-blue-700'>Next</button>
                </div>
                <h1 className='pt-2 text-2xl text-center score'></h1>
            </div>
        </div>
    )
}

export default Quiz