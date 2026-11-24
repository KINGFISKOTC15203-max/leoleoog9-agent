import type { NextConfig } from "next";
import { withEve } from "eve/next";

// The Base44 sandbox serves the dev server through a proxied public host, which
// Next 16 only allows for dev assets/HMR when it is listed here.
const previewOrigin =
  process.env.BASE44_PREVIEW_MODE === "1" && process.env.BASE44_PUBLIC_HOST_SUFFIX
    ? `3000-${process.env.BASE44_PUBLIC_HOST_SUFFIX}`
    : undefined;

const nextConfig: NextConfig = {
  // Skip repeating codegen-time typechecking on every deployment build.
  typescript: { ignoreBuildErrors: true },
  ...(previewOrigin ? { allowedDevOrigins: [previewOrigin] } : {}),
};

export default withEve(nextConfig);
