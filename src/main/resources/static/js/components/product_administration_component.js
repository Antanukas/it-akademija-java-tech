var Router = window.ReactRouter;
var Link = Router.Link;

var ProductAdministrationComponent = React.createClass({
  render: function() {

    return (
      <div>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Image url</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input className="form-control" />
          </div>

          <button className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onSaveClick}>Save</button>
          <Link to="/admin/products" className="btn btn-default">Cancel</Link>
        </form>
      </div>);
  }
});

ProductAdministrationComponent.propTypes = {
  product: React.PropTypes.object.isRequired,
  onSaveClick: React.PropTypes.func.isRequired
};

window.ProductAdministrationComponent = ProductAdministrationComponent;
