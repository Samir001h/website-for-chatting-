"use client";
import { ReactNode } from "react";
import { ConvexProvider } from "convex/react";
import { ConvexReactClient } from "convex/react";
// import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
     children,
     }: { 
        children: ReactNode;
     }) {
	return (<ConvexProvider client={convex}>{children}</ConvexProvider>
	);
}
