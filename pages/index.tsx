import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const github = trpc.fetchsome.useQuery({ username: "github" });
  if (!github.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="hr">
      <p>
        <b>
          {" "}
          <span className="username">{github.data?.username} </span>
        </b>
        you have{" "}
        <b>
          {" "}
          <span className="username"> {github.data?.followers}</span>{" "}
        </b>{" "}
        followers
      </p>
    </div>
  );
}
