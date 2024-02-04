import ItemList from "./ItemList"

const ItemListContainer = ({
    addExcercise,
    excercises,
    updateExcercise,
    deleteExcercise,
}) => {
    const props = {
        addExcercise: addExcercise,
        excercises: excercises,
        updateExcercise: updateExcercise,
        deleteExcercise: deleteExcercise,
    }

    return <ItemList {...props} />
}
export default ItemListContainer