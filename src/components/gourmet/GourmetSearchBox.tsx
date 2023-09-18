import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export type GourmetSearchBoxFormData = {
  keyword: string;
};

type GourmetSearchBoxProps = {
  onSubmit: (data: GourmetSearchBoxFormData) => void;
};

export const GourmetSearchBox = (props: GourmetSearchBoxProps) => {
  const { onSubmit } = props;

  const { register, handleSubmit } = useForm<GourmetSearchBoxFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="検索キーワードを入力してください"
        {...register("keyword")}
      />
      <Button type="submit">検索</Button>
    </form>
  );
};
