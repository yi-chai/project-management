import { Layout, Typography, Flex, Menu } from "antd";
import CreateProjectButton from "./CreateProjectButton";
import { PlusOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { Title } = Typography;

export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <Sider
      style={{
        // backgroundColor: "CornflowerBlue",
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Flex vertical align="start" gap={5} style={{ padding: 20 }}>
        <Title level={5}>Your projects</Title>
        <CreateProjectButton
          onClick={onStartAddProject}
          type="primary"
          icon={<PlusOutlined />}
        >
          Add Project
        </CreateProjectButton>
      </Flex>
      <Menu></Menu>
    </Sider>
  );
}
