 
const CategoryBox = ({label, icon: Icon}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500'>
            <Icon size={24}></Icon>
            <div className='text-sm'>{label}</div>
        </div>
    );
};

export default CategoryBox;