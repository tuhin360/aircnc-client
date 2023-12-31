import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const value = params.get("category");
  const navigate = useNavigate();

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    }
    const url = qs.stringifyUrl({
        url: '/',
        query: updatedQuery
    },{skipNull: true})
    navigate(url)
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col cursor-pointer items-center justify-center gap-3 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500"
    >
      <Icon size={24}></Icon>
      <div className="text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
