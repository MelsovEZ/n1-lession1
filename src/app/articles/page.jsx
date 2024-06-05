import Link from 'next/link';
import articlesData from '@/app/articles/[id]/data.json';

export default function Articles() {
    return (
        <div>
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
                    <div className='mt-5 text-center flex flex-col items-center space-y-5'>
                        {articlesData.map(article => (
                            <Link key={article.id} href={`/articles/${article.id}`}
                                  className="block bg-white shadow-md rounded-lg overflow-hidden w-[80%]">
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
                                    <p className="text-gray-700 mb-4">{article.description}</p>
                                    <a href={`/articles/${article.id}`} className="text-blue-600 hover:text-blue-800">Read
                                        more</a>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        /*<main>
            <div className='mt-5 md:min-w-[600px] text-center flex flex-col items-center space-y-5 md:space-x-5'>
                {articlesData.map(article => (
                    <Link key={article.id} href={`/articles/${article.id}`}
                          className="block bg-gray-100 p-4 rounded-md w-[80%]">
                            <h3 className="text-xl font-bold">{article.title}</h3>
                            <p>Author: {article.author}</p>
                    </Link>
                ))}
            </div>
        </main>*/
    );
}
