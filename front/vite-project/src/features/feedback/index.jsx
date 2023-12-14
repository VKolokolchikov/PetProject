import {React, useEffect, useState} from 'react';
import BaseTitle from "../../shared/ui/baseTitle/index.jsx";
import BaseSlider from "../../shared/ui/baseSlider/index.jsx";

import {useFetching} from "../../hooks/useFetching.js";
import CommentsService from "../../api/comments/index.jsx";

const Feedback = ({items=null, params}) => {
    const [comments, setComments] = useState(
        {section: 'feedback', count: 0, items: []}
    )

    if (items === null) {
        const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
            const response = await CommentsService.getAll(params);
            const newData ={
                count: response.data.count,
                items: response.data.results
            }
            setComments(prevState => ({...comments, ...newData}))
        })
        useEffect(() => {
            fetchPosts(params)
        }, []
        )
    }
    else {
        setComments(prevState => ({...comments, ...items}))
    }


    return (
        <div>
            {comments.count > 0
                ?
                <div>
                    <BaseTitle text={'Отзывы'}/> <BaseSlider items={comments.items}  section={"feedback"} />
                </div>
                : ''
            }
        </div>
    );
};

export default Feedback;