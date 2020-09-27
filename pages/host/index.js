// import { useRound } from "../../hooks/useSockets";

export default function Host() {
  // const round = useRound();
  return (
    <div>
      <div>HOST</div>
      <pre>
        <code>{JSON.stringify(round, null, 2)}</code>
      </pre>
    </div>
  );
}
