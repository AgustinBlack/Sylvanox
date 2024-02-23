import { useEffect, useState } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState([])

    useEffect(() => {
        asyncFunction()
            .then(data => {
                setData(data)
            })
    }, dependencies)

    return {
        data,
    }
}