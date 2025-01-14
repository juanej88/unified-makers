import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <section className='flex items-center'>
      <Link href='/' className='flex-center h-9'>
        <Image src='/logo-2x.png' width={36} height={18} alt='Logo' />
        <p className='text-xl pl-3 font-medium hidden md:block'>
          <span className='font-normal opacity-70'>unified</span>makers
        </p>
      </Link>
    </section>
  );
};

export default Logo;