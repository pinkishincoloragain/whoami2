import { useCookies } from "react-cookie";

const [cookies, setCookie, removeCookie] = useCookies(["mode"]);

export const setCookie = () => {
  useEffect(() => {
    if (cookies.mode !== undefined) {
      setEmail(cookies.rememberEmail);
      setIsRemember(true);
    }
  }, []);

  const handleOnChange = (e) => {
    setIsRemember(e.target.check);
    if (e.target.check) {
      setCookie("rememberEmail", email, { maxAge: 2000 });
    } else {
      removeCookie("rememberEmail");
    }
  };
  return (
    <>
      <label className="loginPage_text">
        <input type="checkbox" onChange={handleOnChange} checked={isRemember} />
        ID 저장하기
      </label>
    </>
  );
};
