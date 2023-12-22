import { ComingSoon } from "~/components/common/ComingSoon";
import { PublicLayout } from "~/components/layout/PublicLayout";

export default function QuizPage() {
  return (
    <PublicLayout includeFooter={false}>
      <ComingSoon/>
    </PublicLayout>
  );
}
