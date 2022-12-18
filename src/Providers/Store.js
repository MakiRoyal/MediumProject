import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext()

export function StoreProvider(props) {

    const [articles, setArticles] = useState([])
    const [pageArray, setPageArray] = useState([])
    const [numberPage, setNumberPage] = useState(0)
    const [maxArticle, setMaxArticle] = useState(0)
    const [offset, setOffset] = useState(0)


    function getAllArticles() {
        fetch('http://edu.project.etherial.fr/articles?offset=' + offset).then((res) => {
            res.json().then((json) => {
                if (json.data) {
                    setArticles(json.data);
                    setMaxArticle(json.count);
                    setNumberPage(Math.ceil(json.count / 10))
                }
            });
        });
    }

    useEffect(() => {

        getAllArticles();

    }, [])

    useEffect(() => {

        getAllArticles();

    }, [offset])



    return (
        <StoreContext.Provider value={{
            articles: articles,
            setArticles: setArticles,
            pageArray: pageArray,
            setPageArray: setPageArray,
            numberPage: numberPage,
            setNumberPage: setNumberPage,
            maxArticle: maxArticle,
            setMaxArticle: setMaxArticle,
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}