import * as React from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";

const DemoDropzoneLazyLoad = () => {
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    const generated = Array.from({ length: 120 }).map((_, index) => ({
      id: `lazy-${index}`,
      name: `lazy-file-${index}.txt`,
      type: "text/plain",
      size: 1024 * (index + 1),
      valid: true,
    }));
    setFiles(generated);
  }, []);

  return (
    <Dropzone
      value={files}
      onChange={(incomingFiles) => setFiles(incomingFiles)}
      clickable={false}
      lazyLoad
      lazyLoadBuffer={240}
      style={{ minHeight: "280px", maxHeight: "340px", overflow: "auto" }}
      header={false}
      footer={false}
      label="Lazy list"
    >
      {files.map((file) => (
        <FileMosaic key={file.id} {...file} info />
      ))}
    </Dropzone>
  );
};

export default DemoDropzoneLazyLoad;
