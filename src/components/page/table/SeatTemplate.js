import React from 'react';
import './Seat.css';
import sitHereIcon from '../../../assets/images/table/sit-here.png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


class SeatTemplate extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const pos = [1,2,3,4,5,6,7,8,9];
        const data = this.props.data;
        const methods = this.props;
        return (
            <div class="player-container">
                {pos.map(function(i){
                    return <div onClick={() => methods.chooseSeat(data[i])} className={data[i].className}>
                        <div className="player">
                            {(() => {
                                if (data[i].avatar) {
                                    return <img className="avatar" src={data[i].avatar}/>
                                } else {
                                    return <img src={sitHereIcon}/>
                                }
                            })()}
                        </div>
                        <div className="player-name">{data[i].nickName}</div>
                        <div className="player-timer">
                            {(() => {
                                if (data[i].timer) {
                                    return <CountdownCircleTimer
                                        isPlaying
                                        size={130}
                                        strokeWidth={8}
                                        duration={3}
                                        onComplete={() => {
                                            // do your stuff here
                                            return methods.finishTimer(data[i]) // repeat animation in 1.5 seconds
                                        }}
                                        colors={[['#F7B801', 0.33], ['#F7B801', 0.33], ['#A30000']]}
                                    />
                                }
                            })()}
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

export default SeatTemplate
