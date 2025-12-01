/** biome-ignore-all lint/performance/noImgElement: "AI Elements is framework agnostic" */

"use client";;
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  ImageIcon,
  Loader2Icon,
  PaperclipIcon,
  PlusIcon,
  SendIcon,
  SquareIcon,
  XIcon,
} from "lucide-react";
import { nanoid } from "nanoid";
import {
  Children,
  createContext,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const AttachmentsContext = createContext(null);

export const usePromptInputAttachments = () => {
  const context = useContext(AttachmentsContext);

  if (!context) {
    throw new Error("usePromptInputAttachments must be used within a PromptInput");
  }

  return context;
};

export function PromptInputAttachment({
  data,
  className,
  ...props
}) {
  const attachments = usePromptInputAttachments();

  return (
    <div
      className={cn("group relative h-14 w-14 rounded-md border", className)}
      key={data.id}
      {...props}>
      {data.mediaType?.startsWith("image/") && data.url ? (
        <img
          alt={data.filename || "attachment"}
          className="size-full rounded-md object-cover"
          height={56}
          src={data.url}
          width={56} />
      ) : (
        <div
          className="flex size-full items-center justify-center text-muted-foreground">
          <PaperclipIcon className="size-4" />
        </div>
      )}
      <Button
        aria-label="Remove attachment"
        className="-right-1.5 -top-1.5 absolute h-6 w-6 rounded-full opacity-0 group-hover:opacity-100"
        onClick={() => attachments.remove(data.id)}
        size="icon"
        type="button"
        variant="outline">
        <XIcon className="h-3 w-3" />
      </Button>
    </div>
  );
}

export function PromptInputAttachments({
  className,
  children,
  ...props
}) {
  const attachments = usePromptInputAttachments();
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) {
      return;
    }
    const ro = new ResizeObserver(() => {
      setHeight(el.getBoundingClientRect().height);
    });
    ro.observe(el);
    setHeight(el.getBoundingClientRect().height);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      aria-live="polite"
      className={cn("overflow-hidden transition-[height] duration-200 ease-out", className)}
      style={{ height: attachments.files.length ? height : 0 }}
      {...props}>
      <div className="flex flex-wrap gap-2 p-3 pt-3" ref={contentRef}>
        {attachments.files.map((file) => (
          <Fragment key={file.id}>{children(file)}</Fragment>
        ))}
      </div>
    </div>
  );
}

export const PromptInputActionAddAttachments = ({
  label = "Add photos or files",
  ...props
}) => {
  const attachments = usePromptInputAttachments();

  return (
    <DropdownMenuItem
      {...props}
      onSelect={(e) => {
        e.preventDefault();
        attachments.openFileDialog();
      }}>
      <ImageIcon className="mr-2 size-4" /> {label}
    </DropdownMenuItem>
  );
};

