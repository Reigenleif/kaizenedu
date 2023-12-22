import { ComingSoon } from "~/components/common/ComingSoon";
import { PublicLayout } from "~/components/layout/PublicLayout";

export default function MembershipPage() {
  return (
    <PublicLayout includeFooter={false}>
      <ComingSoon/>
    </PublicLayout>
  );
}
