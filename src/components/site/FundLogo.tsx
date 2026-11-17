import allianzLogo from "@/assets/partner-allianz.png.asset.json";
import asnLogo from "@/assets/partner-asn.png.asset.json";
import baseLogo from "@/assets/base-finance-logo.png.asset.json";
import bnpLogo from "@/assets/partner-bnp-paribas.png.asset.json";
import robecoLogo from "@/assets/partner-robeco.png.asset.json";

export const logoUrls = { allianz: allianzLogo.url, asn: asnLogo.url, base: baseLogo.url, bnp: bnpLogo.url, robeco: robecoLogo.url } as const;
export type LogoKey = keyof typeof logoUrls;

/** Same-size logo box for every manager, fund and mortgage provider. */
export function PartnerLogo({ logo, name }: { logo: LogoKey; name: string }) {
  return <div className="flex h-20 w-44 items-center justify-center rounded-lg border border-border bg-background p-3">
    <img src={logoUrls[logo]} alt={`Logo van ${name}`} className="max-h-full max-w-full object-contain" loading="lazy" />
  </div>;
}
