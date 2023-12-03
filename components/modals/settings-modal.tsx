"use client";
import { useSettings } from "@/hooks/use-settings";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import { Label } from "../ui/label";
import ModeToggle from "../ModeToggle";
import ThemeButton from "../ThemeButton";

const SettingsModal = () => {
  const setting = useSettings();
  return (
    <Dialog open={setting.isOpen} onOpenChange={setting.onClose}>
      <DialogContent className="border-b pb-3">
        <DialogHeader>
          <h2 className="text-lg font-medium">My settings</h2>
        </DialogHeader>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <Label>Appearance</Label>

            <span className="text-[0.8rem] text-muted-foreground">
              Customize how Jotion is looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
