import teacherImg from '../assets/teacher.png'
import disciplineImg from "../assets/discipline.png";
import contactsImg from "../assets/contacts.png";
import onlineImg from "../assets/onlineformat.png"
import vacanciesImg from "../assets/vacancies.png"


const HeadersConst = {
    teachers: {
        title: 'Наши преподаватели',
        quote: 'Как важен, велик и священен сан воспитателя: \n' +
            'в его руках участь целой жизни человека...',
        author: 'Виссарион Григорьевич Белинский\n',
        img: teacherImg,
    },
    disciplines: {
        title: 'Дисциплины центра',
        quote: 'Учение — только свет, по народной пословице, — оно также и свобода. Ничто так не освобождает человека, как знание',
        author: 'Иван Сергеевич Тургенев',
        img: disciplineImg,
    },
    contacts: {
        title: 'Контактные данные центра',
        img: contactsImg,
    },
    vacancies: {
        title: 'Вакансии',
        quote: 'Найдите работу, в которую влюбитесь, и вам больше не придётся трудиться ни одного дня в жизни.',
        author: 'Конфуций',
        img: vacanciesImg,
    },
    online: {
        title: 'Онлайн обучение',
        quote: 'Если дети могут быть очень увлечены видеоиграми, у них есть способ быть очень увлеченными и образованием',
        author: 'Илон Маск',
        img: onlineImg,
    }
}

export default HeadersConst;