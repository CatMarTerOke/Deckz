import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const oldUserPage = () => {
    return(
        <>
        <Image src = '/images/DecksTopBlock.png' width= {1500} height={500} alt="topBlock"/>
        <Link href="/oldUser/SignedIn" > sign in</Link>

        </>
    )
}

export default oldUserPage