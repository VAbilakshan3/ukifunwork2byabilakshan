var React = require("react");
var actions = require("../actions/SchoolActions");
var createReactClass = require('create-react-class');

const styleOne = {
    BackgroundColor:'rgb(91, 198, 34) !important',
}

module.exports = createReactClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:"",
          place:"",
          date:""
      }  
    },
    addSchool:function(e){
        e.preventDefault();
        actions.addSchool(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
   
    render:function(){
        return(
            <div>
            <div className="panel panel-default sh1">
            <div className="panel-heading bg-warning bt1 cc1 " style={styleOne}>Event Scheduler </div>
            <form className="form" onSubmit={this.addSchool}>
                <div className=" panel-body">
                    <label className="control-label" htmlFor="name">Event :</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Type your Event" />                    
                </div>
                <div className=" panel-body">
                    <label className="control-label" htmlFor="tagline">The Reason:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Type your Reason" />                    
                </div>
                <div className="panel-body">
                    <label className="control-label" htmlFor="place">Event Description:</label>
                    <input type="text" className="form-control" id="place" name="place" value={this.state.place} onChange={this.handleInputChange} placeholder="Type your Description" />                    
                </div>
                <div className=" panel-body">
                    <label className="control-label" htmlFor="date">Event Date:</label>
                    <input type="text" className="form-control" id="date" name="date" value={this.state.date} onChange={this.handleInputChange} placeholder="Type your Date" />                    
                </div>
                <div className="form-group panel-body">
                    <button className="btn bt1 btn-block" type="submit">Add Event</button>
                </div>
            </form>
            </div>
            </div>
        )
    }
})
