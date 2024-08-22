import React from 'react';

interface DataProps {
    items: {
        title: string
        item: number | string
    }
}

const HeaderData: React.FC<DataProps> = ({items}) => {
const {title, item} = items
    return (
        <>
            <span>{title}</span>
            <span>{item}</span>
        </>
    )
};

export default HeaderData;
