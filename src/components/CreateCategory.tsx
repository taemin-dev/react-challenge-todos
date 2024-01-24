import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setCategories = useSetRecoilState(categoriesState);
  const onValid = ({ category }: IForm) => {
    setCategories((oldCategories) => [...oldCategories, category]);
    setValue("category", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("category", { required: "Please write a category" })}
        placeholder="Write a category"
      />
      <button>Add category</button>
    </form>
  );
}
export default CreateCategory;
