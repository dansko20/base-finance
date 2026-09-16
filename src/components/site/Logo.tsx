import { cn } from "@/lib/utils";
import logoAsset from "@/assets/base-mark.png.asset.json";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="BASE FINANCE"
      width={424}
      height={424}
      className={cn("size-11 object-contain", className)}
    />
  );
}
