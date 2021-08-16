import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

// Initializing a client to return data from Shopify's storefront API
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
});

//! Using Provider Context Pattern
class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }

  // Create an empty checkout
  createCheckout = async () => {
    console.log("client", client);

    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout });

    console.log("inside createCheckout method:", checkout);
  };

  fetchCheckout = async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId);
    this.setState({ checkout });
  };

  addItemToCheckout = async () => {};

  removeLineItem = async (lineItemIdsToRemove) => {};

  // Fetch all products in shop
  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products });
  };

  // Fetch product with handle
  fetchProductWithHandle = async (handle) => {
    const product = client.product.fetchByHandle(handle);
    this.setState({ product });
  };

  closeCart = () => {};
  openCart = () => {};
  closeMenu = () => {};
  openMenu = () => {};

  render() {
    console.log("checkout", this.state.checkout);
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
