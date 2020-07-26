import React from 'react'
import '../css/main.css'
import {useState} from 'react'

function AboutMe() {
    const [images,setImages] = useState('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png');
    return(
        <div>
            <div className='cont_about_me'>
                <div id='Author'>
                    <h2>Hello,my nickname merzkiy_programmist</h2>
                    <div id='Author_info'>Это тестовый проект, на котором я тренируюсь в разработке ReactJS/Redux,мой скилл ещё небольшой, но он есть.Для работодателей я всегда открыт для work за хоть какие-то money</div>
                    <div id='Author_Link'>
                        LINK:
                        <br />
                    <a href="https://github.com/nasty666programmer?tab=repositories"><img src={images} height="50px" width="50px"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;