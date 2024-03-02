import { cva } from "class-variance-authority";
import s from "./Typography.module.css";

export const typographyClasses = cva(s.wrap, {
  variants: {
    variant: {
      "heading-1": s["heading-1"],
      "heading-2": s["heading-2"],
      "heading-3": s["heading-3"],
      "heading-4": s["heading-4"],
      paragraph: s.paragraph,
      "table-header": s["table-header"],
      "table-cell": s["table-cell"],
      "list-item": s["list-item"],
      lead: s.lead,
      large: s.large,
      small: s.small,
      subtle: s.subtle,
    },
  },
});
