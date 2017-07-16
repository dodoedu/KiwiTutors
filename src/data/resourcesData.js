import Example from "../data/PDF/Example.pdf";
import Example2 from "../data/PDF/Example2.pdf";
import Word1 from "../data/WORD/Word1.docx";
import Word2 from "../data/WORD/Word2.docx";


const resourcesData =[
    {
        course_id: "VIP1",
        name:'6月30日课件',
        date:'01/07/2017',
        person:'刚刚老师',
        resource_id: '1',
        sub_heading:'Topic 1',
        content: Example
    },
    {
        course_id: "VIP1",
        name:'7月2日课件',
        date:'02/07/2017',
        person:'助教老师',
        resource_id: '2',
        sub_heading:'Topic 1',
        content: Example2
    },
    {
        course_id: "VIP1",
        name:'WORD1',
        date:'03/07/2017',
        person:'刚刚老师',
        resource_id: '3',
        sub_heading:'Topic 2',
        content: Word1
    },
    {
        course_id: "VIP1",
        name:'WORD2',
        date:'04/07/2017',
        person:'刚刚老师',
        resource_id: '4',
        sub_heading:'Topic 3',
        content: Word2
    }
];

export default resourcesData;