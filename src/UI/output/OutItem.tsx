import React from 'react';
import Icon from "./Icon";

interface OutItemProps {
    title: string
    iconActive?: boolean
    isActive?: boolean
    text?: string
}

const OutItem: React.FC<OutItemProps> = ({
                                             title,
                                             iconActive,
                                             isActive,
                                             text
                                         }) => {
    return (
        <>
            <span>{title}</span>
            <span>
            {iconActive
                ? <Icon icon={isActive ?? false}/>
                : text}
            </span>
        </>
    );
};

export default OutItem;
