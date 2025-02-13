import { getCategoryData } from '../lib/staticData';

function CategoryMenu() {
  const getCategories = () => {
    const categories = getCategoryData();
    return categories.map(({icon: Icon, label}) => {
      return (
        <button key={label} className='flex-center flex-col flex-none w-max px-2 pt-[6px] pb-1 cursor-pointer text-secondary primary-btn'>
          <Icon size={24} strokeWidth={1.5} />
          <p className='text-xs font-medium pt-1'>
            {label}
          </p>
        </button>
      );
    });
  };

  return (
    <section className='flex w-full overflow-x-auto scrollbar-none bg-background shadow'>
      {getCategories()}
    </section>
  );
};

export default CategoryMenu;