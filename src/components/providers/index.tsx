import { MotionProvider } from "@/lib/motion/provider";


export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionProvider>{children}</MotionProvider>;
}
