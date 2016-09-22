var NavigationComponent = window.NavigationComponent;

var App = React.createClass({
  render: function() {
    return (
      <div style={{ paddingTop: '20px' }}>
        <NavigationComponent />
        {this.props.children}
      </div>
    );
  }
});

var Admin = React.createClass({
  render: function() {
    return <div>{this.props.children}</div>;
  }
});
var NoMatch = React.createClass({
  render: function() {
    return <div>NoMatch haha</div>;
  }
});



var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var IndexRoute = window.ReactRouter.IndexRoute;
var hashHistory = window.ReactRouter.hashHistory;

var HomePage = window.HomePage;
var ProductListAdministrationPage = window.ProductListAdministrationPage;
var ProductAdministrationPage = window.ProductAdministrationPage;
var CartDetailsPage = window.CartDetailsPage;
var ProductDetailsContainer = window.ProductDetailsContainer;

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/cart-details" component={CartDetailsPage} />
      <Route path="/products/:id" component={ProductDetailsContainer} />
      <Route path="/admin" component={Admin}>
        <IndexRoute component={ProductListAdministrationPage} />
        <Route path="/admin/products" component={ProductListAdministrationPage} />
        <Route path="/admin/products/:id" component={ProductAdministrationPage} />
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'));
