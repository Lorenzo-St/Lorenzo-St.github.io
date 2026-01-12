import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
function ProjectDescription({ fileName }) {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(fileName)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.text();
      })
      .then(setContent)
      .catch((err) => console.error(err));
  }, [fileName]);
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
}

export default ProjectDescription;
