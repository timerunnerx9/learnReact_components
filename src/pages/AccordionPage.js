import Accordion from '../components/Accordion';

function AccordionPage() {

    const items = [
        {
            id:"1",
            label: "test 1",
            content:"test1."
        },
        {
            id:"2",
            label: "test 2",
            content:"test2."
        },
        {
            id:"3",
            label: "test 3",
            content:"test3."
        }
    ];

    return <Accordion items={items}/>
}

export default AccordionPage;