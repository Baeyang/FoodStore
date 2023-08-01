function ListRelatedProduct(props){
    const {item} = props
    console.log(item.id)
    return(
        <>
        <div  className = 'RelatedProduct' key={item.index}>
            <a href = {`/product/${item.id}`} > 
                <div className="RelatedProduct__image">
                    <img src={item.thumbnail} alt='img'></img>
                </div>
                <div className="Product__title">
                    {item.title}
                </div>
            </a>
        </div>
        </>
    )
}

export default ListRelatedProduct