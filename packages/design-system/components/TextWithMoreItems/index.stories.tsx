import TextWithMoreItems from "./index";

export default {
  title: "Design System/TextWithMoreItems",
  component: TextWithMoreItems,
};

export const Default = () => <TextWithMoreItems texts={["one", "two", "three", "four", "five"]} maxItems={2} />;

export const EqualValue = () => <TextWithMoreItems texts={["one", "two", "three", "four", "five"]} maxItems={5} />;

export const Sizes = () => (
  <div style={{ display: "grid", gap: "1em" }}>
    <TextWithMoreItems texts={["Extra Small", "one", "two", "three", "four", "five"]} maxItems={3} size="extraSmall" />
    <TextWithMoreItems texts={["Small", "one", "two", "three", "four", "five"]} maxItems={3} size="small" />
    <TextWithMoreItems texts={["Normal", "one", "two", "three", "four", "five"]} maxItems={3} size="normal" />
    <TextWithMoreItems texts={["Medium", "one", "two", "three", "four", "five"]} maxItems={3} size="medium" />
    <TextWithMoreItems texts={["Large", "one", "two", "three", "four", "five"]} maxItems={3} size="large" />
    <TextWithMoreItems texts={["Extra Large", "one", "two", "three", "four", "five"]} maxItems={3} size="extraLarge" />
  </div>
);

export const Colors = () => (
  <div style={{ display: "grid", gap: "1em" }}>
    <TextWithMoreItems
      texts={["Primary 100", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="primary.100"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Primary 200", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="primary.200"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Primary 300", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="primary.300"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Primary 400", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="primary.400"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Primary 500", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="primary.500"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Secondary 100", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="secondary.100"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Grayscale 100", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="grayscale.100"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Grayscale 200", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="grayscale.200"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Grayscale 300", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="grayscale.300"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Grayscale 400", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="grayscale.400"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Grayscale 500", "one", "two", "three", "four", "five"]}
      maxItems={3}
      color="grayscale.500"
      size="extraLarge"
    />
  </div>
);

export const FontWeight = () => (
  <div style={{ display: "grid", gap: "1em" }}>
    <TextWithMoreItems
      texts={["Font Weight 100", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="100"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight 200", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="200"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight 300", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="300"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight 400", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="400"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight 500", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="500"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight 600", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="600"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight 700", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="700"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight 800", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="800"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight 900", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="900"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight light", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="light"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight normal", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="normal"
      size="extraLarge"
    />
    <TextWithMoreItems
      texts={["Font Weight bold", "one", "two", "three", "four", "five"]}
      maxItems={3}
      weight="bold"
      size="extraLarge"
    />
  </div>
);
