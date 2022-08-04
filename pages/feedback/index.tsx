import Button from "@components/Button";
import FullScreenWrapper from "@components/FullScreenWrapper";
import Input from "@components/Input";
import TextArea from "@components/TextArea";

const Feedback = () => (
  <FullScreenWrapper>
    <form name="contact" method="POST" data-netlify="true">
      <div className="flex flex-col">
        <label htmlFor="name">Your Name:</label>
        <Input type="text" name="name" id="name" />

        <label htmlFor="email">Your Email:</label>
        <Input type="text" name="email" id="email" />

        <label htmlFor="message">Feedback:</label>
        <TextArea name="message" id="message"></TextArea>

        <Button type="submit">Send</Button>
      </div>
    </form>
  </FullScreenWrapper>
);

export default Feedback;
