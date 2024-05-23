import { useRef } from "react";
import UserInput from "./UserInput";
import { Form, Button, Flex } from "antd";

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const newTitle = title.current.value;
    const newDescription = description.current.value;
    const newDueDate = dueDate.current.value;

    onAdd({
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
    });
  }

  return (
    <Form layout="vertical" labelAlign="right" style={{ margin: "20px 0px" }}>
      <Flex justify="end" gap={10}>
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
        <Button type="default">Cancel</Button>
      </Flex>
      <UserInput ref={title} label="Title" />
      <UserInput ref={description} label="Description" isTextArea />
      <UserInput ref={dueDate} label="Due Date" isDate />
    </Form>
  );
}
