import * as React from 'react';
import { scrollToTop, scrollToElementByID } from '../helpers/scrollToView';
import { useRef } from 'react';

import arrowUp from '../img/up.png';
import mail from '../img/mail.png';

export default function NavigationButtons() {
    let btnTopRef = useRef();
   
    window.onscroll = function () {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop>=400) btnTopRef.current.style.visibility = "visible"
        else btnTopRef.current.style.visibility = "hidden";

    };
    return (
        <div className='btn-fixed d-flex flex-column'>
            <button ref={btnTopRef} onClick={scrollToTop}>
                <img width={48} src={arrowUp} alt=""></img>
            </button>
            <button onClick={() => { scrollToElementByID('contact') }}>
                <img src={mail} alt=""></img>
            </button>
        </div>
    );
}