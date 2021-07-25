import React, { useState } from "react";
import emailjs from "emailjs-com";
import Field from "./Field";
import { SendOutlined } from "@ant-design/icons";

const ContactMe = () => {
  const [email, setEmail] = useState({ subject: "", message: "" });
  const onSubjectChange = (e) => {
    setEmail({ subject: e.target.value, message: email.message });
  };
  const onMessageChange = (e) => {
    setEmail({ subject: email.subject, message: e.target.value });
  };
  const onFinish = async (e) => {
    e.preventDefault();
    await emailjs.send(
      "gmail",
      "template_z4mcumx",
      email,
      process.env.REACT_APP_EMAILJS_USER_KEY
    );
    setEmail({ subject: "", message: "" });
  };

  return (
    <div className="CardWrapper">
      <div className="Card">
        <div className="CardHeaderWrapper">
          <h2 className="CardHeader">Contact Me</h2>
        </div>
        <form className="CardContent" onSubmit={onFinish}>
          <Field
            label="Subject"
            value={email.subject}
            onChange={onSubjectChange}
            rows={1}
          />
          <Field
            label="Message"
            value={email.message}
            onChange={onMessageChange}
            rows={4}
          />
          <button type="submit" className="ContactMeButton">
            Send
            <SendOutlined className="ContactMeIcon" />
          </button>
        </form>
      </div>
      <div className="CardShadow" />
    </div>
  );
};
export default ContactMe;
