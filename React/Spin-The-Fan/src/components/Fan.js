import classes from './Fan.module.css'
import blade from '../images/fanblade.png'
import stand from '../images/fanstand.png'

function Fan({spinning, enteredSpeed}) { 

    const speeds = {1:10, 2:7, 3:5, 4:3, 5:1, 6:0.8, 7:0.6, 8:0.5, 9:0.3, 10:0.01}

    return (
        <div className={classes.fan}>
            { spinning && 
                <img defaultValue={0} src={blade} alt="blade" className={classes.bladeSpinning} 
                    style={{animationDuration: `${speeds[enteredSpeed]}s`}} />
            }
            { !spinning && 
                <img src={blade} alt="blade" className={classes.bladeNotSpinning} />
            }
            <img src={stand} alt="stand" className={classes.stand} />
        </div>
    )
}

export default Fan;