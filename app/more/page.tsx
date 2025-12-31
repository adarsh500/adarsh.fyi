import { more } from "@components/Content/more";
import Card from "@components/Card";
import PageLayout from "@components/PageLayout";

const More = () => (
  <PageLayout title="More">
    <div className="flex justify-start items-start slide-enter-content w-full my-10 flex-wrap mobile:my-8">
      {more.map((item) => (
        <Card {...item} key={item.title} />
      ))}
    </div>
  </PageLayout>
);

export default More;
