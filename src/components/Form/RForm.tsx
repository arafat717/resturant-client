/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TRFprops = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
} & TFormConfig;

const RForm = ({ onSubmit, children, defaultValues, resolver }: TRFprops) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = async (data) => {
    await onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default RForm;
