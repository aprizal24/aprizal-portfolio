import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-10 xl:px-0">
      {children}
    </div>
  );
}
