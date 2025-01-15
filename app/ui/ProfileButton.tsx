import { User } from 'lucide-react';
import { menu } from '@/app/lib/definitions';

function ProfileButton({ toggleMenu }: { toggleMenu: (menu: menu) => void }) {  
  return (
    <section className='flex-center justify-self-end'>
      <button onClick={() => toggleMenu('profile')} className='flex-center primary-btn p-1 text-secondary'>
        <User size={28} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default ProfileButton;