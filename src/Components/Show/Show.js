// import { useState } from "react";
import { useEffect } from 'react'; 
import ShowBrief from "./ShowBrief";
import ShowDetailsPopUp from "./ShowDetailsPopUp/ShowDetailsPopUp";
import "./Show.css"
import { scroller } from "react-scroll";
import {actionTypes} from '../../reducer'
import {useStateValue} from '../../StateProvider'

const Show = () => {
    // const [openDeatil, setOpenDetail] = useState(false);
    // const [openKey, setOpenKey] = useState(0);

    const [{openKey}, changeOpenKey] = useStateValue()
    const [{openDetail}, changeOpenDetail] = useStateValue()

    const onOpen = (key) => {
        // setOpenKey(key);
        // setOpenDetail(true);
        changeOpenKey({
            type: actionTypes.CHANGE_OPEN_KEY,
            key
        })

        scroller.scrollTo("showdetails", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -50, // Optional: Adjust this value to change the scroll position
        });

    };
    useEffect(() => {
        if (openDetail) {
            scroller.scrollTo("showdetails", {
                duration: 1000,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -50, // Optional: Adjust this value to change the scroll position
            });
        }
    }, [openKey, openDetail]);

    const onClose = () => {
        // setOpenDetail(false);
        changeOpenDetail({
            type: actionTypes.CHANGE_OPEN_DETAIL
        })
        scroller.scrollTo("show", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -50, // Optional: Adjust this value to change the scroll position
        });
    }

    return (
        <div className="show" id="show" name="show">
            <ShowBrief onOpen = {onOpen}/>
            <div className="detailedPopup">
            {openDetail && 
                <ShowDetailsPopUp index={openKey} onClose={onClose}/>
            }
            </div>
        </div>
    );
}

export default Show;