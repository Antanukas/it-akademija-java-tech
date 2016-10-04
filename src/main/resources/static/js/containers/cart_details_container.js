
var CartDetailsComponent = window.CartDetailsComponent;

var CartDetailsContainer = React.createClass({

  getInitialState: function() {
    return {
      items: [
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


  handleItemRemove: function(item) {
    return function() {
      console.log('remove', item);
    };
  },
  render: function() {
    return <CartDetailsComponent items={this.state.items} onItemRemove={this.handleItemRemove} />;
  }
});

window.CartDetailsContainer = CartDetailsContainer;