export const PromptInput = ({
  className,
  accept,
  multiple,
  globalDrop,
  syncHiddenInput,
  maxFiles,
  maxFileSize,
  onError,
  onSubmit,
  children,
  ...props
}) => {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  const anchorRef = useRef(null);
  const formRef = useRef(null);

  // Find nearest form to scope drag & drop
  useEffect(() => {
    const root = anchorRef.current?.closest("form");
    if (root instanceof HTMLFormElement) {
      formRef.current = root;
    }
  }, []);

  const openFileDialog = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const matchesAccept = useCallback((f) => {
    if (!accept || accept.trim() === "") {
      return true;
    }
    // Simple check: if accept includes "image/*", filter to images; otherwise allow.
    if (accept.includes("image/*")) {
      return f.type.startsWith("image/");
    }
    return true;
  }, [accept]);

  const add = useCallback((files) => {
    const incoming = Array.from(files);
    const accepted = incoming.filter((f) => matchesAccept(f));
    if (accepted.length === 0) {
      onError?.({
        code: "accept",
        message: "No files match the accepted types.",
      });
      return;
    }
    const withinSize = (f) =>
      maxFileSize ? f.size <= maxFileSize : true;
    const sized = accepted.filter(withinSize);
    if (sized.length === 0 && accepted.length > 0) {
      onError?.({
        code: "max_file_size",
        message: "All files exceed the maximum size.",
      });
      return;
    }
    setItems((prev) => {
      const capacity =
        typeof maxFiles === "number"
          ? Math.max(0, maxFiles - prev.length)
          : undefined;
      const capped =
        typeof capacity === "number" ? sized.slice(0, capacity) : sized;
      if (typeof capacity === "number" && sized.length > capacity) {
        onError?.({
          code: "max_files",
          message: "Too many files. Some were not added.",
        });
      }
      const next = [];
      for (const file of capped) {
        next.push({
          id: nanoid(),
          type: "file",
          url: URL.createObjectURL(file),
          mediaType: file.type,
          filename: file.name,
        });
      }
      return prev.concat(next);
    });
  }, [matchesAccept, maxFiles, maxFileSize, onError]);

  const remove = useCallback((id) => {
    setItems((prev) => {
      const found = prev.find((file) => file.id === id);
      if (found?.url) {
        URL.revokeObjectURL(found.url);
      }
      return prev.filter((file) => file.id !== id);
    });
  }, []);

  const clear = useCallback(() => {
    setItems((prev) => {
      for (const file of prev) {
        if (file.url) {
          URL.revokeObjectURL(file.url);
        }
      }
      return [];
    });
  }, []);

  // Note: File input cannot be programmatically set for security reasons
  // The syncHiddenInput prop is no longer functional
  useEffect(() => {
    if (syncHiddenInput && inputRef.current) {
      // Clear the input when items are cleared
      if (items.length === 0) {
        inputRef.current.value = "";
      }
    }
  }, [items, syncHiddenInput]);

  // Attach drop handlers on nearest form and document (opt-in)
  useEffect(() => {
    const form = formRef.current;
    if (!form) {
      return;
    }
    const onDragOver = (e) => {
      if (e.dataTransfer?.types?.includes("Files")) {
        e.preventDefault();
      }
    };
    const onDrop = (e) => {
      if (e.dataTransfer?.types?.includes("Files")) {
        e.preventDefault();
      }
      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        add(e.dataTransfer.files);
      }
    };
    form.addEventListener("dragover", onDragOver);
    form.addEventListener("drop", onDrop);
    return () => {
      form.removeEventListener("dragover", onDragOver);
      form.removeEventListener("drop", onDrop);
    };
  }, [add]);

  useEffect(() => {
    if (!globalDrop) {
      return;
    }
    const onDragOver = (e) => {
      if (e.dataTransfer?.types?.includes("Files")) {
        e.preventDefault();
      }
    };
    const onDrop = (e) => {
      if (e.dataTransfer?.types?.includes("Files")) {
        e.preventDefault();
      }
      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        add(e.dataTransfer.files);
      }
    };
    document.addEventListener("dragover", onDragOver);
    document.addEventListener("drop", onDrop);
    return () => {
      document.removeEventListener("dragover", onDragOver);
      document.removeEventListener("drop", onDrop);
    };
  }, [add, globalDrop]);

  const handleChange = (event) => {
    if (event.currentTarget.files) {
      add(event.currentTarget.files);
    }
  };

  const convertBlobUrlToDataUrl = async url => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const text = (formData.get("message")) || "";

    // Convert blob URLs to data URLs asynchronously
    Promise.all(items.map(async ({ id, ...item }) => {
      if (item.url && item.url.startsWith("blob:")) {
        return {
          ...item,
          url: await convertBlobUrlToDataUrl(item.url),
        };
      }
      return item;
    })).then((files) => {
      onSubmit({ text, files }, event);
      clear();
    });
  };

  const ctx = useMemo(() => ({
    files: items.map((item) => ({ ...item, id: item.id })),
    add,
    remove,
    clear,
    openFileDialog,
    fileInputRef: inputRef,
  }), [items, add, remove, clear, openFileDialog]);

  return (
    <AttachmentsContext.Provider value={ctx}>
      <span aria-hidden="true" className="hidden" ref={anchorRef} />
      <input
        accept={accept}
        className="hidden"
        multiple={multiple}
        onChange={handleChange}
        ref={inputRef}
        type="file" />
      <form
        className={cn(
          "w-full divide-y overflow-hidden rounded-xl border bg-background shadow-sm",
          className
        )}
        onSubmit={handleSubmit}
        {...props}>
        {children}
      </form>
    </AttachmentsContext.Provider>
  );
};

export const PromptInputBody = ({
  className,
  ...props
}) => (
  <div className={cn(className, "flex flex-col")} {...props} />
);

