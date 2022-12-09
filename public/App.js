const HelloWorld = React.createClass({
    getInitialState: function() {
        return { files: [] };
    },
  
    componentDidMount: function() {
        fetch('http://localhost:3000/files/data')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    },
  
    render: function() {
        console.log(this.state);
        return (
        <button onClick={this.handleClick}>
          Say hello
        </button>
      );
    }
});    
    
ReactDOM.render(    
    <HelloWorld/>,    
    document.getElementById('root')    
);