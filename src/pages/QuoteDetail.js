import { Fragment } from "react";
import { useParams } from "react-router-dom";

function QuoteDetail() {
    const params = useParams();
    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            <p>{params.quotesId}</p>
        </Fragment>
    );
}

export default QuoteDetail;