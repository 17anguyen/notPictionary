import React from "react";
import "../css/SignUp.css";

export default function SignUp() {
  return (
    <main className="SignUpbg">
      <div className="card">
        <div className="card-body">
          <div className="input-group">
            <span className="input-group-text bg-success">Username</span>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
            />
            <input
              type="text"
              aria-label="Last name"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Password
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="button" class="btn btn-success btn-lg">
            Create
          </button>
        </div>
      </div>
    </main>
  );
}
