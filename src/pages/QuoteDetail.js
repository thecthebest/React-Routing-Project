import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

function QuoteDetail() {
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