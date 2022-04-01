import {Component} from "react"

import "./styles.scss"
class Attributes extends Component {
    render() {
      return (
        <div className="attributes">
        {this.props.attributes.map(attr => (
          <div id={attr.id} className={attr.id} key={attr.id}>
            <h3>{attr.name}:</h3>

            {(attr.id !== "Color")
            ?<ul>
                {attr.items.map(item => (
                  <button className="attr-button" key={item.id} value={item.value} onClick={this.props.setAttribute}>{item.value}</button>
                ))}
            </ul>
            :<ul>
                {attr.items.map(item => (
                <button className="attr-button" style={{backgroundColor: item.value}} key={item.id} value={item.value} onClick={this.props.setAttribute}></button>
                ))}
            </ul>}

          </div>
        ))}
      </div>
    );
    }
}

export default Attributes;