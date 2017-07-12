const App = () => (
  <div>	
    <h2>Groceries</h2>
    <GroceryList groceries={['Cucumbers', 'Kale', 'Jam']}/>
  </div>
);

const GroceryList = (props) => {
  return (
    <ul>
      {props.groceries.map(grocery => <GroceryListItem name={grocery}/>)}
    </ul>  
  );
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done:false,
      hover:false
    };
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} 
        onClick={this.onGroceryListItemClick.bind(this)}
        onMouseOver={this.onGroceryListItemMouseOverOrOut.bind(this)} 
        onMouseOut ={this.onGroceryListItemMouseOverOrOut.bind(this)}
      >{this.props.name}</li>
    );
  }

  onGroceryListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onGroceryListItemMouseOverOrOut() {
    this.setState({
      hover: !this.state.hover
    });
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
