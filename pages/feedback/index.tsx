import Button from "@components/Button";
import FullScreenWrapper from "@components/FullScreenWrapper";
import { RawInput as Input } from "@components/Input";
import TextArea from "@components/TextArea";
import { useState } from "react";

const Feedback = () => {
  return (
    <FullScreenWrapper>
      <form
        name="contact"
        action="/feedback/success"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="subject" value="Feedback from Purple Dash" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex flex-col">
          <label htmlFor="name">Your Name:</label>
          <Input type="text" id="name" />

          <label htmlFor="email">Your Email:</label>
          <Input type="text" id="email" />

          <label htmlFor="message">Feedback:</label>
          <TextArea name="message" id="message"></TextArea>

          <div className="hidden">
            <label htmlFor="bot-field">
              Don't fill this out if you're human:
            </label>
            <Input type="text" id="bot-field" />
          </div>

          <Button type="submit">Send</Button>
        </div>
      </form>
    </FullScreenWrapper>
  );
};

export default Feedback;
