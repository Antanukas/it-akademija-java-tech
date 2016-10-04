var ProductListContainer = React.createClass({

  getInitialState: function() {
    return {
      products: [
        {
          id: 1,
          image: '/samsung.jpg',
          title: 'Random',
          description: 'desc',
          price: 2.5,
        }
      ]
    };
  },

  componentDidMount: function() {
    var self = this;
    axios.get('/api/products').then(function (response) {
      self.setState({ products: response.data });
    });
  },
  
  handleDetailsClick: function(productId) {
    var self = this;
    return function() {
      self.context.router.push('/products/' + productId);
    };
  },

  render: function() {
    return (
      <ProductListComponent
        products={this.state.products}
        onDetailsClick={this.handleDetailsClick}
      />);
  }
});

ProductListContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

window.ProductListContainer = ProductListContainer;
