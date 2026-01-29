"use client";

import { useState, useRef, useEffect } from "react";

const inputStyles =
  "flex-1 outline-none border-none resize-none cursor-text text-blue-600 dark:text-blue-400 w-full px-[5%] py-6 bg-gray-200 dark:bg-gray-950 text-lg overflow-auto font-mono";

function Playground() {
  //TODO: switch to monaco editor

  const [htmlInput, setHtmlInput] = useState<string>("");
  const [cssInput, setCssInput] = useState<string>("");
  const [jsInput, setJsInput] = useState<string>("");
  const outputRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const output = outputRef.current?.contentWindow?.document;
    if (output) {
      output.open();
      output.writeln("<style>" + cssInput + "</style>" + "<body>" + htmlInput + "<script>" + jsInput + "</script>" + "</body>");
      output.close();
    }
  }, [htmlInput, cssInput, jsInput]);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center rounded-lg overflow-hidden border-2 border-gray-700">
      <div className="flex-1 flex flex-col h-112.5 w-full">
        <textarea
          value={htmlInput}
          className={inputStyles}
          onChange={(e) => setHtmlInput(e.target.value)}
          placeholder="HTML"
        ></textarea>
        <textarea
          value={cssInput}
          className={inputStyles}
          onChange={(e) => setCssInput(e.target.value)}
          placeholder="CSS"
        ></textarea>
        <textarea
          value={jsInput}
          className={inputStyles}
          onChange={(e) => setJsInput(e.target.value)}
          placeholder="JavaScript"
        ></textarea>
      </div>
      <iframe
        ref={outputRef}
        className="flex-1 border-none outline-none bg-white w-full h-112.5"
        sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </div>
  );
}

export default Playground;
