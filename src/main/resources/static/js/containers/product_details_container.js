var ProductDetailsComponent = window.ProductDetailsComponent;
var EventEmitter = window.EventEmitter;

var ProductDetailsContainer = React.createClass({

  getInitialState: function() {
    return {
      product: {
        image: '',
        title: '',
        description: '',
        price: 0,
        quantity: 0,
      }
    };
  },

  componentDidMount: function() {
    var self = this;
    axios.get('/api/products/' + 1).then(function (response) {
      self.setState({ product: response.data });
    });
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
