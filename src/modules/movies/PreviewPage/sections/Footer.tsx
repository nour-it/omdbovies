import React from 'react'

function Footer() {
  return (
    <div className='container mx-auto p-4 flex flex-col items-center gap-[36px]'>
      <div className='flex items-center w-[240px] justify-between'>
        <div className="bg-[url('/icon/facebook.svg')] w-[24px] h-[27px]"></div>
        <div className="bg-[url('/icon/instagram.svg')] w-[24px] h-[27px]"></div>
        <div className="bg-[url('/icon/twitter.svg')] w-[24px] h-[24px]"></div>
        <div className="bg-[url('/icon/youtube.svg')] w-[24px] h-[21px]"></div>
      </div>
      <div className='flex gap-5'>
        <div>Condition of usage</div>
        <div>Privacy and policy</div>
        <div>Press room</div>
      </div>
      <div>
        © 2021 MovieBox by Adriana Eka Prayudha
      </div>
    </div>
  )
}

export default Footer
