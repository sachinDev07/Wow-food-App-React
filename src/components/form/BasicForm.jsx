import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loggedIn } from "../../utils/loginSlice";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntery, setAllEntery] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newEntery = { email: email, password: password };
    setAllEntery([...allEntery, newEntery]);

    setEmail("");
    setPassword("");

    dispatch(loggedIn(true));

    setTimeout(() => {
      navigate("/cart");
    }, 3000);
  };

  return (
    <main className="pt-20 flex flex-col items-center justify-center h-screen bg-slate-400">
      <p className="text-red-500 flex w-[350px] font-medium mb-1">
        (Firstly you have to loggin)
      </p>
      <form
        action=""
        onSubmit={submitForm}
        className="bg-blue-200 p-8 rounded-md w-[22%] min-w-[350px]"
      >
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none pl-2 rounded-sm"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-lg font-medium">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none pl-2 rounded-sm"
          />
        </div>

        <button
          type="submit"
          className="mt-8 py-1 text-white px-4 rounded-md bg-green-400 text-lg font-medium hover:bg-green-500"
        >
          Login
        </button>
      </form>
      <div className="min-w-[350px] mt-8">
        {allEntery.map((ele) => (
          <div
            key={ele}
            className="flex items-center justify-between py-2 px-4 bg-blue-300 rounded-md font-medium mt-2 gap-4"
          >
            <span>{ele.email}</span>
            <span>{ele.password}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BasicForm;
