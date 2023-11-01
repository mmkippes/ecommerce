const ItemListContainer = ({ greeting }) => {
    const style = {
        backgroundColor: 'lightblue',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        textAlign: 'center',
        fontSize: '20px',
    };

    return (
        <div style={style}>
            {greeting}
        </div>
    );
}

export default ItemListContainer;
