import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const Dummy_Quotes = [
    {id: 'q1', author: 'Sam', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Tom', text: 'Learning Ruby is fun!'},
    {id: 'q3', author: 'Mario', text: 'Learning JavaScript is fun!'},
];
function QuoteDetail() {
    const quote = Dummy_Quotes.find((quote) => {
        return quote.id === params.quotesId;
    });
    const params = useParams();
    return (
        <Fragment>
            <HighlightedQuote text={quote.props} author={quote.props} />
            <Route path={`/quotes/${params.quotesId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;