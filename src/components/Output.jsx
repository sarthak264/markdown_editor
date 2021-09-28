import ReactMarkdown from "react-markdown";

const Output = ({ source }) => {
  return (
    <div className="output_wrapper">
      <ReactMarkdown className="markdown_preview">{source}</ReactMarkdown>
    </div>
  );
};

export default Output;
