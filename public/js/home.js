var App = React.createClass({displayName: "App",
    componentDidMount: function() {
        this.loadEventsFromServer();
    },

	loadEventsFromServer: function () {
        $.ajax({
            url: '/api/v1/',
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                alert('server sux');
            }.bind(this)
        });
	},

    getInitialState: function() {
        return { data: [] };
    },

	render: function() {
        var listEvents = this.state.data.map(function (eventItem) {
            return (
                React.createElement("div", {key: eventItem.id, className: "col-xs-12 col-sm-6 col-md-4"}, 
                    React.createElement("a", {href: "/money/" + eventItem.id}, 
                        React.createElement("div", {className: "panel panel-custom"}, 
                            React.createElement("div", {className: "panel-heading"}, 
                                eventItem.title
                            ), 
                            React.createElement("div", {className: "panel-body"}, 
                                React.createElement("p", null, eventItem.description)
                            )
                        )
                    )
                )
            );
        });

		return (
	    	React.createElement("div", null, 
	    		listEvents
	    	)
		);
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));