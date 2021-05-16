import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdContentCopy, MdCheckCircle, MdError } from "react-icons/md";
import FadeLoader from "react-spinners/FadeLoader";
import Modal from "../../../Modal";
import { Header, Wrapper, Main, Footer } from "./styles";
import { useCopy } from "../../../../../utils/hooks/useCopyPaste";

export interface FeedbackProps {
  userDetails: any;
  submitting: boolean;
  isOpen: boolean;
  closeModal?: () => void;
  error: Error | null;
  retry: ()=>void; 
}

const Feedback: FC<FeedbackProps> = ({
  userDetails,
  submitting,
  isOpen,
  closeModal,
  error,
  retry
}) => {
  const { copied, copy } = useCopy();
  const copyBtn = useRef<HTMLButtonElement | null>(null);
  const retryBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(()=>{
    if(!!error){
      retryBtn.current?.focus();
    }else if(isOpen){
      copyBtn.current?.focus();
    }
  }, [error, isOpen, submitting]);

  return (
    <Modal isOpen={isOpen}>
      {submitting ? (
        <FadeLoader color="white" />
      ) : (
        <Wrapper>
          {!error ? (
            <>
              <Header><div><MdCheckCircle className="success"/></div><div>Account created successfully</div></Header>
              <Main>
                <div className="greeting">Welcome, {userDetails.lastName}</div>
                <p className="userId">
                  Your account ID will be,&nbsp;
                  <span>{userDetails.accountRef}</span> 
                  <button className="transparent" onClick={()=>copy(userDetails.accountRef)} ref={copyBtn}>
                    {copied ? "Copied!" : <MdContentCopy />}
                  </button>
                </p>
              </Main>
              <Footer>
              <Link
                to="/retail-login"
                className="button-look filled primary rounded small"
                >
                    Go to Login
                </Link>
              </Footer>
            </>
          ) : (
            <>
                <Header><div><MdError className="error"/></div><div>Error creating account</div></Header>
                <Main>
                    { error.message }
                </Main>
                <Footer>
                    <button onClick={retry} className="primary filled medium rounded" ref={retryBtn}>Retry</button>
                </Footer>
            </>
          )}
        </Wrapper>
      )}
    </Modal>
  );
};

export default Feedback;
