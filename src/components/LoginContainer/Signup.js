import React, { Component } from 'react';
import TermsButton from '../ButtonContainer/TermsButton';
import CancelButton from '../ButtonContainer/CancelButton';


export default class Signup extends Component {

    render() {

        return (
            <div className="signup">
                <h1>Signup</h1>
                <center>
                    <form>
                        <div>
                            <input type="text" className="inputBox" placeholder="First Name" />
                        </div>
                        <br />

                        <div>
                            <input type="text" className="inputBox" placeholder="Last Name" />
                        </div>
                        <br />

                        <div>
                            <input type="email" className="inputBox" placeholder="Email" />
                        </div>
                        <br />

                        <div>
                            <input type="text" className="inputBox" placeholder="Username" />
                        </div>
                        <br />

                        <div>
                            <input type="password" className="inputBox" placeholder="Password" />
                        </div>
                        <br />

                        <div>
                            <input type="password" className="inputBox" placeholder="Confirm Password" />
                        </div>
                        <small>**Password must contain at least 8 characters**</small>
                        <br />

                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                            <label className="custom-control-label" for="customControlInline">
                                <small>I have read and agreed to the terms and conditions</small>
                            </label>
                        </div>
                        <small><TermsButton /></small>
                        <br />

                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="submit" className="btn btn-success submit">Submit</button>
                            <CancelButton />
                        </div>
                    </form>

                </center>
            </div>
        );
    }
}