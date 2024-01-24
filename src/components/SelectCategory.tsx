import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesState, categoryState } from "../atoms";

function SelectCategory() {
  const [category, setCategory] = useRecoilState(categoryState);
  const categories = useRecoilValue(categoriesState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <select value={category} onInput={onInput}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
export default SelectCategory;
