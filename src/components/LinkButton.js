import {useNavigate} from "react-router-dom";
import { genericHashLink } from 'react-router-hash-link';

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    forwardedRef,
    // ⬆ filtering out props that `button` doesn't know what to do with
    ...rest
  } = props

  const navigate = useNavigate();

  const clickHandler = onClick ? onClick : (e) => {
    e.preventDefault();
    navigate(to, { replace: true });
  }

  return (
    <button {...rest} ref={forwardedRef} onClick={clickHandler} />
  )
}

export const HashLinkButton = genericHashLink(LinkButton);
export default LinkButton;