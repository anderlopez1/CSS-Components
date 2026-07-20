// Hybrid-mode escape hatch. In "hybrid" generation mode, Agent 3 may write
// bespoke section components into this folder and register them here; the
// spec references them as { "type": "custom", "component": "<Name>" }.
//
// The template ships with an empty registry — in "spec" mode this file is
// never touched. Agent 3 ensures every custom section is a CLIENT component
// ("use client") so the documented component patterns — e.g. passing icon
// references as props (iconLeading={Icon}) — work without RSC serialization
// errors. FC<any>, not FC<Record<string, unknown>>: agent sections type
// their own props (often required, e.g. photos), and a stricter record type
// fails tsc on perfectly good components.
import type { FC } from "react";

export const CUSTOM_SECTIONS: Record<string, FC<any>> = {};
