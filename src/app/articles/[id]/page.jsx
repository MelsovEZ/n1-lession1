import articles from './data.json';

export default function Articles({ params }) {
    // Destructuring the 'params' object to get the 'id'
    const { id } = params;

    // Find the article with the matching 'id'
    const article = articles.find(article => article.id === parseInt(id, 10));

    // If the article is not found, display a message
    if (!article) {
        return <div>Article not found</div>;
    }

    // JSX structure for displaying the article content
    return (
        <main className="bg-white shadow-md rounded-lg overflow-hidden max-w-[90%] w-full p-8 my-3 mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">{article.title}</h1>
            <div className="prose max-w-none p-3">
                {/* Article Description */}
                <p className='mb-5'>{article.description}</p>
                {/* Additional content */}
                <p className='mb-5'>Blah-blah-blah! Blah-blah-blah! Blah-blah-blah! Blah-blah-blah!</p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit
                    amet neque non est luctus tincidunt. Curabitur at pharetra justo. Nam volutpat urna non risus
                    lobortis, sit amet scelerisque ex facilisis.</p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Subheading</h2>
                <p>Suspendisse potenti. Sed quis felis vitae ligula ultrices consectetur. Aliquam erat volutpat. Nam
                    vehicula velit nec turpis tempor, nec efficitur purus fringilla. Cras mollis dui sit amet eros
                    ultrices, sit amet volutpat lorem condimentum.</p>
                <ul className="list-disc pl-5">
                    <li>Point one</li>
                    <li>Point two</li>
                    <li>Point three</li>
                </ul>
                <p>Donec finibus, magna sit amet tincidunt vulputate, lorem velit ullamcorper mi, sit amet euismod metus
                    lacus id quam. Nullam vitae purus nec justo pharetra luctus at et dolor. Curabitur hendrerit velit
                    vitae erat bibendum malesuada.</p>
            </div>
            {/* Displaying article date and author */}
            <div className='flex flex-wrap justify-end'>
                <b className='mx-3'>{article.date}</b>
                <b className='mx-3'>{article.author}</b>
            </div>
        </main>
    );
}
