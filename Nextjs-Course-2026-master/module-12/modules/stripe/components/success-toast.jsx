"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function SuccessToast({ success, canceled }) {
  useEffect(() => {
    if (success) {
      toast.success("Welcome to Pro! 🎉", {
        description: "Your subscription is now active",
      });
    }
    if (canceled) {
      toast.error("Payment canceled", {
        description: "You can upgrade anytime",
      });
    }
  }, [success, canceled]);

  return null;
}
