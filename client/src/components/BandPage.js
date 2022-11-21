import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BandPage = () => {

    const {id} = useParams();
    const [band, setBand] = useState({})

    useEffect(() => {
        fetch(`/bands/${id}`)
        .then((res) => res.json())
        .then(data => {setBand(data)})
    }, [id])

    return (
        <div>
            <h1>{band.name}</h1>
        </div>
    )
}

export default BandPage;