import TypeHighlight from "../components/typeHighlight/TypeHighlight";

export const ValidateFileResponseAPIrows = [
  {
    name: "valid",
    type: <TypeHighlight np>{"boolean"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>If true, that means that the File is valid</>,
  },
  {
    name: "errors",
    type: <TypeHighlight np>{"string[]"}</TypeHighlight>,
    default: <TypeHighlight np></TypeHighlight>,
    description: <>The list of errors associated with an specific file.</>,
  },
  {
    name: "severity",
    type: (
      <TypeHighlight np>
        {`"error" | "warning" | "info"`}
      </TypeHighlight>
    ),
    default: <TypeHighlight np>{`"error"`}</TypeHighlight>,
    description: (
      <>
        Optional severity level for the validation result. Use{" "}
        <code>"warning"</code> to allow upload despite errors, or{" "}
        <code>"info"</code> for informational messages on valid files.
        Defaults to <code>"error"</code> when <code>valid</code> is false.
      </>
    ),
  },
];
