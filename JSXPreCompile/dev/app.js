/**
 * Created by ios_Mac on 15-6-3.
 */
var App = React.createClass({

	render: function() {
		return (
            <table>
                <thead>
                <tr>
                    <th>heading</th>
                    <th>heading</th>
                    <th>heading</th>
                </tr>
                </thead>
                <tbody>
                <tr className="tr">
                    <td>haha</td>
                    <td>haha</td>
                    <td>haha</td>
                </tr>
                </tbody>
            </table>
		);
	}

});

React.render(<App />,document.body);