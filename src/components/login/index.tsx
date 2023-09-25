import  { useContext } from "react";
import "./Login.scss";
import Input from "../input";
import { data } from "./data";
import { Link } from "react-router-dom";
import { auth } from "../../configs/firebaseConfig/fireBase.config";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Inputs } from "../../Types";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext } from "../../Context";
const Login = () => {
  const { addUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const responseData = await setPersistence(
        auth,
        browserSessionPersistence
      ).then(() => {
        return signInWithEmailAndPassword(auth, data.email, data.password);
      });

      addUser(responseData.user);
    } catch (error) {
      const errorMessage = "Your password or login incorrect";
      alert(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        {data.map((el) => (
          <Input<Inputs>
            {...el}
            Registration={register}
            errors={errors}
            key={el.id}
          />
        ))}
      </div>
      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <button type="submit" className="cancelbtn">
          Login
        </button>{" "}
        <Link to={"/registration"}>
          <button type="button" className="cancelbtn">
            registration
          </button>
        </Link>
        <span className="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div>
    </form>
  );
};
export default Login;
