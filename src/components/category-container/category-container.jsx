import './category-container.styles.css';

function CContainer({item}) {
    return (
        <div className = "category-container" >
            <div className='background-image' 
            style={{
                backgroundImage: `url(${item.imgUrl})`
            }} />
            <div className = "category-body-container">
                <p> {item.name} </p>
                <p> SHOP NOW </p>
            </div>
        </div>
    )
}

export default CContainer;