import { Typography, Flex } from "antd";
import CreateProjectButton from "./CreateProjectButton";
import noProjectImage from "../assets/no-projects.png";

const { Text, Title } = Typography;

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <Flex vertical align="center" gap={10}>
      <img
        alt="No Projects"
        src={noProjectImage}
        style={{ height: 100, width: 100, objectFit: "contain" }}
      />
      <Title level={5}>No Project Selected</Title>
      <Text type="secondary">
        Select a project or get started with a new one
      </Text>
      <CreateProjectButton onClick={onStartAddProject} type="primary">
        Create New Project
      </CreateProjectButton>
    </Flex>
  );
}
