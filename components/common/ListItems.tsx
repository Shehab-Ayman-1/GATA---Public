type TListItems = {
    items: Record<string, any>[];
    Item: React.ElementType;
};

export const ListItems = ({ items, Item }: TListItems) => {
    return items.map(({ _id, ...item }, index) => <Item key={item._id} {...item} index={index} />);
};

ListItems.displayName = "ListItems";
