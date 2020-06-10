import React from "react";
import SeatTemplate from "./SeatTemplate";

class Seats extends React.Component {

    constructor() {
        super()
        this.state = {};
        for (let i = 1; i <= 9; i++) {
            this.state[i] = {
                className: 'player' + i,
                nickName: '',
                seatPosition: i,
                avatar: '',
                timer: false
            };
        }
        this.chooseSeat = this.chooseSeat.bind(this);
        this.finishTimer = this.finishTimer.bind(this);
    }

    componentDidMount() {

    }

    chooseSeat(data) {
        let userLogged = [];
        userLogged[data.seatPosition] = {
            id: 1,
            className: 'player' + data.seatPosition,
            nickName: 'jcantu',
            seatPosition: data.seatPosition,
            money: 4000,
            avatar: 'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-1/p320x320/23213196_10154807524710780_7998971241795080378_o.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_oc=AQmwm5XfrjF_maxeeVv1NLMW8AsErSTepSHHL0tDvcvbCJSfM8x4bLS-TaVrqsTTlek&_nc_ht=scontent-lax3-1.xx&_nc_tp=6&oh=8e0d7d6171cecadcf5da6f6a4cb7e93d&oe=5EFF02E1',
            blind: 'small|big|null',
            bet: 200,
            timer: true
        }
        this.setState(userLogged);
    }

    finishTimer(data){
        //this.state[data.seatPosition].timer = false;
        const next = data.seatPosition === 9 ? 1 : data.seatPosition + 1;
        const seat = this.state[next];
        seat.timer = true;
        this.setState(seat);
    }

    render() {
        return (
            <SeatTemplate data={this.state} chooseSeat={this.chooseSeat} finishTimer={this.finishTimer}/>
        )
    }
}

export default Seats
