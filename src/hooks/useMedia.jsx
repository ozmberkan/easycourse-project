import React from 'react'
import { useEffect, useState } from 'react'

export default function use_media( width = 600 ) {

    const [status, setStatus] = useState(window.matchMedia(`max-width: ${width}px`).matches);

    useEffect(() => {
        const matchMedia = window.matchMedia(`(max-width: ${width}px)`);


        const onChangeHandle = e => {
            setStatus(e.matches)
        }

        matchMedia.addEventListener('change', onChangeHandle)
    })

    return status
}
