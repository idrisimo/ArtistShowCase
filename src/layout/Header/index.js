import React, {useState} from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {

    return (
        <nav>
            {/* <Link to='/'>home</Link>
            <Link to='News'>News</Link>
            <Link to='About'>About</Link> */}
            <a href='#'>Home</a>
            <a href='#'>Artist</a>
            <a href='#'>About</a>
        </nav>
        
    )
}
