/**
 * Created by ios_Mac on 15-6-3.
 */
var App = React.createClass({displayName: "App",

	render: function() {
		return (
            React.createElement("table", null, 
                React.createElement("thead", null, 
                React.createElement("tr", null, 
                    React.createElement("th", null, "heading"), 
                    React.createElement("th", null, "heading"), 
                    React.createElement("th", null, "heading")
                )
                ), 
                React.createElement("tbody", null, 
                React.createElement("tr", {className: "tr"}, 
                    React.createElement("td", null, "haha"), 
                    React.createElement("td", null, "haha"), 
                    React.createElement("td", null, "haha")
                )
                )
            )
		);
	}

});

React.render(React.createElement(App, null),document.body);