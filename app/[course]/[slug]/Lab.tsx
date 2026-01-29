"use client";

import { useState, useEffect, useRef } from "react";

const tabStyles =
  "text-gray-700 dark:text-gray-300 px-7 py-2 text-lg cursor-pointer font-bold hover:bg-gray-400 dark:hover:bg-gray-700 ";
const selectedTabStyles = "bg-gray-200 dark:bg-gray-950 hover:bg-gray-200! dark:hover:bg-gray-950!";
const textareaStyles =
  "box-border w-full text-blue-600 dark:text-blue-400 border-none resize-none outline-none p-5 text-lg h-[90%] wrap-break-word overflow-auto font-mono";

type LabProps = {
  html: string;
  css?: string;
  js?: string;
};

function Lab({ html, css, js }: LabProps) {
  const [htmlValue, setHtmlValue] = useState<string>(html);
  const [cssValue, setCssValue] = useState<string>(css || "");
  const [jsValue, setJsValue] = useState<string>(js || "");
  const [openedTab, setOpenedTab] = useState<string>("html");
  const outputRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const output = outputRef.current?.contentWindow?.document;
    if (output) {
      output.open();
      output.writeln(`<style>${cssValue}</style><body>${htmlValue}<script>${jsValue}</script></body>`);
      output.close();
    }
  }, [htmlValue, cssValue, jsValue]);

  return (
    <div className="w-full h-100 rounded-lg bg-gray-200 dark:bg-gray-950 overflow-hidden my-7 border-2 border-gray-700">
      <div className="w-full bg-gray-300 dark:bg-gray-900 flex h-10 items-center overflow-hidden">
        <div
          className={tabStyles + (openedTab == "html" ? selectedTabStyles : "")}
          onClick={() => {
            setOpenedTab("html");
          }}
        >
          HTML
        </div>
        {css && (
          <div className={tabStyles + (openedTab == "css" ? selectedTabStyles : "")} onClick={() => setOpenedTab("css")}>
            CSS
          </div>
        )}
        {js && (
          <div className={tabStyles + (openedTab == "js" ? selectedTabStyles : "")} onClick={() => setOpenedTab("js")}>
            JavaScript
          </div>
        )}
        <div className={tabStyles + (openedTab == "output" ? selectedTabStyles : "")} onClick={() => setOpenedTab("output")}>
          Output
        </div>
      </div>
      <div className="h-full overflow-auto">
        {openedTab == "html" && (
          <textarea
            placeholder="Enter HTML here"
            className={textareaStyles}
            onChange={(e) => setHtmlValue(e.target.value)}
            value={htmlValue}
          ></textarea>
        )}
        {openedTab == "css" && (
          <textarea
            placeholder="Enter CSS here"
            className={textareaStyles}
            onChange={(e) => setCssValue(e.target.value)}
            value={cssValue}
          ></textarea>
        )}
        {openedTab == "js" && (
          <textarea
            placeholder="Enter JavaScript here"
            className={textareaStyles}
            onChange={(e) => setJsValue(e.target.value)}
            value={jsValue}
          ></textarea>
        )}
        <iframe
          className={openedTab == "output" ? "w-full border-none outline-none bg-white h-90" : "hidden"}
          ref={outputRef}
        ></iframe>
      </div>
    </div>
  );
}

export default Lab;
