import * as React from "react";
import ShowDemoCode from "../../show-demo-code/ShowDemoCode";
interface CodeDemoAvatarPickFileProps {}
const CodeDemoAvatarVariant: React.FC<CodeDemoAvatarPickFileProps> = (
  props: CodeDemoAvatarPickFileProps
) => {
  return (
    <ShowDemoCode
      codeCompleteJS={completeCodeJS}
      codeCompleteTS={completeCodeTS}
      codeSandboxJS="https://codesandbox.io/s/files-ui-avatar-variants-83lzz8?file=/src/App.js"
      codeSandboxTS="https://codesandbox.io/s/files-ui-avatar-variants-83lzz8?file=/src/App.js"
      codeSplittedJS={splittedCodeJS}
      codeSplittedTS={splittedCodeTS}
    />
  );
};
export default CodeDemoAvatarVariant;

const splittedCodeJS = `<Avatar src={imageSrc} readOnly />
<Avatar src={imageSrc} variant="circle" readOnly />`;

const splittedCodeTS = splittedCodeJS;
const completeCodeJS = `import * as React from "react";
import { Avatar } from "@files-ui/react";
const imageSrc =
  "https://i.pinimg.com/564x/9a/8b/cf/9a8bcfaba81783eff9241538b00343b1.jpg";

export default function DemoAvatarVariants = () => {
  return (
    <>
      <Avatar src={imageSrc} readOnly />
      <Avatar src={imageSrc} variant="circle" readOnly />
    </>
  );
};`;

const completeCodeTS = completeCodeJS;
