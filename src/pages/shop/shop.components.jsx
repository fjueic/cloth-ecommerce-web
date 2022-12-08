import React from "react";
import SHOP_DATA from "./shop.data.js";
import PreviewCollection from "../../components/perview-collection/preview-collection.component";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...rest }) => (
          <PreviewCollection key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
