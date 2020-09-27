import { useRouter } from "next/router";

export default function Play() {
  const router = useRouter();
  const { code } = router.query;
  return <div>{code}</div>;
}
