import { Button, Divider, IconButton } from "@mui/material";
import * as React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./FooterPage.scss";
import { UserContext } from "../../globals/contexts/UserContext";
import { useNavigateToTop } from "../../hooks/useNavigateToTop";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

interface FooterPageProps {
  labelBefore?: string;
  labelAfter?: string;
  linkBefore?: string;
  linkAfter?: string;
  page: string;
}
const FooterPage: React.FC<FooterPageProps> = (props: FooterPageProps) => {
  const { labelAfter, labelBefore, linkAfter, linkBefore, page } = props;
  //const redirect = useNavigate();
  const redirect = useNavigateToTop();
  const [user, dispatch] = React.useContext(UserContext);

  const openFeedBackLike = () => {
    if (!page || !dispatch) return;
    dispatch({
      type: "OPENFEEDBACK",
      payload: {
        ...user,
        dialogRate: { pageToComment: page, open: true, like: true },
      },
    });
  };
  const openFeedBackDisLike = () => {
    if (!page || !dispatch) return;
    dispatch({
      type: "OPENFEEDBACK",
      payload: {
        ...user,
        dialogRate: { pageToComment: page, open: true, like: false },
      },
    });
  };
  return (
    <footer className="fui-page-footer-container">
      <Divider style={{ width: "100%" }}></Divider>

      <div className="redirect-small-container">
        {labelBefore && (
          <Button
            startIcon={<KeyboardArrowLeftIcon />}
            onClick={linkBefore ? () => redirect(linkBefore) : undefined}
          >
            {labelBefore}
          </Button>
        )}
        {labelAfter && (
          <Button
            endIcon={<KeyboardArrowRightIcon />}
            onClick={linkAfter ? () => redirect(linkAfter) : undefined}
          >
            {labelAfter}
          </Button>
        )}
      </div>

      <div className="inner-container-complete">
        <div className="redirect-container">
          {labelBefore && (
            <Button
              startIcon={<KeyboardArrowLeftIcon />}
              onClick={linkBefore ? () => redirect(linkBefore) : undefined}
            >
              {labelBefore}
            </Button>
          )}
        </div>
        <div className="like-icon-container">
          Was this page helpful?
          <IconButton
            //style={{ borderRadius: "8px", border: "0.5px solid #eaeef3" }}
            onClick={openFeedBackLike}
            color="secondary"
            aria-label="upload picture"
            component="label"
          >
            <ThumbUpIcon />
          </IconButton>
          <IconButton
            //style={{ borderRadius: "8px", border: "0.5px solid #eaeef3" }}
            onClick={openFeedBackDisLike}
            color="secondary"
            aria-label="upload picture"
            component="label"
          >
            <ThumbDownIcon />
          </IconButton>
        </div>
        <div className="redirect-container">
          {labelAfter && (
            <Button
              endIcon={<KeyboardArrowRightIcon />}
              onClick={linkAfter ? () => redirect(linkAfter) : undefined}
            >
              {labelAfter}
            </Button>
          )}
        </div>
      </div>
    </footer>
  );
};
export default FooterPage;
