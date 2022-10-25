import { useRouter } from "next/router";

const ProjectDetailsPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The Project Details Page</h1>
    </div>
  );
};

export default ProjectDetailsPage;
