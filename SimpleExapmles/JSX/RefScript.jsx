var RefComponent = React.createClass({
    displayName:function(){
        var name = this.inputDemo.value;
        document.getElementById('dispalyNameSpan').innerHTML = name;
    },
    render:function(){
        return(
            <div>
                <h2>Name : <input type="text"  ref = {input => this.inputDemo = input}/></h2><br/>
                <button onClick={displayName}>Get Name</button>
                <span id="dispalyNameSpan"></span>
            </div>
        );
    }
});
ReactDOM.render(
    <RefComponent/>,document.getElementById('root')
);