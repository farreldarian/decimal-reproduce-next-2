"use client";

import React from "react";
import Form from "./Form";

export default function Forms() {
  return (
    <div className="flex gap-6">
      <Form
        title=".toFraction()"
        calculate={(a, b) => a.div(b).toFraction().toString()}
      />
      <Form title=".div()" calculate={(a, b) => a.div(b).toString()} />
    </div>
  );
}
