var ProductAdministrationComponent = window.ProductAdministrationComponent;

var ProductAdministrationContainer = React.createClass({

  getInitialState: function() {
    return {
      product: {}
    };
  },

  handleSaveClick: function(e) {
    e.preventDefault();

  },

  render: function() {
    return (
      <ProductAdministrationComponent
        product={this.state.product}
        onSaveClick={this.handleSaveClick}
      />
    );
  }
});

ProductAdministrationContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

window.ProductAdministrationContainer = ProductAdministrationContainer;
