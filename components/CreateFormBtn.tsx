import React from "react";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "./ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});

type FormSchemaParams = z.infer<typeof formSchema>;

const CreateFormBtn = () => {
  const form = useForm<FormSchemaParams>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit() {}
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create new form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFormBtn;
