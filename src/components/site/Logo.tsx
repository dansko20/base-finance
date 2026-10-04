import { cn } from "@/lib/utils";
import logoAsset from "@/assets/base-finance-logo.png.asset.json";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="BASE FINANCE"
      width={1024}
      height={1024}
      className={cn("size-10 rounded-[10px] object-contain", className)}
    />
  );
}
