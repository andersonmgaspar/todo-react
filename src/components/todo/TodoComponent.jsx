import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Field, Form, Formik } from "formik";
import { getTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

export default function TodoComponent() {
  const { id } = useParams();

  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const authContext = useAuth();
  const { username } = authContext;

  function retrieveTodo() {
    getTodoApi(username, id)
      .then((response) => {
        setDescription(response.data.description);
        setTargetDate(response.data.targetDate);
      })
      .catch((error) => console.log(error));
  }

  function onSubmit(values) {
    console.log(values);
  }

  useEffect(() => retrieveTodo(), [id]);

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <div>
        <Formik
          enableReinitialize
          initialValues={{ description, targetDate }}
          // eslint-disable-next-line react/jsx-no-bind
          onSubmit={onSubmit}
        >
          {
            // eslint-disable-next-line no-unused-vars
            (props) => (
              <Form>
                <fieldset className="form-group">
                  <label htmlFor="description">Description</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="description"
                  />
                </fieldset>

                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    type="date"
                    className="form-control"
                    name="targetDate"
                  />
                </fieldset>
                <div>
                  <button type="submit" className="btn btn-primary m-5">
                    Submit
                  </button>
                </div>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  );
}
