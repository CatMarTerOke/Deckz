import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const signedIn = () => {
    return(
        <>
        <Image src = '/images/DecksTopBlock.png' width= {1500} height={500} alt="topBlock"/>
        <h1> you are signed </h1>

        </>
    )
}

export default signedIn