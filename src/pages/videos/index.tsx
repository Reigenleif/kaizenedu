import { useRouter } from "next/router";
import { useEffect } from "react";
import { Loading } from "~/components/common/Loading";
import { PublicLayout } from "~/components/layout/PublicLayout";

export default function VideosPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/playlists");
  });

  return (
    <PublicLayout>
      <Loading />
    </PublicLayout>
  );
}
