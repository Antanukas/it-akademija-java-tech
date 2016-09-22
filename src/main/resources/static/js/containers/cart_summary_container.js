
var CartSummaryComponent = window.CartSummaryComponent;
var EventEmitter = window.EventEmitter;

var CartSummaryContainer = React.createClass({

  getInitialState: function() {
    return {
      itemCount: 0
    };
  },

  componentDidMount: function() {
    EventEmitter.subscribe(this, this.onAddToCartEvent, 'AddToCart');
  },

  componentWillUnmount: function() {
    EventEmitter.unsubscribe(this);
  },

  onAddToCartEvent: function() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
    console.log('cart event');
  },

  render: function() {
    return <CartSummaryComponent itemCount={this.state.itemCount} />;
  }
});

console.log(CartSummaryContainer);
window.CartSummaryContainer = CartSummaryContainer;