export const PromptInputTextarea = ({
  onChange,
  className,
  placeholder = "What would you like to know?",
  ...props
}) => {
  const attachments = usePromptInputAttachments();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Don't submit if IME composition is in progress
      if (e.nativeEvent.isComposing) {
        return;
      }

      if (e.shiftKey) {
        // Allow newline
        return;
      }

      // Submit on Enter (without Shift)
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  const handlePaste = (event) => {
    const items = event.clipboardData?.items;

    if (!items) {
      return;
    }

    const files = [];

    for (const item of items) {
      if (item.kind === "file") {
        const file = item.getAsFile();
        if (file) {
          files.push(file);
        }
      }
    }

    if (files.length > 0) {
      event.preventDefault();
      attachments.add(files);
    }
  };

  return (
    <Textarea
      className={cn(
        "w-full resize-none rounded-none border-none p-3 shadow-none outline-none ring-0",
        "field-sizing-content bg-transparent dark:bg-transparent",
        "max-h-48 min-h-16",
        "focus-visible:ring-0",
        className
      )}
      name="message"
      onChange={(e) => {
        onChange?.(e);
      }}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      placeholder={placeholder}
      {...props} />
  );
};

export const PromptInputToolbar = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex items-center justify-between p-1", className)}
    {...props} />
);

export const PromptInputTools = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex items-center gap-1",
      "[&_button:first-child]:rounded-bl-xl",
      className
    )}
    {...props} />
);

export const PromptInputButton = ({
  variant = "ghost",
  className,
  size,
  ...props
}) => {
  const newSize =
    (size ?? Children.count(props.children) > 1) ? "default" : "icon";

  return (
    <Button
      className={cn(
        "shrink-0 gap-1.5 rounded-lg",
        variant === "ghost" && "text-muted-foreground",
        newSize === "default" && "px-3",
        className
      )}
      size={newSize}
      type="button"
      variant={variant}
      {...props} />
  );
};

export const PromptInputActionMenu = (props) => (
  <DropdownMenu {...props} />
);

export const PromptInputActionMenuTrigger = ({
  className,
  children,
  ...props
}) => (
  <DropdownMenuTrigger asChild>
    <PromptInputButton className={className} {...props}>
      {children ?? <PlusIcon className="size-4" />}
    </PromptInputButton>
  </DropdownMenuTrigger>
);

export const PromptInputActionMenuContent = ({
  className,
  ...props
}) => (
  <DropdownMenuContent align="start" className={cn(className)} {...props} />
);

export const PromptInputActionMenuItem = ({
  className,
  ...props
}) => (
  <DropdownMenuItem className={cn(className)} {...props} />
);

export const PromptInputSubmit = ({
  className,
  variant = "default",
  size = "icon",
  status,
  children,
  ...props
}) => {
  let Icon = <SendIcon className="size-4" />;

  if (status === "submitted") {
    Icon = <Loader2Icon className="size-4 animate-spin" />;
  } else if (status === "streaming") {
    Icon = <SquareIcon className="size-4" />;
  } else if (status === "error") {
    Icon = <XIcon className="size-4" />;
  }

  return (
    <Button
      aria-label="Submit"
      className={cn("gap-1.5 rounded-lg", className)}
      size={size}
      type="submit"
      variant={variant}
      {...props}>
      {children ?? Icon}
    </Button>
  );
};

export const PromptInputModelSelect = (props) => (
  <Select {...props} />
);

export const PromptInputModelSelectTrigger = ({
  className,
  ...props
}) => (
  <SelectTrigger
    className={cn(
      "border-none bg-transparent font-medium text-muted-foreground shadow-none transition-colors",
      'hover:bg-accent hover:text-foreground [&[aria-expanded="true"]]:bg-accent [&[aria-expanded="true"]]:text-foreground',
      className
    )}
    {...props} />
);

export const PromptInputModelSelectContent = ({
  className,
  ...props
}) => (
  <SelectContent className={cn(className)} {...props} />
);

export const PromptInputModelSelectItem = ({
  className,
  ...props
}) => (
  <SelectItem className={cn(className)} {...props} />
);

export const PromptInputModelSelectValue = ({
  className,
  ...props
}) => (
  <SelectValue className={cn(className)} {...props} />
);
