import { useRouter } from "next/router";

const ClientDetails = () => {
  const router = useRouter();


    const loadProjectHandler = () => {
        router.push(`/clients/${router.query.id}/ProjectX`);

    }

  return (
    <div>
      <h1>Details of Client {router.query.id}</h1>
      <button onClick={loadProjectHandler}>Load Client Project X</button>
    </div>
  );
};
export default ClientDetails;
