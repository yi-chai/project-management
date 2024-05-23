import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { Layout } from "antd";
import { useState } from "react";

const { Content } = Layout;

function App() {
  const [projectsState, setProjectsState] = useState({
    currentAction: "nothing-selected",
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: null };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prev,
        projects: [...prev.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <Layout hasSider>
        <ProjectSidebar onStartAddProject={handleStartAddProject} />
        <Layout style={{ marginLeft: 200, height: "100vh" }}>
          <Content style={{ padding: 40 }}>{content}</Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
