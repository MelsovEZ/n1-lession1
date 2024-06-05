import Link from 'next/link';
import articlesData from './[id]/data.json';

export function generateStaticParams() {
    return articlesData.map(article => ({
        params: { id: article.id.toString() }
    }));
}

export default function Articles() {
    return (
        <div>
            <section className="py-5">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
                    <div className='mt-5 text-center flex flex-col items-center space-y-5'>
                        {articlesData.map(article => (
                            <div key={article.id} className="block bg-white shadow-md rounded-lg overflow-hidden w-[80%]">
                                <Link href={`/articles/${article.id}`}>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
                                        <p className="text-gray-700 mb-4">{article.description}</p>
                                        <p className="text-blue-600 hover:text-blue-800">Read more</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
