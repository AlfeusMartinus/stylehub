import React from 'react';
import { Button } from '.';
import Image from 'next/image';

const NFTItem = ({ data }) => {
  const { image, productNumber, price, product_name, productLink } = data;
  return (
    <div className='hover:bg-[#ffffff66] transition duration-300 ease-in-out bg-[#ffffff1a] p-5 rounded-lg shadow-lg'>
      <div className='rounded-lg overflow-hidden mb-3 relative w-full h-[400px] sm:h-[300px] lg:h-[400px]'>
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition={'center'}
          src={image}
          alt={product_name}
        />
      </div>
      <div className='flex flex-wrap justify-between items-center opacity-50 mb-2'>
        <p>Nomor [{productNumber}]</p>
        {/* <p>Rp</p> */}
      </div>
      <div className='flex flex-wrap justify-between items-center font-bold mb-5'>
        <p>{product_name}</p>
        {/* <p>{price} ETH</p> */}
      </div>
      <Button className='w-full' variant={'primary'} isLink={true} href={productLink} target="_blank">
        Beli🛒
      </Button>
    </div>
  );
};

export default NFTItem;
