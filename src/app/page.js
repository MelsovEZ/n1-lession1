export default function Home() {
    return (
        <main className='flex flex-col items-center py-5 px-3'>
            <div
                className='mt-5 md:min-w-[600px] text-center flex flex-col items-center space-y-5 md:space-x-5'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='rounded-xl w-[800px]'
                     src="https://about.fb.com/wp-content/uploads/2024/02/Facebook-News-Update_US_AU_Header.jpg?fit=1920%2C1080"
                     alt=""/>
                <a href="/articles" className='text-3xl font-bold'>ЧИТАТЬ</a>
            </div>
        </main>
    );
}
