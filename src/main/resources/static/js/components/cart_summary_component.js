var Link = window.ReactRouter.Link;

var CartSummaryComponent = React.createClass({
  render: function() {
    return (
        <div>
          <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true">&nbsp;</span>
          5 items
        </div>
    );
  }
});

window.CartSummaryComponent = CartSummaryComponent;
