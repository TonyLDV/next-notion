"use client";

import React, { useState } from "react";

import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Search, Trash, Undo } from "lucide-react";
import { useQuery, useMutation } from "convex/react";
import { Spinner } from "@/components/Spinner/Spinner";
import { useParams, useRouter } from "next/navigation";
import ConfirmModal from "@/components/modals/confirm-modal";

const TrashBox = () => {
  const router = useRouter();
  const params = useParams();
  const documents = useQuery(api.documents.getTrash);
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);

  const [search, setSearch] = useState("");

  const filteredDocuments = documents?.filter((document) => {
    return document.title.toLowerCase().includes(search.toLowerCase());
  });

  const onRestore = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentId: Id<"documents">
  ) => {
    event.stopPropagation();
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring note...",
      success: "Note restored",
      error: "Failed to restore note",
    });
  };

  const onRemove = (documentId: Id<"documents">) => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting note...",
      success: "Note deleted",
      error: "Failed to delete note",
    });
    if (params.documentId === documentId) {
      router.push("/documents");
    }
  };

  const onClick = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  if (!documents) {
    return (
      <div className="h-full flex-center p-4">
        <Spinner width={38} height={38} />
      </div>
    );
  }
  return (
    <div className="text-sm">
      <div className="flex items-center p-2 gap-x-1">
        <Search className="h-4 w-4" />

        <Input
          value={search}
          className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
          placeholder="Filter by page title..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-2 px-1 pb-1">
        <p
          className="hidden last:block text-xs text-center
         text-muted-foreground pb-2"
        >
          No documents found.
        </p>
        {filteredDocuments?.map((document) => (
          <div
            role="button"
            className="text-sm rounded-sm w-full hover:bg-primary/5 
            flex items-center text-primary justify-between mb-1"
            key={document._id}
            onClick={() => onClick(document._id)}
          >
            <span className="truncate pl-2 ">{document.title}</span>

            <div className="flex items-center">
              <div
                onClick={(e) => onRestore(e, document._id)}
                role="button"
                className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
              >
                <Undo className="h-4 w-4 text-muted-foreground" />
              </div>

              <ConfirmModal onConfirm={() => onRemove(document._id)}>
                <div
                  role="button"
                  className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                >
                  <Trash className="w-4 h-4 text-muted-foreground" />
                </div>
              </ConfirmModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrashBox;
