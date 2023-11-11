import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching.js";
import DisciplinesService from "../api/disciplines/index.jsx";
import BaseHeader from "../shared/ui/baseHeader/index.jsx";
import HTMLContent from "../shared/ui/baseHTMLParserContent/index.jsx";
import Callback from "../features/callback/index.jsx";
import SubHeader from "../features/subHeader/index.jsx";
import BaseTitle from "../shared/ui/baseTitle/index.jsx";
import TeacherCardList from "../widgets/teacherCardList/index.jsx";
import TeacherService from "../api/teachers/index.jsx";
import BasePaginationSlider from "../shared/ui/basePaginationSlider/index.jsx";

const DisciplinePage = () => {
    const params = useParams();
    const [disciplineData, setDisciplineData] = useState({})
    const {id}  = params;


      const [fetchDiscipline, isPostsLoading, postError] = useFetching(async () => {
            const response = await DisciplinesService.getById(id);
            setDisciplineData(prevState => ({...response.data}))
        })
        useEffect(() => {
            fetchDiscipline()
        }, []
        )

    return (
        <div>
            {disciplineData
            && <div>
                    <SubHeader data={{
                        title: disciplineData.title,
                        quote: disciplineData.quote,
                        author: disciplineData.author,
                        img: disciplineData.logo,
                    }
                    } />
                    <div className={'main-content'}>
                        <BaseTitle text={'О направлении'}/>
                        <HTMLContent content={disciplineData.content} />
                    </div>
                </div>
            }
            <div className={'main-content'}>
                <BaseTitle text={"Преподаватели направления"}/>
                <BasePaginationSlider section={'teachers'} service={TeacherService} query_params={{discipline_id:id}}/>
                <Callback />
            </div>
        </div>
    );
};

export default DisciplinePage;