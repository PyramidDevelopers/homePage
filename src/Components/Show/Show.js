import { useState } from "react";
import ShowBrief from "./ShowBrief";
import ShowDetailsPopUp from "./ShowDetailsPopUp/ShowDetailsPopUp";

const Show = () => {
    const [openDeatil, setOpenDetail] = useState(false);
    const [openKey, setOpenKey] = useState(0);

    const onOpen = (key) => {
        setOpenKey(key);
        setOpenDetail(true);
    };

    const onClose = () => {
        setOpenDetail(false);
    }

    return (
        <div className="show">
            <ShowBrief onOpen = {onOpen}/>
            {openDeatil && <ShowDetailsPopUp index={openKey} onClose={onClose}/>}
        </div>
    );
}

export default Show;