import React from 'react'
import { useState } from 'react'

export default function App() {

  const[color ,setColor] = useState('olive')
 
  return (
    <>
     <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 px-2 insert-x-0'>
          <div className='flex flex-warp justify-center shadow-lg bg-white  mr-3  px-3 py-2 rounded-2xl'>
          <button
          onClick={()=>setColor('red')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:'red'}}
          >red</button>
          <button
           onClick={()=>setColor('blue')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:'blue'}}
          >blue</button>
          <button
           onClick={()=>setColor('green')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:'green'}}
          >gren</button>
          <button
           onClick={()=>setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:'yellow'}}
          >yellow</button>
          <button
           onClick={()=>setColor('orange')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:'orange'}}
          >orange</button>
            <button
           onClick={()=>setColor('grey')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:'grey'}}
          >grey</button>

          </div>
        </div>
     </div>
    </>
  )
}
