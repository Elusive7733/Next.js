import Link from "next/link";

const Client = () => {
  let clients = [
    { id: "abdullah", name: "Abdullah" },
    { id: "raheel", name: "Raheel" },
    { id: "max", name: "Max" },
    { id: "saitama", name: "Saitama" },
  ];

  return (
    <div>
      <h1>All clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id }, 
              }}>
              {/* <Link href={`/clients/${client.id}`}> */}
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Client;
