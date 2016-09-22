var ProductDetailsComponent = window.ProductDetailsComponent;
var EventEmitter = window.EventEmitter;

var ProductDetailsContainer = React.createClass({

  getInitialState: function() {
    return {
      product: {
        id: 1,
        image: '/samsung.jpg',
        title: 'Random',
        description: 'desc',
        price: 2.5,
        isInStock: true
      }
    };
  },



  handleAddToCart: function() {
    EventEmitter.publish({ eventType: 'AddToCart' });
  },

  handleBack: function() {
    this.context.router.push('/home');
  },

  render: function() {
    return (
        <ProductDetailsComponent
          product={this.state.product}
          onAddToCart={this.handleAddToCart}
          onBack={this.handleBack}
        />
    );
  }
});

ProductDetailsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

window.ProductDetailsContainer = ProductDetailsContainer;
