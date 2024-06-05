import Link from 'next/link';

const Footer = () => {
    return (
        <div className='border-t-2 py-2 px-2 border-b-neutral-400 flex items-center'>
            <div className='flex justify-end ml-auto space-x-2 text-xl py-6 md:px-6'>
                <Link className='px-6' href="https://github.com/MelsovEZ">Мой гитхаб</Link>
                <Link className='px-6' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Раздача денег</Link>
            </div>
        </div>
    );
}

export default Footer;