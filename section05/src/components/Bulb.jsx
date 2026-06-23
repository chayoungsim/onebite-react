import { useState } from "react";

const Bulb = () => {

    const [light, setLight] = useState("off")

    return(
        <div>
            <div>{light === "on" ?(<h1 style={{backgroundColor:"orange"}}>ON</h1>) :(<h1 style={{backgroundColor:"gray"}}>OFF</h1>)}</div>
            <button onClick={() => setLight(light === "on" ? "off" : "on")}>
                {light==="on" ?"끄기" : "켜기"}
            </button>
        </div>
    )
}

export default Bulb;