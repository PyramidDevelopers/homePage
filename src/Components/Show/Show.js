// import { useState } from "react";
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

        // scroller.scrollTo("show", {
        //     duration: 1000,
        //     delay: 0,
        //     smooth: "easeInOutQuart",
        // });
    };

    const onClose = () => {
        // setOpenDetail(false);
        changeOpenDetail({
            type: actionTypes.CHANGE_OPEN_DETAIL
        })
        // scroller.scrollTo("show", {
        //     duration: 800,
        //     delay: 0,
        //     smooth: "easeInOutQuart",
        // });
    }

    return (
        <div className="show">
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