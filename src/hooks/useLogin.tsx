import { useState } from "react";
import validate from "../utils/validation";
import { useNavigate } from "react-router-dom";

interface Info {
  mailAddress: string;
  password: string;
}

const useLogin = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<Info>({
    mailAddress: "",
    password: "",
  });
  const [formErrors, setformErrors] = useState<Partial<Info>>({});

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues((prev) => {
      const { name, value } = e.target;
      const newValues = { ...prev, [name]: value };

      console.log(newValues);
      return newValues;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setformErrors(validate(formValues));
    const errors = validate(formValues);
    setformErrors(errors);

    if (Object.keys(errors).length > 0) {
      setformErrors(errors);
      return;
    }
    navigate("/App");
  };

  return {
    formValues,
    formErrors,
    handleEditChange,
    handleSubmit,
  };
};

export default useLogin;
