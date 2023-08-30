import MarkerCircle from "@phosphor-icons/react/dist/icons/MarkerCircle";

export const Nav = () => {
  return (
    <nav className="max-w-2xl w-full mx-auto py-2 lg:py-4 flex gap-2 items-center justify-between sticky top-0 bg-white z-10">
      <a
        href="/"
        className="flex gap-2 items-center text-emerald-900 hover:text-emerald-950 group transition-colors"
      >
        <div className="p-2 rounded-full bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
          <MarkerCircle className="w-6 h-6" />
        </div>
        <span className="font-mono font-semibold">LLM Markdown</span>
      </a>
    </nav>
  );
};
