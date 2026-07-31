import CodeHighlight from "../components/codeHighlight/CodeHighlight";
import TypeHighlight from "../components/typeHighlight/TypeHighlight";

export const SkeletonAPIPropsRows = [
  {
    id: 0,
    name: "animation",
    type: (
      <>
        <TypeHighlight np>{"'pulse'"}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{"'wave'"}</TypeHighlight>
        {" | "}
        <TypeHighlight np>false</TypeHighlight>
      </>
    ),
    default: <TypeHighlight np>{"'pulse'"}</TypeHighlight>,
    description: (
      <>
        Controls the loading shimmer animation. Use <CodeHighlight>false</CodeHighlight>
        to disable it.
      </>
    ),
  },
  {
    id: 1,
    name: "variant",
    type: (
      <>
        <TypeHighlight np>{"'rectangular'"}</TypeHighlight>
        {" | "}
        <TypeHighlight np>{"'circular'"}</TypeHighlight>
      </>
    ),
    default: <TypeHighlight np>{"'rectangular'"}</TypeHighlight>,
    description: <>Shape of the skeleton placeholder.</>,
  },
  {
    id: 2,
    name: "width",
    type: <TypeHighlight np>{"number | string"}</TypeHighlight>,
    default: <TypeHighlight np>{"'133px'"}</TypeHighlight>,
    description: <>Width of the skeleton container.</>,
  },
  {
    id: 3,
    name: "height",
    type: <TypeHighlight np>{"number | string"}</TypeHighlight>,
    default: <TypeHighlight np>{"'133px'"}</TypeHighlight>,
    description: <>Height of the skeleton container.</>,
  },
  {
    id: 4,
    name: "className",
    type: <TypeHighlight np>string</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>Additional CSS class name passed to the wrapper.</>,
  },
  {
    id: 5,
    name: "style",
    type: <TypeHighlight np>{"React.CSSProperties"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>Inline styles applied to the wrapper.</>,
  },
];