import type { NextConfig } from "next";

const nextConfig: NextConfig = {
cacheComponents:true,
cacheLife:{
    products:{
          stale: 3600,      // 1 hour - serve stale while fresh
      revalidate: 900,  // 15 min - check for updates
      expire: 86400     // 1 day - hard expiry
    }
}
};

export default nextConfig;
