import React from "react";
import OrangeSVG from "../../images/icons/arrow-orange.svg";
import GreySVG from "../../images/icons/arrow-grey.svg";

interface IconProps {
    icon: boolean
}

const Icon: React.FC<IconProps> = ({icon}) => {
    return (
        <span>
            {icon
                ? <img src={OrangeSVG} alt="yes"/>
                : <img src={GreySVG} alt="no"/>}
        </span>
    )
}

export default Icon
