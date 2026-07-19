import type { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
declare module "react-aria-components" {
    interface RouterConfig {
        routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
    }
}
export declare const RouteProvider: ({ children }: PropsWithChildren) => import("react").JSX.Element;
//# sourceMappingURL=router-provider.d.ts.map