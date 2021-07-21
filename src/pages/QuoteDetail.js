import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
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
            <h1>Quote Detail Page</h1>
            <p>{params.quotesId}</p>
            <Route path={`/quotes/${params.quotesId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;