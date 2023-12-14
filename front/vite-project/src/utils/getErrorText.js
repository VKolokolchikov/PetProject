import isEmpty from "./isEmtyChecker.js";
import React from "react";

function getErrorText(error, setError) {
    let base = 'Что-то пошло не так!'
    if (!isEmpty(error.data)) {
        Object.entries(error.data)?.map(([key, val] = entry) =>
                 base += `\nПоле ${key}: ${val[0]}`)
    }
    else {
        base += error.message
    }
    setError({})
    return base
}

export default getErrorText;