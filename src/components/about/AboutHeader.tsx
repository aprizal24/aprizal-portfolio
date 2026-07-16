export default function AboutHeader() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-blue-500 rounded-full" />
        <span className="text-sm font-medium text-blue-500 tracking-wide uppercase">
          About Me
        </span>
      </div>
      <h2 className="mt-2 md:mt-12 text-xl md:text-4xl font-semibold">A little about me.</h2>
    </div>
  );
}
