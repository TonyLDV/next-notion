"use client";

import React, { FC } from "react";
import { useTheme } from "next-themes";
import { MoveDownIcon } from "lucide-react";
import { useEdgeStore } from "@/lib/edgestore";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";

type PropsT = {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
};

const Editor: FC<PropsT> = ({ onChange, editable, initialContent }) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
    uploadFile: handleUpload,
  });

  return (
    <div className="border-y-2 border-black dark:border-white p-1">
      {editable ? (
        <div className="flex items-center pb-3">
          <p>Enter text down below</p> <MoveDownIcon />
        </div>
      ) : null}

      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        placeholder="Enter text"
      />
    </div>
  );
};

export default Editor;
