import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='border-b-2 py-2 px-2 border-b-neutral-400 flex justify-between items-center'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/X_logo_2023_original.svg/2048px-X_logo_2023_original.svg.png"
                alt="img" className='w-auto h-20'/>

            <div
                className='flex justify-center w-full md:w-auto md:justify-end space-x-2 text-xl py-6 md:px-6'>
                <Link href="/" className='px-6'>
                    Главная
                </Link>
                <Link href="/articles" className='px-6'>
                    Статьи
                </Link>
            </div>
        </div>
)
}

export default Navbar;
