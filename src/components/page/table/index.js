import React from "react";
import outterTexture from '../../../assets/images/table/outter-texture.png';
import texture from '../../../assets/images/table/texture.png';
import sitHereIcon from '../../../assets/images/table/sit-here.png';

var tableOutside = {
    width: 'calc(100vw * 0.65)',
    height: 'calc(100vw * 0.30)',
    backgroundColor: '#262626',
    backgroundImage: `url(${outterTexture})`,
    left: '50%',
    top: '50%',
    '-webkit-transform': 'translateX(-50%) translateY(-50%) rotate(-90deg)',
    transform: 'translateX(-50%) translateY(-50%)',
    borderRadius: 'calc(100vw * .12)',
    position: 'relative',
    border: '2px solid #333',
    '-webkit-box-shadow': '0px 10px 5px 0px rgba(0,0,0,0.41)',
    '-moz-box-shadow': '0px 10px 5px 0px rgba(0,0,0,0.41)',
    boxShadow: '0px 10px 5px 0px rgba(0,0,0,0.41)'
};

var table = {
    width: 'calc(100% - (100vw * .05) )',
    height: 'calc(100% - (100vw * .05) )',
    backgroundColor: '#35973E',
    backgroundImage: `url(${texture})`,
    left: '50%',
    top: '50%',
    '-webkit-transform': 'translateX(-50%) translateY(-50%)',
    transform: 'translateX(-50%) translateY(-50%)',
    borderRadius: 'calc(100vw * .10)',
    position: 'relative',
    border: 'calc(100vw * 0.0015) solid #888',
    '-moz-box-shadow': 'inset 0 0 10px #000000',
    '-webkit-box-shadow': 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000'
};

var tableInsideNeon = {
    width: 'calc(100% - (100vw * .05) )',
    height: 'calc(100% - (100vw * .05) )',
    left: '50%',
    top: '50%',
    '-webkit-transform': 'translateX(-50%) translateY(-50%)',
    transform: 'translateX(-50%) translateY(-50%)',
    borderRadius: 'calc(100vw * .08)',
    position: 'relative',
    border: 'calc(100vw * 0.003) solid #41B148',
}

var cardsPlace = {
    border:'calc(100vw * 0.003) solid #41B148',
    height:'20%',
    width:'30%',
    position:'absolute',
    borderRadius:'10px',
    padding:'10px',
    top:'50%',
    left:'50%',
    transform:'translateX(-50%) translateY(-50%)',
    boxSizing:'border-box'
}

var sitHere = {
    width: 'calc(100vw * 0.06)',
}

var player1 = {
    position:'absolute',
    top:'50%',
    left:'50%',
    marginTop: 'calc(100vw * .14 * -1)',
    marginLeft: 'calc(100vw * .16)',
    transform: 'translateX(-50%) translateY(-50%)',
}

var player2 = {
    position:'absolute',
    top:'50%',
    left:'50%',
    marginTop: 'calc(100vw * .08 * -1)',
    marginLeft: 'calc(100vw * .30)',
    transform: 'translateX(-50%) translateY(-50%)',
}

var player3 = {
    position:'absolute',
    top:'50%',
    left:'50%',
    marginTop: 'calc(100vw * .08 * 1)',
    marginLeft: 'calc(100vw * .30)',
    transform: 'translateX(-50%) translateY(-50%)',
}


var player4 = {
    position:'absolute',
    top:'50%',
    left:'50%',
    marginTop: 'calc(100vw * .14 * 1)',
    marginLeft: 'calc(100vw * .16)',
    transform: 'translateX(-50%) translateY(-50%)',
}

var player5 = {
    position:'absolute',
    top:'50%',
    left:'50%',
    marginTop: 'calc(100vw * .14 * 1)',
    marginLeft: '0',
    transform: 'translateX(-50%) translateY(-50%)',
}

var player6 = {
    position:'absolute',
    top:'50%',
    left:'50%',
    marginTop: 'calc(100vw * .14 * 1)',
    marginLeft: 'calc(100vw * -.16)',
    transform: 'translateX(-50%) translateY(-50%)',
}

export const Table = (props) => {

    return (
        <div style={tableOutside}>
            <div style={table}>
                <div style={tableInsideNeon}>
                    <div style={cardsPlace}>
                    </div>
                    <div style={player1}>
                        <img style={sitHere} src={sitHereIcon} />
                    </div>
                    <div style={player2}>
                        <img style={sitHere} src={sitHereIcon} />
                    </div>
                    <div style={player3}>
                        <img style={sitHere} src={sitHereIcon} />
                    </div>
                    <div style={player4}>
                        <img style={sitHere} src={sitHereIcon} />
                    </div>
                    <div style={player5}>
                        <img style={sitHere} src={sitHereIcon} />
                    </div>
                    <div style={player6}>
                        <img style={sitHere} src={sitHereIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}