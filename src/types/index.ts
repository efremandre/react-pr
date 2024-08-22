export interface HeaderItem {
    id: number
    title: string
    item: number | string
}

export interface HeaderDatesItems {
    id: number
    title: string
    item: string
}

export interface Header {
    headerItem: Array<HeaderItem>
    headerDate: Array<HeaderDatesItems>
}

export interface ItemType {
    id: number;
    title: string;
    iconActive?: boolean;
    isActive?: boolean;
    text?: string;
}

export interface OutputTypes {
    header: Header
    items: Array<ItemType>
}

export interface StateType {
    output: OutputTypes
}
