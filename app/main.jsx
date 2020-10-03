
//main.jsx
// var React = require("react");
// var ReactDOM = require("react-dom");
// var SchoolsList = require("./components/SchoolsList.jsx");
// var schoolsStore = require("./stores/schoolsStore");
// var _schools = schoolsStore.getSchools();
// schoolsStore.onChange(function(schools){
//     _schools = schools;
//     render();
// });

// function render(){
//     ReactDOM.render(<SchoolsList schools={_schools} />, document.getElementById("container"));    
// }

// render();


var React = require("react");
var ReactDOM = require("react-dom");
var SchoolsList = require("./components/SchoolsList.jsx");
var schoolsStore = require("./stores/schoolsStore");
var _schools = [];
var _date = [];
var getSchoolsCallback = function(schools){
    _schools = schools;
    render();
};
schoolsStore.onChange(getSchoolsCallback);
var getDatesCallback = function(date){
    _date = date;
    render();
};
schoolsStore.onChange(getDatesCallback);

function render(){
    ReactDOM.render(<SchoolsList schools={_schools} date={_date} />, document.getElementById("container"));    
}
