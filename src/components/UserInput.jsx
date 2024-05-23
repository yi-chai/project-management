import { forwardRef } from "react";
import { Input, Form, DatePicker } from "antd";

const { TextArea } = Input;

const UserInput = forwardRef(function UserInput(
  { label, isTextArea, isDate, ...props },
  ref
) {
  return (
    <Form.Item label={label}>
      {isTextArea ? (
        <TextArea ref={ref} {...props} rows={3} placeholder={label} />
      ) : isDate ? (
        <DatePicker ref={ref} {...props} />
      ) : (
        <Input ref={ref} {...props} placeholder={label} />
      )}
    </Form.Item>
  );
});

export default UserInput;
