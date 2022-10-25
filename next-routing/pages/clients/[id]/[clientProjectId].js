import { useRouter } from "next/router";

const SelectedClientProject = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Client Project ID: {router.query.clientProjectId}</h1>
    </div>
  );
};

export default SelectedClientProject;
