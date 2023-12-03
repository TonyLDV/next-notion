"use client";
import React, { FC } from "react";

import { toast } from "sonner";

import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { Button } from "@/components/ui/button";
import ConfirmModal from "@/components/modals/confirm-modal";

type PropsT = { documentId: Id<"documents"> };

const Banner: FC<PropsT> = ({ documentId }) => {
  const route = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting note...",
      success: "Note deleted!",
      error: "Failed to delete note.",
    });
    route.push("/documents");
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });
    toast.promise(promise, {
      loading: "Restoring note...",
      success: "Note restored!",
      error: "Failed to restore note.",
    });
    route.push("/documents");
  };

  return (
    <div className="w-full bg-rose-500 p-2 text-center text-sm text-white flex items-center gap-x-2 justify-center">
      <p>This page is in the trash </p>

      <Button
        size={"sm"}
        onClick={onRestore}
        variant={"outline"}
        className="bg-transparent hover:bg-primary/5 p-1 px-2 h-auto font-normal border-white text-white hover:text-white"
      >
        Restore page
      </Button>

      <ConfirmModal onConfirm={onRemove}>
        <Button
          size={"sm"}
          variant={"outline"}
          className="bg-transparent hover:bg-primary/5 p-1 px-2 h-auto font-normal text-white hover:text-white border-white"
        >
          Delete
        </Button>
      </ConfirmModal>
    </div>
  );
};

export default Banner;
