import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const hello = trpc.hello.useQuery({ data: 5 , name: 'Anurag'  });
  const github = trpc.fetchsome.useQuery({username:'Anurag30112003'})
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* <p>{hello.data.greeting}</p> */}
      <p>{hello.data.name}</p>
      <p>{github.data?.followers}</p>
    </div>
  );
}