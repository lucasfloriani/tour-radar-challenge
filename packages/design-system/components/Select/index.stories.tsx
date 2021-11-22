import { Select, SelectItem } from "./index";

export default {
  title: "Design System/Select",
  component: Select,
};

export const Default = () => (
  <Select>
    <SelectItem value="lowest-first">Total price: Lowest first</SelectItem>
    <SelectItem value="highest-first">Total price: Highest first</SelectItem>
    <SelectItem value="shortest-first">Duration: Shortest first</SelectItem>
    <SelectItem value="longest-first">Duration: Longest first</SelectItem>
  </Select>
);
