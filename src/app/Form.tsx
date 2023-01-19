"use client";

import Decimal from "decimal.js";
import React, { ComponentProps, forwardRef, useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  title: string;
  calculate: (a: Decimal, b: Decimal) => string;
};

export default function Form({ title, calculate }: Props) {
  const [result, setResult] = useState<string | null>(null);
  const { register, handleSubmit } = useForm({ defaultValues: { a: 1, b: 2 } });

  const onSubmit = handleSubmit(({ a, b }) => {
    setResult(calculate(new Decimal(a), new Decimal(b)));
  });

  return (
    <form className="flex flex-col gap-3 max-w-md" onSubmit={onSubmit}>
      <p>{title}</p>
      <p>Result: {result}</p>
      <Input type="number" {...register("a", { valueAsNumber: true })} />
      <Input type="number" {...register("b", { valueAsNumber: true })} />
      <button
        type="submit"
        className="py-1.5 px-3 bg-gray-100 hover:bg-gray-200 transition"
      >
        Calculate
      </button>
    </form>
  );
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  (props, ref) => {
    return (
      <input
        type="number"
        className="border p-1.5 rounded"
        ref={ref}
        {...props}
      />
    );
  }
);
