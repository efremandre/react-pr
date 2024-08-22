import React from 'react';
import './Output.css'
import {Header, HeaderDatesItems, HeaderItem, ItemType} from "../../types";
import HeaderData from "./HeaderData";
import OutItem from "./OutItem";

interface OutputProps {
    output: {
        header: Header
        items: Array<ItemType>
    }
}



const Output: React.FC<OutputProps> = ({output}) => {
    const {header, items} = output
    const renderHeaderItems = (items: HeaderItem | HeaderDatesItems) => (
        <div key={items.id} className="out-header__item-items">
            <HeaderData items={items}/>
        </div>
    )

    return (
        <div className='output output__wrapper'>
            <div className='output__out-header out-header'>
                <div className='out-header__item'>
                    {header.headerItem.map(renderHeaderItems)}
                </div>
                <div className='out-header__date'>
                    {header.headerDate.map(renderHeaderItems)}
                </div>
            </div>
            <div className='output__out-item out-item'>
                <ul className='out-item__list'>
                    {items.map(el =>
                        <li className={!el.iconActive ? 'out-item__item out-item__item_text' : 'out-item__item'}
                            key={el.id}>
                            <OutItem
                                title={el.title}
                                iconActive={el.iconActive}
                                isActive={el.isActive}
                                text={el.text}/>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Output;
