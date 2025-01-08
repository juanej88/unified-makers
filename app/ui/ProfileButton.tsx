import { User } from 'lucide-react';

function ProfileButton() {
  return (
    <section className='flex-center justify-self-end'>
      <button className='primary-btn p-1'>
        <User size={28} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default ProfileButton;