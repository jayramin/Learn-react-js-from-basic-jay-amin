var RefComponent= React.createClass({
    switch:function(){
    //    alert("called");
        var name = this.inputDemo.value;
        // alert(name);
        document.getElementById('dispalyNameSpan').innerHTML = name;
    },
    render: function(){
        return(
            <div>
                <h2>Name : <input type="text"  ref = { inputRef => this.inputDemo = inputRef } /></h2><br/>
                <button onClick={this.switch} >Click</button>
                <h2>Hello, <span id="dispalyNameSpan"></span></h2>
            </div>
        )
    }
});

ReactDOM.render(
    <RefComponent/>,document.getElementById('root')
);
