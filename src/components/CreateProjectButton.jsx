import { Button } from "antd";

export default function CreateProjectButton({children, ...props}) {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
}
