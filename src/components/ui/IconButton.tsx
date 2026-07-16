import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
}

export default function IconButton({ children }: IconButtonProps) {
  return <button>{children}</button>;
}
