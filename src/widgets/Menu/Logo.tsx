import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
	isPushed: boolean;
	isDark: boolean;
	togglePush: () => void;
	href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
	const isAbsoluteUrl = href.startsWith("http");
	const innerLogo = (
		<>
			<LogoIcon className="mobile-icon" />
			<LogoWithText className="desktop-icon" isDark={isDark} width="400px" />
		</>
	);

	return (
		<Flex>
			{isPushed ? (
				<StyledLink to={href} aria-label="Icicb home page">
					{innerLogo}
				</StyledLink>
			) : (
				""
			)}
		</Flex>
	);
};

export default Logo;
