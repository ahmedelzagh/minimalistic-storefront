import { Component } from "react";
import { NavLink} from "react-router-dom"

class Categories extends Component {

  render() {
    const categories = this.props.data.categories;

    return (
      <nav className="nav-categories">
        {categories.map((category) => (
          <NavLink key={category.name} to={`/category/${category.name}`} className={({isActive}) => (isActive ? 'active' : '')}>
            {category.name}
          </NavLink>
        ))}
      </nav>
    );
  }
}

export default Categories;
