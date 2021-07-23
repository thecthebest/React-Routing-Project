import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const Dummy_Quotes = [
    {id: 'q1', author: 'Sam', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Tom', text: 'Learning Ruby is fun!'},
    {id: 'q3', author: 'Mario', text: 'Learning JavaScript is fun!'},
];
function QuoteDetail() {
    const params = useParams();
    const quote = Dummy_Quotes.find((quote) => {
        return quote.id === params.quotesId;
    });
    if(!quote) {
        return <p>No quote found!</p>;
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quotesId}`} exact>
            <div className="centered">
                <Link className="btn--flat" to={`/quotes/${params.quotesId}/comments`} exact>Load Comments</Link>
            </div>
            </Route>
            
            <Route path={`/quotes/${params.quotesId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;