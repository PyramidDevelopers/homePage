import { useState } from "react";
import ShowBrief from "./ShowBrief";
import ShowDetailsPopUp from "./ShowDetailsPopUp/ShowDetailsPopUp";
import "./Show.css"
import { scroller } from "react-scroll";

const Show = () => {
    const [openDeatil, setOpenDetail] = useState(false);
    const [openKey, setOpenKey] = useState(0);

    const onOpen = (key) => {
        setOpenKey(key);
        setOpenDetail(true);
        scroller.scrollTo("detailedPopup", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    const onClose = () => {
        setOpenDetail(false);
    }

    return (
        <div className="show">
            <ShowBrief onOpen = {onOpen}/>
            <div className="detailedPopup">
            {openDeatil && 
                <ShowDetailsPopUp index={openKey} onClose={onClose}/>
            }
            </div>
        </div>
    );
}

export default Show;