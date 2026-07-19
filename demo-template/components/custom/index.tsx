// Hybrid-mode escape hatch. In "hybrid" generation mode, Agent 3 may write
// bespoke section components into this folder and register them here; the
// spec references them as { "type": "custom", "component": "<Name>" }.
//
// The template ships with an empty registry — in "spec" mode this file is
// never touched. Custom components have the full Untitled UI system
// available: import { Button, Badge, FeaturedIcon, cx, ... } from
// "untitledui-components" and use semantic Tailwind tokens (text-primary,
// bg-brand-solid, ...) so they inherit the site's brand palette.
import type { FC } from "react";

export const CUSTOM_SECTIONS: Record<string, FC<Record<string, unknown>>> = {};
