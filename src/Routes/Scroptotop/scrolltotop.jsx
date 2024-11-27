import { Fragment, useEffect, useState} from 'react';
import { IoIosArrowDropup } from "react-icons/io";
import './Scrolltotop.css';

export default function Scrolltotop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = ()=> {
        if (window.scrollY > 50) {
            setIsVisible(true);
        }else {
            setIsVisible(false)
        }
    };

    const Scrolltotop = ()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

  return (
    <Fragment>
        {
            isVisible && (
                <div className='scroll-to-top' onClick={Scrolltotop}>
                    <IoIosArrowDropup  className='scroll-icon'/>
                </div>
            )
        }

      
    </Fragment>
  )
}
