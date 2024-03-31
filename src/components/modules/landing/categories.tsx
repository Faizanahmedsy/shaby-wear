import Wrapper from "@/components/wrapper";
import { cn } from "@/lib/utils";
import React from "react";

export default function Categories() {
  return (
    <Wrapper>
      <div className="flex justify-center items-center flex-col">
        <TextSubTitle className="">Catrgories</TextSubTitle>
        <div>bentro grid</div>
      </div>
    </Wrapper>
  );
}

function TextSubTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-4xl font-bold p-2 relative", className)}>
      {children}
      <span
        className="absolute left-0 bottom-0 w-full h-4 "
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L40,149.3C80,139,160,117,240,106.7C320,96,400,96,480,90.7C560,85,640,75,720,90.7C800,107,880,149,960,181.3C1040,213,1120,235,1200,240C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>')`,
          backgroundRepeat: "repeat-x",
        }}
      ></span>
    </h2>
  );
}
function TextTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}
