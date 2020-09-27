import { useEffect, useState } from "react";
import { useInputEvent } from "./useInputEvent";

export const useSecretCode = (secretCode) => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const key = useInputEvent();

  useEffect(() => {
    // ignore keyup
    if (key == null) return;

    // reset if invalid key
    if (key !== secretCode[count]) {
      setCount(0);
      return;
    }

    // valid key
    setCount((state) => state + 1);

    // code complete
    if (count + 1 === secretCode.length) {
      setSuccess(true);
    }
  }, [key]);

  return success;
};

export const useBootstrapSam = () => {
  const success = useSecretCode([
    "KeyB",
    "KeyO",
    "KeyO",
    "KeyT",
    "KeyS",
    "KeyT",
    "KeyR",
    "KeyA",
    "KeyP",
    "KeyS",
    "KeyA",
    "KeyM",
  ]);
  return success;
};

export const useFigmaJacob = () => {
  const success = useSecretCode([
    "KeyF",
    "KeyI",
    "KeyG",
    "KeyM",
    "KeyA",
    "KeyJ",
    "KeyA",
    "KeyC",
    "KeyO",
    "KeyB",
  ]);
  return success;
};

export const useRTCEthan = () => {
  const success = useSecretCode([
    "KeyR",
    "KeyT",
    "KeyC",
    "KeyE",
    "KeyT",
    "KeyH",
    "KeyA",
    "KeyN",
  ]);
  return success;
};

export const useCSSAaron = () => {
  const success = useSecretCode([
    "KeyC",
    "KeyS",
    "KeyS",
    "KeyA",
    "KeyA",
    "KeyR",
    "KeyO",
    "KeyN",
  ]);
  return success;
};

export const useSecretCodes = (defaultLogo) => {
  const bootstrapSam = useBootstrapSam();
  const figmaJacob = useFigmaJacob();
  const rtcEthan = useRTCEthan();
  const cssAaron = useCSSAaron();
  return bootstrapSam
    ? "bootstrapsam.gif"
    : figmaJacob
    ? "figmajacob.gif"
    : rtcEthan
    ? "rtcethan.gif"
    : cssAaron
    ? "cssaaron.gif"
    : defaultLogo;
};
