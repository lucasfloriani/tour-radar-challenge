import { useMemo, useState } from "react";
import Typography, { TypographyProps } from "../Typography";
import { MoreItems } from "./style";

type TextWithMoreItemsProps = {
  texts: string[];
  joinWith?: string;
  maxItems: number;
} & Omit<TypographyProps, "children">;

const TextWithMoreItems = ({ texts, joinWith = ", ", maxItems, ...textProps }: TextWithMoreItemsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textsToShow = useMemo(() => (isExpanded ? texts : texts.slice(0, maxItems)), [isExpanded, texts, maxItems]);

  return (
    <Typography {...textProps}>
      {textsToShow.join(joinWith)}
      {!isExpanded && texts.length > maxItems && (
        <MoreItems onClick={() => setIsExpanded(true)}>more +{texts.length - maxItems}</MoreItems>
      )}
    </Typography>
  );
};

export default TextWithMoreItems;
