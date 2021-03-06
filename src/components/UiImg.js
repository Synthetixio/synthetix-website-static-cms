import * as React from "react";
import { withPrefix } from "gatsby";
import * as PropTypes from "prop-types";

export default class UiImg extends React.Component {
	static propTypes = {
		src: PropTypes.string.isRequired,
		isResponsive: PropTypes.bool,
		alt: PropTypes.string.isRequired
	};

	static defaultProps = {
		isResponsive: false
	};

	render() {
		const { src, isResponsive, ...rest } = this.props;
		let srcWithPrefix = withPrefix(src);
		let imgProps = {};
		if (isResponsive) {
			imgProps.srcSet = `${srcWithPrefix} 1x, ${srcWithPrefix.replace(
				".",
				"@2x."
			)}  2x,  ${srcWithPrefix.replace(".", "@3x.")}  3x`;
		}

		return <img src={srcWithPrefix} {...rest} {...imgProps} />;
	}
}
