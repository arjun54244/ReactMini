
import "./App.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiOutlineTwitter } from "react-icons/ai";

function App() {

  return (
    <>
      <div className="logo-box">
        {/* <img src="./logo.png" alt="apple" className="logo" /> */}
        <AiOutlineTwitter size={30} />
        <h2>  Sign In to Twitter</h2>
        <button>
          {/* <img src="./google.png" alt="apple" /> */}
          <FcGoogle size={22}/> &nbsp; Sign in with Google
        </button>
        <button>
          {/* <img src="./apple.png" alt="apple" /> */}
          <AiFillApple size={22} /> Sign in with Google
        </button>
        <hr></hr>
        <span>Or</span>
        <form>
          <input type="text" placeholder="Phone email or username" />
          <button>Next</button>
        </form>
        <button>Forget Password</button>
        <p>
          Don't Have an account<a>Sign up</a>
        </p>
      </div>
    </>
  );
}

export default App;
