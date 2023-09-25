import  { useContext } from "react";
import "./Register.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../input";
import { data } from "./data";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
} from "firebase/auth";
import { auth } from "../../configs/firebaseConfig/fireBase.config";
import { Inputs } from "../../Types";
import { AuthContext } from "../../Context";
import { Link } from "react-router-dom";
const Register = () => {
  const { addUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.pswrepeat) {
      setError("pswrepeat", { message: "passwords must be the same" });
    } else {
      try {
        const responseData = await setPersistence(
          auth,
          browserSessionPersistence
        ).then(() =>
          createUserWithEmailAndPassword(auth, data.email, data.password)
        );
        addUser(responseData.user);
      } catch (error) {
        const errorMessage = (error as Error).message;
        alert(errorMessage);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        {data.map((el) => (
          <Input<Inputs>
            {...el}
            Registration={register}
            errors={errors}
            key={el.id}
          />
        ))}

        <hr />

        <button type="submit" className="registerbtn">
          Register
        </button>
      </div>

      <div className="container signin">
        <p>
          Already have an account? <Link to="/login">Sign in</Link>.
        </p>
      </div>
    </form>
  );
};

export default Register;
