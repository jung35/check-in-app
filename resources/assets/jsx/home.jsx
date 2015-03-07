var App = React.createClass({
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
                <div key={eventItem.id} className="col-xs-12 col-sm-6 col-md-4">
                    <a href={"/money/" + eventItem.id}>
                        <div className="panel panel-custom">
                            <div className="panel-heading">
                                {eventItem.title}
                            </div>
                            <div className="panel-body">
                                <p>{eventItem.description}</p>
                            </div>
                        </div>
                    </a>
                </div>
            );
        });

		return (
	    	<div>
	    		{listEvents}
	    	</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));