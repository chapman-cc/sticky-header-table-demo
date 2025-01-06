"use client";

import { Controller, useForm } from "react-hook-form";
import React, { useId } from "react";
import { Button, Checkbox } from "@dfds-frontend/compass-ui";

interface FormSchema {
  isMarried: boolean;
}

type a = React.JSX.IntrinsicElements["input"];

export default function Form() {
  const { control, watch, register } = useForm<FormSchema>();
  const idForNative = useId();

  // toggle here
  if (true) {
    return (
      <div>
        <h4>Value: {String(watch("isMarried"))}</h4>

        <h5>Plain JSX form: </h5>
        <form>
          <div className="flex gap-4">
            <input type="checkbox" {...register("isMarried")} />
            <label htmlFor={idForNative}>Are you married?</label>
          </div>

          <Button>Submit</Button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h4>Value: {String(watch("isMarried"))}</h4>

      <h5>
        Form with <span className="font-bold">Compass UI</span> elements:{" "}
      </h5>
      <form>
        <Controller
          control={control}
          name="isMarried"
          render={({ field: { name, value, onChange, ref, onBlur } }) => (
            <Checkbox name={name} checked={value} onChange={onChange} ref={ref}>
              Are you married?
            </Checkbox>
          )}
        />

        <Button>Submit</Button>
      </form>
    </div>
  );
}
