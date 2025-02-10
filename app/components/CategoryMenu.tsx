import { getCategoryData } from '../lib/staticData';

function CategoryMenu() {

  
  const getCategories = () => {
    const categories = getCategoryData();
    return categories.map(({icon: Icon, label}) => {
      return (
        <article key={label} className='flex-center flex-col p-2 cursor-pointer'>
          <Icon size={24} strokeWidth={1.5} className='text-secondary' />
          <p className='text-xs text-secondary font-medium pt-1'>
            {label}
          </p>
        </article>
      );
    });
  };

  return (
    <section className='flex-center'>
      {getCategories()}
    </section>
  );
};

export default CategoryMenu;