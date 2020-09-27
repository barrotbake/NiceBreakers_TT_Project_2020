import { useRouter } from "next/router";
import MainContainer from "../../components/mainContainer/MainContainer"
import Content from "../../components/content/Content"

export default function Play() {
  const router = useRouter();
  const { code } = router.query;
  return (
    <MainContainer>
      <Content scene="Two Truths and a Lie"/>
    </MainContainer>
  );
}
