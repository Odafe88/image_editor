import React from 'react'
import './main.scss'

import Sidebar from '../sidebar/sidebar'
import Editor from '../img_holder/editor'

const Main = () => {
    return (
        <div className='main_cont'>
            <Sidebar />
            <Editor />
        </div>
    )
}

export default Main