import React, { Component } from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
import { observer } from "mobx-react";
@observer
class ProductTable extends Component {
  checkProducts = () => {
    const rows = [];
    var category = "";
    this.props.filteredProducts.forEach(element => {
      if (element.category !== category) {
        rows.push(<ProductCategoryRow categoryName={element} />);
      }
      rows.push(<ProductRow product={element} />);
      category = element.category;
    });

    return rows;
  };
  render() {
    return (
      <div>
        <tr>
          <td>
            <b>Name</b>
          </td>
          <td>
            <b>Price</b>
          </td>
        </tr>
        {this.checkProducts()}
      </div>
    );
  }
}
export default ProductTable;
