import type { SlotProps } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { typographyClasses } from "./constants";

export type TypographyProps = {
  asChild?: boolean;
} & SlotProps &
  VariantProps<typeof typographyClasses>;
