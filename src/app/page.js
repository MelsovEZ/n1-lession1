import Link from "next/link";

export default function Home() {
    return (
        <main className='flex flex-col items-center py-5 px-3'>
            <div
                className='md:min-w-[600px] text-center flex flex-col items-center space-b-5 md:space-x-5'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='rounded-xl w-[700px]'
                     src="https://about.fb.com/wp-content/uploads/2024/02/Facebook-News-Update_US_AU_Header.jpg?fit=1920%2C1080"
                     alt=""/>
                <Link href="/articles" className='text-2xl font-bold mt-5'>ЧИТАТЬ</Link>
            </div>
        </main>
    );
}
