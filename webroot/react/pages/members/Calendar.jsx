import React from "react";
import {Button, Modal} from "react-bootstrap";

var createMarkup = (text) => {
    return {__html: text};
}

class Calendar extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            title: "title",
            body: "body"
        }
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        console.log("compdidmount");
        let context = this;
        $("#calendar").fullCalendar({
            googleCalendarApiKey: "AIzaSyA5FhvdC2hZFRRErYgYtodjR05Fu-20IcM",
            events: {
                googleCalendarId: "7gqq17h6lluk8js57lk98cgu7c@group.calendar.google.com"
            },
            /*events: [
                {
                    title: "Robotics Banquet",
                    start: "2015-05-21T18:00:00",
                    end: "2015-05-21T21:30:00",
                    allDay: false,
                    description: "Our end of year awards banquet, to be held at the Elks Lodge at 11 Elks Lane, Latham, NY. The cost will be $15.00 per person. <a href=\"http://sports.bluesombrero.com/Default.aspx?tabid=699158\">Click here to log in and sign up.</a>",
                },
                {
                    title: "Girl Scouts Demo",
                    start: "2015-05-06T18:00:00",
                    end: "2015-05-06T20:30:00",
                    allDay: false,
                    description: " This demo will include three stations so the scouts can see the robot, experiment with a design challenge, and learn some skills that will spark some curiosity to learn more about programming and Scratch."
                },
                {
                    title: "Mandatory Parent and Student Meeting",
                    start: "2015-10-20T19:00:00",
                    end: "2015-10-20T20:30:00",
                    allDay: false,
                    description: "We will go over requirements for the season. One parent/guardian and the robotics participant must attend. If you can't attend, let Mr.Ashline know ASAP."
                }
            ],*/
            header: {
                left: "prev,next today",
                center: "title",
                right: "month,agendaWeek,agendaDay"
            },
            eventClick(calEvent, jsonEvent, view) {
                // $("#myModal").modal({}); // jQuery b/c im too lazy to implement in react
                context.setState({
                    showModal: true,
                    title: calEvent.title,
                    body: calEvent.description
                });
                // $("#myModal h4").text(calEvent.title);
                // $("#myModal .modal-body").html(calEvent.description);
            },
            eventMouseover(calEvent, jsonEvent, view) {
                $(this).tooltip({
                    title: "Click for more"
                });
            }
        });
    }

    close() {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h2>Sponsors</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="calendar"></div>
                    </div>
                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div dangerouslySetInnerHTML={createMarkup(this.state.body)}></div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Calendar;
