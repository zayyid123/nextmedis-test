"use client";
import { useEffect, useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "../ui/modal";

interface CustomModalProps {
  title?: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
  children?: ReactNode;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  title = "",
  description = "",
  isOpen,
  onClose,
  onConfirm,
  loading,
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title={title}
      description={description}
      isOpen={isOpen}
      onClose={onClose}
    >
      {children}
      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
