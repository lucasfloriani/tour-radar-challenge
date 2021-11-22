import { List, ListItem } from "./index";

export default {
  title: "Design System/List",
  component: List,
};

export const Default = () => (
  <List>
    <ListItem title="Title 1">Description of requirement 1</ListItem>
    <ListItem title="Title 2">Description of requirement 2</ListItem>
    <ListItem title="Title 3">Description of requirement 3</ListItem>
    <ListItem title="Title 4">Description of requirement 4</ListItem>
    <ListItem title="Title 5">Description of requirement 5</ListItem>
  </List>
);
