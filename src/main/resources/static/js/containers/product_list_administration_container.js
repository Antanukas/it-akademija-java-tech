var ProductListAdministrationComponent = window.ProductListAdministrationComponent;

var ProductListAdministrationContainer = React.createClass({

  getInitialState: function() {
    return {
      products: [
        {
          id: 1,
          image: '/samsung.jpg',
          title: 'Random',
          description: 'desc',
          price: 2.5,
          isInStock: true
        },
        {
          id: 1,
          image: '/samsung.jpg',
          title: 'Random',
          description: 'desc',
          price: 2.5,
          isInStock: true
        },
        {
          id: 1,
          image: '/samsung.jpg',
          title: 'Random',
          description: 'desc',
          price: 2.5,
          isInStock: true
        }
      ]
    };
  },


  render: function() {
    return (
        <ProductListAdministrationComponent
          products={this.state.products}
        />
    );
  }
});

ProductListAdministrationComponent.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

window.ProductListAdministrationContainer = ProductListAdministrationContainer;
