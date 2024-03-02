import { memo } from "react";
import { Slot } from "@radix-ui/react-slot";
import type { TypographyProps } from "./types";
import { typographyClasses } from "./constants";

const Typography: React.FC<TypographyProps> = ({
  className,
  variant,
  asChild,
  ...rest
}) => {
  const Tag = asChild ? Slot : "div";

  return (
    <Tag className={typographyClasses({ variant, className })} {...rest} />
  );
};

export default memo(Typography);
