import React from "react";

let monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

let formatDate = (da) => {
    let d = new Date(da)
    return monthNames[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();
}

class CalendarEvents extends React.Component {

    constructor(props) {
        super(props);

        // __PROJECTID__ 
        let api_key = "AIzaSyA5FhvdC2hZFRRErYgYtodjR05Fu-20IcM",
            cal_id = "7gqq17h6lluk8js57lk98cgu7c@group.calendar.google.com",
            context = this;
        $.ajax({
            type: "GET",
            url: encodeURI("https://www.googleapis.com/calendar/v3/calendars/" + cal_id + "/events?key=" + api_key),
            success(res) {
                // console.log("success", res);
                context.setState({
                    events: res
                });
            },
            error(res) {
                console.log("error", res);
            }
        });
        this.state = {events: null};
    }

    render() {
        // let events = 
        // console.log(this.state.events);
        let events = "";
        if(this.state.events) {
            events = this.state.events.items.filter((val, i) => {
                return new Date() < new Date(val.end.date || val.end.dateTime)
            })
            .sort((a, b) => {
                return new Date(b.start.date) - new Date(a.start.date);
            }).slice(0, 5) // only get 5 upcoming events
            .map((val, i) => {
                let nameString = val.summary,
                    dateString = "/ " + (((val.start.dateTime || val.start.date) === (val.end.dateTime || val.end.date)) ? formatDate(val.start.dateTime || val.start.date) : formatDate(val.start.dateTime || val.start.date) + " to " + formatDate(val.end.dateTime || val.end.date)),
                    locationString = "/ " + val.location || "";

                return (
                    <li>{nameString} {dateString} {locationString}</li>
                );
            });
        }

        return (
            <div id="homeJumbo" className="container-fluid">
                <div className="container">
                    <div className="col-md-12">
                        <h1>Upcoming Events</h1>
                        <ul>
                            {events}
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default CalendarEvents;
