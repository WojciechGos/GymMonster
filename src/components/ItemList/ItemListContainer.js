import ItemList from "./ItemList"

const ItemListContainer = ({ addExcercise }) => {

    const props = {
        addExcercise: addExcercise
    }

    return <ItemList {...props}/>
}
export default ItemListContainer