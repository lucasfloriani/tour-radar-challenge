import Typography from "../Typography";
import { ListWrapper, ListItemWrapper } from "./style";

export const List: React.FC = ({ children }) => {
  return <ListWrapper>{children}</ListWrapper>;
};

type ListItemProps = {
  title: string;
};

export const ListItem: React.FC<ListItemProps> = ({ children, title }) => {
  return (
    <ListItemWrapper>
      <Typography color="grayscale.200" weight="700">
        {title}
      </Typography>
      <div>{children}</div>
    </ListItemWrapper>
  );
};
