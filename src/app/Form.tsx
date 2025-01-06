"use client";

import { Controller, useForm } from "react-hook-form";
import React from "react";
import { Button, Checkbox } from "@dfds-frontend/compass-ui";

interface FormSchema {
  isMarried: boolean;
}

type a = React.JSX.IntrinsicElements["input"];

export default function Form() {
  const { control } = useForm<FormSchema>();
  return (
    <form>
      <Controller
        control={control}
        name="isMarried"
        render={({ field: { name, value, onChange, ref, onBlur } }) => (
          <>
            <Checkbox
              name={name}
              checked={value}
              onChange={(e) => onChange(e.target.checked)}
              ref={ref}
            >
              Are you married?
            </Checkbox>
          </>
        )}
      />

      <Button>Submit</Button>
    </form>
  );
}
