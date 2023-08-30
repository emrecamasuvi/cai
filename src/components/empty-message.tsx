import { ANCHOR_CLASS_NAME } from "@/hooks/use-markdown-processor";
import Link from "next/link";

export const EmptyMessage = () => {
  return (
    <div className="max-w-2xl my-auto mx-auto w-full bg-emerald-50 border-2 border-emerald-100 p-4 lg:p-8 rounded-lg text-emerald-950">
      <p className="font-sans text-base font-semibold mb-6">
        cAI
      </p>
      
      <p className="font-sans text-base mb-6">
        All the source code is available on{" "}
        <Link
          href="https://github.com/emrecamasuvi/cai"
          className={ANCHOR_CLASS_NAME}
          target="_blank"
        >
          Github
        </Link>
        .
      </p>
      <p className="font-sans text-base">
        Built on top of the fantastic work by {" "}
        <Link
          href="https://github.com/skovy/llm-markdown"
          target="_blank"
          className={ANCHOR_CLASS_NAME}
        >
          Spencer Miskoviak
        </Link>
        .
      </p>
    </div>
  );
};
