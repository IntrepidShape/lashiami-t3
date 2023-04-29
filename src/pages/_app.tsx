import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "lashiami-t3/utils/api";

import "lashiami-t3/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
