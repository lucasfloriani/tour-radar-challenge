import Rating from "./index";

export default {
  title: "Design System/Rating",
  component: Rating,
};

export const Default = () => <Rating value={5} />;

export const Values = () => (
  <div style={{ display: "inline-grid", gap: "1em" }}>
    <Rating value={1} />
    <Rating value={1.1} />
    <Rating value={1.5} />
    <Rating value={2} />
    <Rating value={2.5} />
    <Rating value={3} />
    <Rating value={3.5} />
    <Rating value={4} />
    <Rating value={4.5} />
    <Rating value={5} />
  </div>
);
