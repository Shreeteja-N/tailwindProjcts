import React from 'react'

function RevenueCard({tittle,amount,orderCount}) {
  return (
    <div className='bg-sky-200 rounded shadow-md p-4'>
      
      <div className='text-gray-700'> 
        {tittle}
        ?
      </div>
      <div className='flex justify-between'>
      <div className='bold'>
        $ {amount}
      </div>
      {orderCount? <div className='flex cursor-pointer' ><div className='text-blue-500  underline font-medium'>{orderCount} order(s)</div><div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</div>

      </div>:null}
    </div>
    </div>
  )
}

export default RevenueCard
