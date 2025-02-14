import { getCategoryData } from '../lib/staticData';

function CategoryMenu() {
  const getCategories = () => {
    const categories = getCategoryData();
    return categories.map(({icon: Icon, label}) => {
      return (
        <button key={label} className='flex items-center px-2 pt-[6px] pb-1 cursor-pointer text-secondary primary-btn'>
          <Icon size={24} strokeWidth={1.5} />
          <p className='py-1 px-2'>
            {label}
          </p>
        </button>
      );
    });
  };

  return (
    <section className='modal justify-center'>
      <article className='menu flex flex-col'>
        {getCategories()}
      </article>
    </section>
  );
};

export default CategoryMenu;