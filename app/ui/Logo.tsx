import Image from 'next/image';

function Logo() {
  return (
    <section className='flex items-center'>
      <Image src='/logo-2x.png' width={36} height={18} alt='Logo' />
      <p className='text-xl pl-3 font-medium'>
        <span className='font-normal opacity-70'>unified</span>makers
      </p>
    </section>
  );
};

export default Logo;