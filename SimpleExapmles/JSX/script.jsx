var style = {color:'grey'};
var styleForHeading = {color:'skyblue'};

var Header = React.createClass({
    render : function () {
            return(
                <div>
                    <h1>{ this.props.propsForPageTitle }</h1>
                    <h2>This is the header Component</h2>
                </div>
                
            );
        }
    });
var Footer = React.createClass({
    getInitialState:function(){
        return{
            user:"TOPS User",
            rank : '1'
        }
    },
    render : function () {
        setTimeout(()=>{this.setState({ user:'Jay Amin',rank:'1st'})},3000);
            return(
                <div>
                    <p>user is : {this.state.user}</p>
                    <p>Rank is : {this.state.rank}</p>
                    <h2>This is the Footer Component</h2>
                </div>
                
            );
        }
    });
var MyComponent = React.createClass({
    render : function () {
        return(
        <div>
            <Header propsForPageTitle = 'AboutUs'/>
            
            <h1 style={style}>Hello world</h1>
            <h2 style={styleForHeading}>TOPS Technologies</h2>
            <h2 style={styleForHeading}>Sum of 2 + 2 is : {2+2}</h2>
            <Footer/>
        </div>
        ) 
    }
});

ReactDOM.render(
    <MyComponent/>,document.getElementById('root')
);