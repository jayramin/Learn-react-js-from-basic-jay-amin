var Bulb= React.createClass({
    getInitialState:function(){
        return{
            status :false
        }
    },
    switch:function(){
        this.setState(
            {status: !this.state.status}
        )
    },
    render: function(){
        var dispalyBulb = this.state.status ? 'img/3.png' : 'img/1.jpg' ;
        return(
            <div>
                <img src = { dispalyBulb } />
                <button onClick={this.switch} >Click</button>
            </div>
        )
    }
});

ReactDOM.render(
    <Bulb/>,document.getElementById('root')
);