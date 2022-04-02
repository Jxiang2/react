import { useEffect, useState } from "react";

interface Props {
  getItems: (a: number) => number[];
}

export default function HomeList ({ getItems }: Props) {
  const [items, setItems] = useState<number[]>([]);
  useEffect(() => {
    setItems(getItems(5));
    console.log("Updating items");
  }, [getItems]);
  return (
    <>
      { items.map(item => <div key={ item }>{ item }</div>) }
      <p>first render and click setDark</p>
      <p>Home & HomeList re-render with new getItems generated</p>
      <p>useEffect in HomeList is called, getItems() called and setItems() called</p>
      <p>HomeList re-render with new items state</p>
    </>
  );
}