import { list_collection } from '@/fake_data';
import React, { useState } from 'react';
import { Button, Container, NFTItem } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInDownShorter2, fadeInLeft } from '@/keyframes';
const Collections = () => {
  const [listBtn, setListBtn] = useState([
    {
      name: 'Fashion',
      status: true,
      delay: 100,
    },
    {
      name: 'Kitchen',
      status: false,
      delay: 400,
    },
    {
      name: 'Parfum',
      status: false,
      delay: 700,
    },
    {
      name: 'Pattern',
      status: false,
      delay: 1000,
    },
  ]);

  const [filteredCollection, setFilteredCollection] = useState(list_collection.filter(item => item.category === 'Fashion'));


  const handleClickMenu = (name) => {
    const filterBtn = listBtn.map((item) => {
      return {
        ...item,
        status: item.name === name ? true : false,
      };
    });
    setListBtn(filterBtn);
    const filteredItems = list_collection.filter(item => item.category === name);
    setFilteredCollection(filteredItems);
  };

  return (
    <Container id='collections' className={'mb-44 scroll-mt-10'}>
      <div className='text-center mb-8'>
        <h2 className='font-bold text-3xl mb-2'>Koleksi Produk</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className='opacity-50 w-full sm:w-[400px] mx-auto'>
          Jangan lewatkan untuk penawaran terbaik minggu ini!.
          </p>
        </Reveal>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5'>
        {listBtn.map((item, i) => (
          <Reveal
            key={i}
            keyframes={fadeInLeft}
            duration={300}
            delay={item.delay}
          >
            <Button
              onClick={() => handleClickMenu(item.name)}
              variant={item.status ? 'primary' : ''}
              className='w-full transition duration-1000 ease-in-out'
            >
              {item.name}
            </Button>
          </Reveal>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {filteredCollection.map((item, i) => (
          <Reveal
            key={i}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={50 * (i + 1)}
          >
            <NFTItem data={item} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
};

export default Collections;
