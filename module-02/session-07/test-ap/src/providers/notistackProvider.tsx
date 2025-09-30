"use client";

import { SnackbarProvider } from "notistack";

export default function NotistackProvider({
  children,
}: {
  children: React.ReactNode;
}) /*children membungkus react node*/ {
  return (
    <SnackbarProvider
      maxSnack={2}
      /*max notif yg muncul */
      transitionDuration={300} 
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
