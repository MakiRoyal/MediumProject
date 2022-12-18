import { StoreContext } from '../Providers/Store';
import { useState, useEffect } from 'react';
import { useContext, } from 'react';
import ArticleCard from '../Components/ArticleCard';

export default function Home() {

    const { articles } = useContext(StoreContext);


    return (
        <div className='pt-10'>
            <h1 className="pb-5 text-2xl font-bold text-gray-900">Liste des Articles</h1>
            <div>
                {
                    articles.map((article, index) => {
                        return (
                            <ArticleCard article={article} />
                        )
                    })
                }
            </div>
            <div className={`flex`}>
                <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`}>Précédent</button>
                
                <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r`}>Suivant</button>
            </div>
        </div>


    )

}