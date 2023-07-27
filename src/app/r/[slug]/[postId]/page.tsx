interface PageProps {
  params: {
    postId: string;
  };
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const Page = ({}: PageProps) => {
  return <div>Page</div>;
};

export default Page;
