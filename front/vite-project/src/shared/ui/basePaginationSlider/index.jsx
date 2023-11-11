import React from 'react';
import {useEffect, useState}  from 'react';

import {useFetching} from "../../../hooks/useFetching.js";
import BaseChanger from "../baseChanger/index.jsx";
import TeacherCardList from "../../../widgets/teacherCardList/index.jsx";

import "../baseSlider/style.scss"
import Loader from "../../../widgets/Loader/index.jsx";


const PaginationSlider = ({section, service, query_params}) => {
    query_params = query_params ? query_params : {}
    const [page, setPage] = useState(1);
    const [items, setItems ] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    
    const pickSection = {
        teachers: TeacherCardList,
    }
    let params = {
        page: page,
        ...query_params
    }

    const [fetchPosts, isLoading, isError] = useFetching(async () => {
        const response = await service.getAll(params);
        setTotalPages(response.data.totalPages)
        setItems(prevState => (response.data.results))
})
    useEffect(() => {
        fetchPosts(params)
    },[page]
    )
    return (
        <div>
            {items.length > 0
                ? <div>
                    {React.createElement(pickSection[section], {items:items})}
                    <div className="changer-block">
                        {totalPages > 1
                        &&[...Array(totalPages).keys()].map((x, i) =>
                        <BaseChanger key={i} setPage={setPage} page={page} section={section} number={i+1}/>
                    )}
                    </div>
                </div>
                : <Loader />
            }
        </div>
    );
};

export default PaginationSlider;