import {React, useEffect, useState} from 'react';
import DisciplineList from "../../widgets/disciplineList/index.jsx";
import DisciplineItem from "../../widgets/disciplineItem/index.jsx";
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import {useFetching} from "../../hooks/useFetching.js";
import DisciplinesService from "../../api/disciplines/index.jsx";

const Disciplines = ({items=null}) => {
    const [disciplines, setDisciplines] = useState({items: []})
    if (items === null) {
        const [fetchPosts, isLoading, postError] = useFetching(async () => {
            const response = await DisciplinesService.getAll();
            const newData ={
                items: response.data.results
            }
            setDisciplines(prevState => ({...disciplines, ...newData}))
        })
        useEffect(() => {
            fetchPosts()
        }, []
        )
    }
    else {
        useEffect(() => {
            setDisciplines({items:items})
        })
    }
    return (
        <div id={"disciplines_"}>
            <BaseTitle text={"Направления"}/>
            <DisciplineList>
                {disciplines.items.map(discipline =>
                    <DisciplineItem
                        key={discipline.id}
                        id={discipline.id}
                        title={discipline.title}
                        img={discipline.image} />
                )}
            </DisciplineList>
        </div>
    );
};

export default Disciplines;