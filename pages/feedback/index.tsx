import Button from "@components/Button";
import FullScreenWrapper from "@components/FullScreenWrapper";
import Input from "@components/Input";
import TextArea from "@components/TextArea";

const Feedback = () => (
  <FullScreenWrapper>
    <form name="contact" method="POST" data-netlify="true">
      <div className="flex flex-col">
        <label>Your Name:</label>
        <Input type="text" name="name" />

        <label>Your Email:</label>
        <Input type="text" name="email" />

        <label>Feedback:</label>
        <TextArea name="message"></TextArea>

        <Button type="submit">Send</Button>
      </div>
    </form>
  </FullScreenWrapper>
);

export default Feedback;
