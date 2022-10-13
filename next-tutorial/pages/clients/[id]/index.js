import { useRouter } from "next/router";

const ClientDetails = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Details of Client {router.query.id}</h1>
    </div>
  );
};

export default ClientDetails;
