import {
  GourmetSearchOptions,
  useGourmetSearch,
} from "../../hooks/fetchers/useGourmetSearch";
import { GourmetCard } from "./GourmetCard";
import { useState } from "react";
import { GourmetSearchBox, GourmetSearchBoxFormData } from "./GourmetSearchBox";

export const GourmetPage = () => {
  const [options, setOptions] = useState<GourmetSearchOptions>();
  const { data, error, isLoading } = useGourmetSearch(options);

  const onSubmit = (data: GourmetSearchBoxFormData) => {
    setOptions({ keyword: data.keyword, start: "1", count: "20" });
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>failed to load</div>;
  }

  return (
    <div>
      <GourmetSearchBox onSubmit={onSubmit}></GourmetSearchBox>

      {data?.map((x) => (
        <GourmetCard key={x.id} name={x.name} logo_image={x.logo_image} />
      ))}
    </div>
  );

  /**
   * 無限スクロール
   * 検索欄をヘッダー
   * 条件検索
   * 現在地からおすすめの店を初期表示
   * 検索中はスケルトン表示
   * 検索中は前の一覧を残す
   * 検索履歴からおすすめのお店を表示する機能
   */
};
