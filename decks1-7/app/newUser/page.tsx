import React from 'react'
import Link from 'next/link'

const newUserPage = () => {
    return(
        <>
        <h1>Enter your email: </h1>
        <Link href = "/newUser/givingID"> get ID</Link>
        </>
        

    )
}

export default newUserPage
