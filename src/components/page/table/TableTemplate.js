import React from 'react';
import './Table.css';
import Seats from "./Seats";

function TableTemplate() {
    return (
        <div class="tableOutside">
            <div class="table">
                <div className="tableInsideNeon">
                    <div className="cardsPlace"></div>
                    <Seats/>
                </div>
            </div>
        </div>
    )
}

export default TableTemplate
