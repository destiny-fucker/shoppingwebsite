import CContainer from "../category-container/category-container";
import "./directory.styles.css";



function Directory({items}) {
    return (
        <div className = "categories">
        {
          items.map((item) => (
           <CContainer item = {item} key = {item.id} />
          ))
        }
      </div>
    )
}

export default Directory;