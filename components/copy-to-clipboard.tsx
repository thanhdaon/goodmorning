"use client";

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "~/components/ui/button";

export function CopyToClipBoard({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  function onCopy() {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
    });
  }

  return (
    <Button variant="outline" size="icon" onClick={onCopy}>
      {copied ? (
        <CheckIcon className="size-4 text-green-500" />
      ) : (
        <CopyIcon className="size-4" />
      )}
    </Button>
  );
}
