import React from 'react';
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import FAQSection from "../../widgets/FAQSection/index.jsx";

const Questions = () => {
    return (
        <div>
            <BaseTitle text={"ответы на вопросы"}/>
            <FAQSection slug={"question"}/>
        </div>
    );
};

export default Questions;