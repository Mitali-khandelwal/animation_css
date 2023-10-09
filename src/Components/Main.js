import React from "react";
import SoundOnHover from "./SoundOnHover";
import WaveText from "./WaveText";
import BoxAnimation from "../Direction/BoxAnimation";
import Box from "./Box";
import ButtonHover from "./ButtonHover";
import BorderHover from "./BorderHover";
import Loading from "./Loading";

const Main = () => {

    return(
        <div>
            {/* <Loading/> */}
<SoundOnHover/>
{/* <WaveText/> */}
<Box/>
<ButtonHover/>
<BorderHover/>
        </div>
    )


}
export default Main ;