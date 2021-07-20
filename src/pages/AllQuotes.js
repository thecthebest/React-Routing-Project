import QuoteList from "../components/quotes/QuoteList";
const Dummy_Quotes = [
    {id: 'q1', author: 'Sam', text: 'Learning React is fun!'},
    {id: 'q2', author: 'Tom', text: 'Learning Ruby is fun!'},
    {id: 'q3', author: 'Mario', text: 'Learning JavaScript is fun!'},
];

function AllQuotes() {
    return (
        <QuoteList quotes={Dummy_Quotes}/>
    );
}

export default AllQuotes;
