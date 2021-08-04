import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Modal } from "react-bootstrap";
import "../../assets/css/StudentStylesheets/TeacherProfile.css";
import { withRouter } from "react-router-dom";

export class FacultyProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ShowEditModal: false,
      Available: true,
    };
  }

  EditProjectModal = () => {
    this.setState({
      ShowEditModal: true,
    });
  };

  CloseEditProjectModal = () => {
    this.setState({
      ShowEditModal: false,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="TeacherProfilePage">
          <h4>Ms. Shikha Jain</h4>
          <span>Assistant Professor, IT | shikhajain@gmail.com</span>

          <div className="EachProject">
            <div className="ProjectHeader">
              <div className="ProjectNameDiv">
                <p>PROJECT TITLE</p>
                <span>Secure Online Auction System</span>
              </div>
              {this.state.Available ? (
                <p className="GREENCOLOR">Available</p>
              ) : (
                <p className="REDCOLOR">Unavailable</p>
              )}
              {this.state.AppliedClicked ? (
                <button className="AppliedBtn">
                  <svg
                    className="CheckSvg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 
                                15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 
                                3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 
                                1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 
                                13.1003 0.988061 15.07 1.86572"
                      stroke="#209616"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 3.00586L11 13.0159L8 10.0159"
                      stroke="#209616"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Applied
                </button>
              ) : (
                <button className="EDITBTN" onClick={this.EditProjectModal}>
                  Edit
                </button>
              )}
            </div>

            <p>TECHNOLOGY REQUIRED</p>
            <span>Python, Django Framework, MySQL</span>
            <p>DESCRIPTION</p>
            <span>
                Online auction however is a different business model where the items are sold through price bidding. 
                Usually bidding have start price and ending time. Potential buyers in auction and the winner is the one 
                who bids the item for highest price. We treat the fraud detection with a binary classification. 
                For buying product online user have to provide his personal details like email address, license number, 
                PAN number etc. Only the valid user will have authority to bid. This prevents various frauds according in 
                online shopping.
            </span>
          </div>


          <div className="EachProject">
            <div className="ProjectHeader">
              <div className="ProjectNameDiv">
                <p>PROJECT TITLE</p>
                <span>Canteen Automation System</span>
              </div>
              {this.state.Available ? (
                <p className="GREENCOLOR">Available</p>
              ) : (
                <p className="REDCOLOR">Unavailable</p>
              )}
              {this.state.AppliedClicked ? (
                <button className="AppliedBtn">
                  <svg
                    className="CheckSvg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 
                                15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 
                                3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 
                                1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 
                                13.1003 0.988061 15.07 1.86572"
                      stroke="#209616"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 3.00586L11 13.0159L8 10.0159"
                      stroke="#209616"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Applied
                </button>
              ) : (
                <button className="EDITBTN" onClick={this.EditProjectModal}>
                  Edit
                </button>
              )}
            </div>

            <p>TECHNOLOGY REQUIRED</p>
            <span>Java, Mysql, HTML, CSS</span>
            <p>DESCRIPTION</p>
            <span>
              In today’s age of fast food and take-out, many canteen have chosen to focus on quick preparation and speedy delivery 
              of orders rather than offering a rich dining experience. Until very recently, all of these delivery orders were placed 
              to the waiters or over the phone, but there are many disadvantages to this system, including the inconvenience of the customer 
              needing to have a physical copy of the menu, lack of a visual confirmation that the order was placed correctly, and the 
              necessity for the canteen to have an employee answering the phone and taking orders. What,we propose is a Canteen Automation 
              System, which is a technique of ordering foods online applicable in any food delivery industry. The main advantage of this 
              system is that it greatly simplifies the ordering process for both the customer and the canteen. When the customer visits the 
              ordering webpage, they are presented with an interactive and up-to-date menu,complete with all available options and dynamically 
              adjusting prices based on the selected options. After making a selection, the item is then added to their order, which the 
              customer canreview the details of at any time before checking out. This provides instant visual confirmation of what was selected 
              and ensures that items in the order are, in fact, what was intended.
            </span>
          </div>


        </div>

        <Modal
          backdrop="static"
          size="lg"
          keyboard={false}
          className="SuggestModal"
          show={this.state.ShowEditModal}
          onHide={this.CloseEditProjectModal}
        >
          <Modal.Header className="SuggestModalHead">
            <h3>Edit Your Project</h3>
            <button
              className="SuggestModalClose"
              onClick={this.CloseEditProjectModal}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6699 6.05078L6.66992 18.0508"
                  stroke="#ED383F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66992 6.05078L18.6699 18.0508"
                  stroke="#ED383F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Modal.Header>
          <Modal.Body className="SuggestModalBody">
            <input
              type="text"
              className="INPUT1"
              placeholder="PROJECT TITLE"
            ></input>
            <select
              type="select"
              className="INPUT1"
              placeholder="CHOOSE A FACULTY"
              readOnly
            >
              <option>Shikha</option>
            </select>
            <input type="text" placeholder="TECHNOLOGY REQUIRED"></input>
            <textarea placeholder="DESCRIPTION"></textarea>

            <button>Save Changes</button>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

export default withRouter(FacultyProjects);
