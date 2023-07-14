import classes from './Controls.module.css'

function Controls({onStartFan, onStopFan, onInputSpeed}) {

    function enterKeyPressed(event) {
        if (event.keyCode === 13) {
           onInputSpeed(event);
        }
    }

    return (
        <div className={classes.controlbox}>
            {/* start and stop buttons */}
            <div className={classes.startstop}>
                <button className={classes.controlbtn} onClick={onStartFan}>START</button>
                <button className={classes.controlbtn} onClick={onStopFan}>STOP</button>
            </div>

            {/* input speed button */}
            <div>
                <h2 style={{fontFamily: 'Roboto Slab', marginBottom: "0", textAlign: "center"}}>Input Speed</h2>
                <p style={{textAlign: "center", opacity: "0.6", paddingTop: "10px", marginTop: "0"}}>[1 to 10]</p>
                <input type="text" placeholder='Enter the speed...' className={classes.speedip} onKeyDown={enterKeyPressed}/>
            </div>
        </div>
    )
}

export default Controls;