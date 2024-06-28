import { useState } from "react";
import Experience from "./Experience";
import IntroductionDrawer from "./IntroductionDrawer/IntroductionDrawer";

function DetailMuseumModule() {
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  return (
    <section className="h-full w-full">
      <Experience setIsShowDrawer={setIsShowDrawer} />
      <IntroductionDrawer
        isShowDrawer={isShowDrawer}
        setIsShowDrawer={setIsShowDrawer}
      />
    </section>
  );
}

export default DetailMuseumModule;
