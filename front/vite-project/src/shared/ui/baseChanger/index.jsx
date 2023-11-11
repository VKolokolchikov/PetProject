import React, {useEffect, useState} from 'react';

import './style.scss'


const BaseChanger = ({section, number, page, setPage}) => {

    const [oldPage, setOldPage] = useState(page)

    useEffect(() => {

        const oldNumber = document.getElementById(`${section}_${oldPage}`)
        oldNumber.classList.remove('prime-bg')

        const newNumber = document.getElementById(`${section}_${page}`)
        newNumber.classList.add('prime-bg')
    }, [page])

    function handler(e) {
        e.preventDefault()
        const next = e.target.getAttribute('data-number')
        setOldPage(page)
        setPage(next)
    }
    let changerClasses = ["changer"]

    if (number === page) {
        changerClasses.push("prime-bg")
    }
    return (
        <div
            id={`${section}_${number}`}
            onClick={handler}
            className={changerClasses.join(' ')}
            data-number={number}
        >
        </div>
    );
};

export default BaseChanger;